/* An example Visual Studio Code API. */
/* See https://stackoverflow.com/questions/38672099/how-can-i-interop-with-existing-js-objects */
"use strict";

(function (exports) {
    var registeredCommands = {};

    // Not part of the real API, but we will call these from vscode_interop.html
    // to prove that our Dart code worked.
    exports.debug = {
        disposeAllSubscriptions: function () {
            var subscriptions = exports.context.subscriptions;
            subscriptions.forEach(function (disposable) {
                disposable();
            });
            exports.context.subscriptions = [];
        },

        runCommand: function (extensionName) {
            var command = registeredCommands[extensionName];
            if (!command) {
                console.error('No extension found named ' + extensionName);
            } else {
                console.log('Running extension ' + extensionName);
                command();
            }
        }
    };

    exports.context = {
        subscriptions: []
    };

    exports.vscode = {
        commands: {
            registerCommand: function (extensionName, extensionCallback) {
                registeredCommands[extensionName] = extensionCallback;
                console.log('vscode.commands.registerCommand(' + extensionName + ')');
                return function () {
                    delete registeredCommands[extensionName];
                    console.log('Disposed ' + extensionName);
                };
            }
        },

        window: {
            showInformationMessage: function (message) {
                console.info('vscode.window.showInformationMessage\n\n' + message);
            }
        }
    };
})(window);
