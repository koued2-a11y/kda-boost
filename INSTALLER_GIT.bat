@echo off
cls
echo ╔════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                            ║
echo ║                  📦 INSTALLER GIT SUR WINDOWS 📦                         ║
echo ║                                                                            ║
echo ╚════════════════════════════════════════════════════════════════════════════╝
echo.
echo Git n'est pas installe sur votre PC.
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                        📋 2 MÉTHODES D'INSTALLATION
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   MÉTHODE 1 : Installation automatique (Winget)
echo   MÉTHODE 2 : Installation manuelle (Téléchargement)
echo.
pause
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   Tentative d'installation automatique avec Winget...
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

winget install --id Git.Git -e --source winget

if %errorlevel% equ 0 (
    echo.
    echo ╔════════════════════════════════════════════════════════════════════════════╗
    echo ║                                                                            ║
    echo ║                  ✅ GIT INSTALLÉ AVEC SUCCÈS ! ✅                        ║
    echo ║                                                                            ║
    echo ╚════════════════════════════════════════════════════════════════════════════╝
    echo.
    echo ⚠️  IMPORTANT : Fermez et réouvrez PowerShell pour que Git fonctionne !
    echo.
    echo Ensuite, vous pourrez utiliser les commandes git.
    echo.
) else (
    echo.
    echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    echo   ⚠️  L'installation automatique a échoué.
    echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    echo.
    echo   Votre navigateur va s'ouvrir pour télécharger Git manuellement.
    echo.
    echo   📥 ÉTAPES :
    echo.
    echo   1. Téléchargez Git pour Windows
    echo   2. Exécutez l'installateur
    echo   3. Suivez l'assistant (acceptez les options par défaut)
    echo   4. Fermez et réouvrez PowerShell
    echo   5. Tapez : git --version (pour vérifier)
    echo.
    pause
    echo.
    echo Ouverture du site de téléchargement...
    start https://git-scm.com/download/win
    echo.
)

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo                       📚 DOCUMENTATION CRÉÉE
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   📄 DEPLOIEMENT_SANS_GIT.txt   → Déployer SANS installer Git !
echo   📄 GUIDE_GIT_WINDOWS.txt      → Guide complet Git
echo.
echo Si vous ne voulez pas installer Git, utilisez la méthode sans Git !
echo.
pause

