// const values = config.get('configurations');
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const cp = require('child_process');
// const path = require('path');
var fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "open-in-marked" is now active!');
    const values = vscode.workspace.getConfiguration('openinmarked');
    console.log(JSON.stringify(values));
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.openInMarked', function () {
        // The code you place here will be executed every time your command is executed
        const currentlyOpenTabfilePath = vscode.window.activeTextEditor.document.fileName;
        // const currentlyOpenTabfileName = path.basename(currentlyOpenTabfilePath);
        // Display a message box to the user
        if (fs.existsSync(currentlyOpenTabfilePath)) {
            // Do something
            vscode.window.showInformationMessage(`Open In Marked ${currentlyOpenTabfilePath}`);
            cp.exec(`open -a "${values.apppath}" ${currentlyOpenTabfilePath}`, (err, stdout, stderr) => {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (err) {
                    console.log('error: ' + err);
                }
            });
            
        }else{
            vscode.window.showInformationMessage(`You need to save your file "${currentlyOpenTabfilePath}"`);
        }
        
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;