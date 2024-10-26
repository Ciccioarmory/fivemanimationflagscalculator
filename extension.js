const vscode = require('vscode');

class FiveMAnimationViewProvider {
    constructor(context) {
        this._context = context;
    }

    // This method will be called when the view is activated
    resolveWebviewView(webviewView) {
        webviewView.webview.options = {
            enableScripts: true,
        };

        // Set the HTML content for the webview
        webviewView.webview.html = this.getWebviewContent();
    }

    getWebviewContent() {
		return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>FiveM Animation</title>
			<style>
				body, html {
					margin: 0;
					padding: 0;
					height: 100%;
					overflow: hidden; /* Prevent scrollbars on the body */
				}
				iframe {
					width: 100%;
					height: 100vh; /* Set height to 100vh for full viewport height */
					border: none;
				}
			</style>
		</head>
		<body>
			<iframe src="https://vespura.com/fivem/animations/"></iframe>
		</body>
		</html>`;
	}
}

function activate(context) {
    const provider = new FiveMAnimationViewProvider(context);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('fivemAnimationView', provider)
    );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};