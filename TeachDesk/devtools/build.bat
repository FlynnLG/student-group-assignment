rem Simple Building tool made by Octodino

@echo off

echo Teachdesk Builder - v1.0
echo Copyright (c) 2022, Octodino

cd ..

echo Are the needed packages installed?


set /p id="(y/n): "

if %id% == "n"( goto :a ) else ( goto :b )


:a
    
    echo Installing packages...
    echo Installing packages... (1/2)
    npm install --save-dev @electron-forge/cli
    echo Installing packages... (2/2)
    npm exec --package=@electron-forge/cli -c "electron-forge import"

    echo Finished installing packages.
    goto :b

:b
    echo Building...
    npm run publish