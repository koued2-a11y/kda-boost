@echo off
cls
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║              KDA-BOOST - Installation Complete            ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Ce script va:
echo   1. Installer toutes les dependances
echo   2. Configurer la base de donnees
echo   3. Lancer l'application
echo.
echo Cela peut prendre 2-3 minutes...
echo.
pause
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 1/4] Installation des dependances npm...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERREUR lors de l'installation des dependances!
    echo.
    pause
    exit /b 1
)
echo ✅ Dependances installees avec succes!
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 2/4] Generation du client Prisma...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
call npx prisma generate
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERREUR lors de la generation Prisma!
    echo.
    pause
    exit /b 1
)
echo ✅ Client Prisma genere avec succes!
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 3/4] Creation des tables dans Supabase...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
call npx prisma db push
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERREUR lors de la creation des tables!
    echo Verifiez votre connexion Supabase dans le fichier .env
    echo.
    pause
    exit /b 1
)
echo ✅ Tables creees avec succes dans Supabase!
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 4/4] Lancement de l'application...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║              ✅ INSTALLATION REUSSIE ! ✅                 ║
echo ║                                                            ║
echo ║           Votre application est maintenant              ║
echo ║              disponible sur:                            ║
echo ║                                                            ║
echo ║           👉 http://localhost:3000 👈                     ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Appuyez sur une touche pour lancer l'app...
pause >nul
echo.

call npm run dev

