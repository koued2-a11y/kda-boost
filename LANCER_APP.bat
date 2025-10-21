@echo off
echo ========================================
echo   KDA-BOOST - Lancement de l'app
echo ========================================
echo.

echo [1/4] Installation des dependances...
call npm install
if %errorlevel% neq 0 (
    echo Erreur lors de l'installation!
    pause
    exit /b 1
)

echo.
echo [2/4] Generation du client Prisma...
call npx prisma generate
if %errorlevel% neq 0 (
    echo Erreur lors de la generation Prisma!
    pause
    exit /b 1
)

echo.
echo [3/4] Creation des tables dans Supabase...
call npx prisma db push
if %errorlevel% neq 0 (
    echo Erreur lors de la creation des tables!
    pause
    exit /b 1
)

echo.
echo [4/4] Lancement de l'application...
echo.
echo ========================================
echo   App disponible sur:
echo   http://localhost:3000
echo ========================================
echo.

call npm run dev
