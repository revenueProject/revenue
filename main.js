const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname);

let win;

function createWindow() {
  win = new BrowserWindow();

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  }))

  win.on('closed', () => {
    win = null;
  });

  win.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
