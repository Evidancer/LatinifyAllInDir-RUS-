@echo off
set /p arg1="Enter path to selected folder (without '\' or '/' at the end):"
node index.js %arg1%
pause