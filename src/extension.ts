// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { time, clear } from "console";

let timeout: NodeJS.Timeout;
let interval: NodeJS.Timeout;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "evimacs-tools" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "evimacs-tools.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from evimacs_tools!");
    }
  );

  let timestartCommand = vscode.commands.registerCommand(
    "evimacs-tools.start",
    () => {
		let timer: number = 10;
		interval = setInterval(() => {
			vscode.window.setStatusBarMessage(`${--timer}`);
		}, 1 * 1000);
      timeout = setTimeout(() => {
		vscode.window.showInformationMessage("hello world from hello");
		clearInterval(interval);
		vscode.window.setStatusBarMessage('');
      }, timer * 1000);
    }
  );

  let timestopCommand = vscode.commands.registerCommand(
    "evimacs-tools.stop",
    () => {
		clearTimeout(timeout);
		vscode.window.showInformationMessage("cleared");
		clearInterval(interval);
		vscode.window.setStatusBarMessage('');
    }
  );
  context.subscriptions.push(disposable);
  context.subscriptions.push(timestartCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
