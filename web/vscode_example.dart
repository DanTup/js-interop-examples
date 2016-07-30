import 'package:js/js.dart' show allowInterop;
import 'package:js_interop_examples/vscode_interop.dart';

void main() {
  // In Dart right now.
  print('Hello World (from Dart)');

  // This will work in Dart2js (and I imagine, DDC?) but not in Dartium without
  // using allowInterop around the callback.
  var disposable = vscode.commands.registerCommand(
      'extension.sayHello',
      allowInterop(() {
        vscode.window.showInformationMessage('Hello World (from JS)');
      }));

  // Still JS Interop.
  context.subscriptions.add(disposable);
}
