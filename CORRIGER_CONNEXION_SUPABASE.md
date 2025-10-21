# 🔧 Corriger la Connexion Supabase

## ❌ PROBLÈME ACTUEL

La connexion à Supabase échoue. Nous devons obtenir les **vraies URLs de connexion** depuis votre dashboard Supabase.

---

## ✅ SOLUTION EN 5 MINUTES

### Étape 1 : Accédez à Supabase

1. Allez sur https://supabase.com/dashboard
2. Connectez-vous
3. Sélectionnez votre projet

### Étape 2 : Obtenez les URLs de connexion

1. Cliquez sur **Settings** (⚙️) dans la barre latérale
2. Cliquez sur **Database**
3. Descendez jusqu'à la section **"Connection string"**

### Étape 3 : Copiez les 2 URLs

Vous devez copier **2 types de connexion** :

#### A) Connection Pooling (Transaction Mode)

1. Dans "Connection string", sélectionnez **"Transaction"** dans le dropdown
2. Cochez **"Use connection pooling"**
3. Copiez l'URL qui ressemble à :
```
postgresql://postgres.ehmdqqmkzkstoerhenqb:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
```

#### B) Direct Connection (Session Mode)

1. Dans "Connection string", sélectionnez **"Session"**
2. Décochez "Use connection pooling"
3. Copiez l'URL qui ressemble à :
```
postgresql://postgres:[PASSWORD]@db.ehmdqqmkzkstoerhenqb.supabase.co:5432/postgres
```

### Étape 4 : Mettez à jour le fichier .env

Ouvrez le fichier `.env` et remplacez :

```env
# Connection pooling (ligne 3)
DATABASE_URL="[COLLEZ ICI L'URL DE CONNECTION POOLING]"

# Direct connection (ligne 6)
DIRECT_URL="[COLLEZ ICI L'URL DE SESSION]"
```

**Important** : Les URLs contiennent déjà votre mot de passe, ne le changez pas !

---

## 📋 EXEMPLE COMPLET

Voici à quoi devrait ressembler votre `.env` :

```env
# Connection pooling
DATABASE_URL="postgresql://postgres.ehmdqqmkzkstoerhenqb:NE7+&JaLQciG.vG@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection
DIRECT_URL="postgresql://postgres:NE7+&JaLQciG.vG@db.ehmdqqmkzkstoerhenqb.supabase.co:5432/postgres"
```

---

## 🔄 APRÈS LA CORRECTION

Une fois le fichier `.env` mis à jour :

1. **Relancez** `INSTALLER_PUIS_LANCER.bat`

OU

2. Tapez dans PowerShell :
```bash
npx prisma db push
npm run dev
```

---

## 🆘 ALTERNATIVE SIMPLE

Si vous ne trouvez pas les URLs, vous pouvez aussi :

### Utiliser une autre méthode de connexion

Modifiez le fichier `prisma/schema.prisma` :

Remplacez :
```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

Par :
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DIRECT_URL")
}
```

Puis dans `.env`, gardez seulement :
```env
DIRECT_URL="postgresql://postgres:NE7+&JaLQciG.vG@db.ehmdqqmkzkstoerhenqb.supabase.co:5432/postgres"
```

Et relancez :
```bash
npx prisma db push
npm run dev
```

---

## 🎯 RÉCAPITULATIF

**Problème** : Prisma ne peut pas se connecter à Supabase

**Cause** : URLs de connexion incorrectes ou incomplètes

**Solution** : Obtenir les vraies URLs depuis le dashboard Supabase

**Action** : Mettre à jour le fichier `.env` avec les bonnes URLs

---

**Une fois corrigé, relancez `INSTALLER_PUIS_LANCER.bat` !**

