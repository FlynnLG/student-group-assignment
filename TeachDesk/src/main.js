// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs');
const {create} = require("./tray");

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: (__dirname + 'icons/index.png'),
    width: 1600,
    height: 1000,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  


  // and load the index.html of the app.
  mainWindow.loadFile(`${__dirname}/lib/index.html`)
  

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// ADDED CLOSING MACOS WHEN CLOSING ALL WINDOWS
app.on('window-all-closed', () => {
  app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

  //TODO: Auto Updater => Docs here https://www.electronjs.org/docs/latest/tutorial/updates required NPM Packages Downloaded!!!!