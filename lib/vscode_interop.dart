@JS()
library vscode_interop;

import 'package:js/js.dart';

@JS()
external VSCodeContext get context;

@JS()
abstract class VSCodeContext {
  external List<Function> get subscriptions;
}

@JS()
external VSCode get vscode;

@JS()
abstract class VSCode {
  external VSCodeCommands get commands;

  external VSCodeWindow get window;
}

@JS()
abstract class VSCodeCommands {
  external Function registerCommand(String extensionName,
      void extensionCallback());
}

@JS()
abstract class VSCodeWindow {
  external void showInformationMessage(String message);
}
