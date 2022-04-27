'use strict';
const path = require('path');
const electron = require('electron');
const app = electron.app;
let tray = null;

exports.create = (mainWindow) => {
  if (process.platform === 'darwin' || tray) {
    return;
  }

  const iconPath = path.join(__dirname, 'icons/index.png');

  const toggleWin = () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  };

  const contextMenu = electron.Menu.buildFromTemplate([
    {
      label: 'Toggle',
      click() {
        toggleWin();
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click() {
        app.quit();
      }
    }
  ]);

  tray = new electron.Tray(iconPath);
  tray.setToolTip('Teachdesk');
  tray.setContextMenu(contextMenu);
  tray.on('click', toggleWin);
};