@echo off
cls
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║        KDA-BOOST - Installation avec Supabase SDK         ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Version simplifiee utilisant @supabase/supabase-js
echo.
pause
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 1/3] Installation des dependances...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERREUR lors de l'installation!
    echo.
    pause
    exit /b 1
)
echo ✅ Dependances installees!
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 2/3] Creation des tables dans Supabase...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo IMPORTANT : Vous devez executer le script SQL dans Supabase !
echo.
echo 1. Allez sur https://supabase.com/dashboard
echo 2. Selectionnez votre projet
echo 3. Cliquez sur SQL Editor (icone base de donnees)
echo 4. Ouvrez le fichier : supabase-schema.sql
echo 5. Copiez tout le contenu
echo 6. Collez dans le SQL Editor de Supabase
echo 7. Cliquez sur RUN ou Execute
echo.
echo Une fois fait, appuyez sur une touche pour continuer...
pause >nul
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo [ETAPE 3/3] Lancement de l'application...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║                                                            ║
echo ║              ✅ PRET A LANCER ! ✅                        ║
echo ║                                                            ║
echo ║    Votre application sera disponible sur :                ║
echo ║                                                            ║
echo ║           👉 http://localhost:3000 👈                     ║
echo ║                                                            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Appuyez sur une touche pour lancer...
pause >nul
echo.

call npm run dev

