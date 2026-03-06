const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Register empty tree data provider so the welcome view is shown
    vscode.window.registerTreeDataProvider('vscodesurfer.sidebar', {
        getTreeItem: (el) => el,
        getChildren: () => []
    });

    const disposable = vscode.commands.registerCommand('vscodesurfer.start', function () {
        // Look for any video file in the media/ folder
        const mediaDir = path.join(context.extensionPath, 'media');
        const supportedExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
        let videoFile = null;

        if (fs.existsSync(mediaDir)) {
            const files = fs.readdirSync(mediaDir);
            videoFile = files.find(f => supportedExtensions.includes(path.extname(f).toLowerCase()));
        }

        if (!videoFile) {
            vscode.window.showErrorMessage(
                'VSCodeSurfer: No video file found. Place a .mp4 (or .webm/.ogg) file in the "media/" folder of the extension directory: ' + mediaDir
            );
            return;
        }

        const panel = vscode.window.createWebviewPanel(
            'vscodesurfer',
            'Video Panel',
            vscode.ViewColumn.Beside,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [vscode.Uri.file(mediaDir)]
            }
        );

        panel.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'media', 'SubwayJake.png'));

        const videoUri = panel.webview.asWebviewUri(
            vscode.Uri.file(path.join(mediaDir, videoFile))
        );

        panel.webview.html = getWebviewContent(videoUri, panel.webview.cspSource);
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(videoUri, cspSource) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; media-src ${cspSource}; style-src 'unsafe-inline';">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subway Surfers</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
        }
        video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <video autoplay muted loop playsinline>
        <source src="${videoUri}" type="video/mp4">
    </video>
</body>
</html>`;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
