@echo off
cd /d "%~dp0"

echo Preparing Wangchang World...

if not exist "node_modules" (
  echo First run: installing local dependencies. Please wait.
  call npm install
  if errorlevel 1 (
    echo Install failed. Please check whether Node.js is working.
    pause
    exit /b 1
  )
)

echo Building production files...
call npm run build
if errorlevel 1 (
  echo Build failed. Please send a screenshot of this window.
  pause
  exit /b 1
)

echo Starting local service and iPad public URL window...
start "Wangchang World - Local Service" cmd /k "cd /d ""%~dp0"" && npm run preview"
timeout /t 2 /nobreak >nul
start "Wangchang World - iPad Public URL" cmd /k "cd /d ""%~dp0"" && npx localtunnel --port 8080 --local-host localhost"

echo.
echo Started.
echo In the "iPad Public URL" window, find the https://xxxx.loca.lt address.
echo If a confirmation page appears, enter the IP address shown on that page.
echo.
pause
