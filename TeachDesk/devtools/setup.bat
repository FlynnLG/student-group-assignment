@echo off

echo Teachdesk Setup - v1.0
echo Copyright (c) 2022, Octodino

cd ..

echo Installing packages...
echo Installing packages... (1/2)
npm install --save-dev @electron-forge/cli
echo Installing packages... (2/2)
npm exec --package=@electron-forge/cli -c "electron-forge import"
echo Finished installing packages.