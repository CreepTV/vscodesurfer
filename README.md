# VSCodeSurfer

**VSCodeSurfer** opens a video panel directly beside your code in VS Code — fullscreen, no player controls, muted and looped. Perfect for keeping a background video running while you work.

## Features

- Plays any local video file (`.mp4`, `.webm`, `.ogg`, `.mov`)
- Opens as a split panel to the right of your active editor
- No controls, no distractions — just the video
- Video loops automatically

## Setup

1. Locate the extension folder. You can find it at:
   - **Windows:** `%USERPROFILE%\.vscode\extensions\conflictstudios.vscodesurfer-<version>`
   - **macOS/Linux:** `~/.vscode/extensions/conflictstudios.vscodesurfer-<version>`

2. Place your video file into the `media/` subfolder:
   ```
   vscodesurfer-<version>/
   └── media/
       └── myvideo.mp4
   ```
   Supported formats: `.mp4`, `.webm`, `.ogg`, `.mov`

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Run **`VSCodeSurfer: Open Video Panel`**

The video panel opens to the right and starts playing immediately.

## Notes

- Only the first video file found in the `media/` folder is used.
- If no video is found, an error message will guide you to the correct folder.
- The video file is **not** included with the extension — you provide your own.

## License

MIT
