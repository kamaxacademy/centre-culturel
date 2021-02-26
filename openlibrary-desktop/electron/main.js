const { app, BrowserWindow, ipcMain } = require("electron");
// const { channels } = require("../src/shared/constant");
const path = require("path");
require('electron-reload')
const isDev = require('electron-is-dev')
const url = require("url");
// const { create } = require('domain');
var multiIsbn = require("multi-isbn")
// multiIsbn.init()
// multiIsbn.find(9780156013987, function(err, data) {
//   if (err) throw err
//   console.log(JSON.stringify(data, null, 2))
// })


let mainWindow;
function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: "file:",
      slashes: true
    });
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webSecurity:false
    }
  });
  mainWindow.loadURL(startUrl);
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow)
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
