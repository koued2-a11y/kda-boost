@echo off
echo ========================================
echo   Test de connexion Supabase
echo ========================================
echo.
echo Test en cours...
echo.

npx prisma db pull

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   ✅ CONNEXION REUSSIE !
    echo ========================================
    echo.
    echo Votre base de données Supabase est accessible !
    echo Vous pouvez maintenant créer les tables.
    echo.
    echo Tapez : npx prisma db push
    echo.
) else (
    echo.
    echo ========================================
    echo   ❌ ERREUR DE CONNEXION
    echo ========================================
    echo.
    echo Vérifiez :
    echo 1. Votre connexion internet
    echo 2. Le fichier .env (mot de passe)
    echo 3. Que votre projet Supabase est actif
    echo.
    echo Consultez : CORRIGER_CONNEXION_SUPABASE.md
    echo.
)

pause

