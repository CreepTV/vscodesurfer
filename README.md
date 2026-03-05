# VSCodeSurfer

Play a **Subway Surfers** gameplay video fullscreen inside a VS Code tab — no player controls, no distractions.

## Setup

1. Place your video file (`.mp4`, `.webm`, `.ogg`, or `.mov`) into the `media/` folder inside the extension directory:
   ```
   VSCodeSurfer/
   └── media/
       └── subway.mp4   ← your video here
   ```

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Run `VSCodeSurfer: Start Subway Surfers`

A new tab will open and immediately start playing the video fullscreen, muted and looped.

## Development

Press `F5` to launch the Extension Development Host and test the extension.
