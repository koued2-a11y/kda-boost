@echo off
cls
echo ╔════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                            ║
echo ║           🚀 DÉPLOYER KDA-BOOST SUR VERCEL (GRATUIT) 🚀                   ║
echo ║                                                                            ║
echo ╚════════════════════════════════════════════════════════════════════════════╝
echo.
echo Ce script va vous aider a deployer votre site gratuitement sur Vercel !
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                          📋 PRÉREQUIS
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Assurez-vous d'avoir :
echo   ✅ Un compte GitHub (gratuit)
echo   ✅ Git installe sur votre PC
echo   ✅ Un compte Vercel (gratuit) - https://vercel.com
echo.
pause
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                    [ETAPE 1/4] Installer Vercel CLI
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Installation de l'outil de deploiement Vercel...
echo.
call npm install -g vercel
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erreur lors de l'installation de Vercel CLI
    echo.
    pause
    exit /b 1
)
echo.
echo ✅ Vercel CLI installe !
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                    [ETAPE 2/4] Connexion a Vercel
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Votre navigateur va s'ouvrir pour vous connecter a Vercel.
echo Connectez-vous avec GitHub (recommande) ou Email.
echo.
pause
echo.
call vercel login
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erreur lors de la connexion
    echo.
    pause
    exit /b 1
)
echo.
echo ✅ Connecte a Vercel !
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                    [ETAPE 3/4] Deploiement
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Deploiement de votre application sur Vercel...
echo.
echo REPONDEZ AUX QUESTIONS :
echo   → Set up and deploy? [Y/n] : Y
echo   → Which scope? : Selectionnez votre compte
echo   → Link to existing project? [y/N] : N
echo   → What's your project's name? : kda-boost
echo   → In which directory? : ./
echo   → Want to override settings? [y/N] : N
echo.
pause
echo.
call vercel
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erreur lors du deploiement
    echo.
    pause
    exit /b 1
)
echo.
echo ✅ Application deployee en mode preview !
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                  [ETAPE 4/4] Configuration finale
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ⚠️  IMPORTANT : Vous devez configurer les variables d'environnement !
echo.
echo 1. Allez sur https://vercel.com/dashboard
echo 2. Cliquez sur votre projet "kda-boost"
echo 3. Allez dans Settings ^> Environment Variables
echo 4. Ajoutez ces variables :
echo.
echo    NEXT_PUBLIC_SUPABASE_URL
echo    = https://ehmdqqmkzkstoerhenqb.supabase.co
echo.
echo    NEXT_PUBLIC_SUPABASE_ANON_KEY
echo    = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVobWRxcW1remtzdG9lcmhlbnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNzQ3NjgsImV4cCI6MjA3NjY1MDc2OH0.ZV2z6UItLanuFWhCibIVIFvPdbRYkk_lk4_AD7psKMk
echo.
echo    NEXTAUTH_URL
echo    = https://VOTRE-PROJET.vercel.app
echo.
echo    NEXTAUTH_SECRET
echo    = kda-boost-secret-key-change-this-in-production-2024
echo.
echo 5. Sauvegardez et redeployez
echo.
pause
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                    Deploiement en production
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Deploiement final en production...
echo.
call vercel --prod
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erreur lors du deploiement production
    echo.
    pause
    exit /b 1
)
echo.
echo ╔════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                            ║
echo ║                    ✅ DEPLOIEMENT RÉUSSI ! ✅                            ║
echo ║                                                                            ║
echo ║    Votre site KDA-Boost est maintenant EN LIGNE sur Internet !           ║
echo ║                                                                            ║
echo ║              👉 Verifiez l'URL affichee ci-dessus 👈                     ║
echo ║                                                                            ║
echo ║              Exemple : https://kda-boost.vercel.app                       ║
echo ║                                                                            ║
echo ╚════════════════════════════════════════════════════════════════════════════╝
echo.
echo 🎊 FÉLICITATIONS ! Votre site est accessible partout dans le monde ! 🎊
echo.
pause

