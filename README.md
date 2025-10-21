# 🚀 KDA-BOOST - Plateforme de Boost TikTok

> ⚠️ **AVERTISSEMENT LÉGAL**: Ce projet est à but **ÉDUCATIF UNIQUEMENT**. L'utilisation de systèmes d'échange d'abonnés viole les conditions d'utilisation de TikTok et peut entraîner la suspension des comptes.

## 📋 Description

KDA-Boost est une plateforme moderne de boost d'abonnés TikTok construite avec Next.js 14, TypeScript, Prisma et PostgreSQL.

## ✨ Fonctionnalités

### Pour les Utilisateurs
- 🔐 **Authentification TikTok OAuth**
- 💰 **Système de Coins (Pièces)**
  - Démarrage avec 30 coins gratuits
  - Gagner 1 coin par abonnement donné
  - Dépenser des coins pour recevoir des abonnés
- 📊 **Dashboard Personnel**
  - Statistiques en temps réel
  - Historique des transactions
  - Gestion des abonnements
- 🎯 **Commandes de Boost**
  - 30 coins minimum = 15 abonnés
  - Système automatique d'échange

### Pour les Admins
- 👑 **Panel Admin Complet**
  - Gestion des utilisateurs
  - Surveillance des transactions
  - Statistiques globales
  - Gestion des commandes
  - Système de sanctions

## 🛠️ Technologies Utilisées

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL avec Prisma ORM
- **Auth**: NextAuth.js
- **Charts**: Recharts
- **Icons**: React Icons

## 📦 Installation

### Prérequis
- Node.js 18+ et npm
- PostgreSQL
- Compte développeur TikTok (pour OAuth - si disponible)

### Étapes

1. **Cloner le projet**
```bash
git clone <repo>
cd kda-boost-app
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'environnement**
```bash
cp .env.example .env
```

Éditez `.env` avec vos vraies valeurs :
- DATABASE_URL
- NEXTAUTH_SECRET (générer avec `openssl rand -base64 32`)
- Clés TikTok OAuth

4. **Initialiser la base de données**
```bash
npx prisma generate
npx prisma db push
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

6. **Accéder à l'application**
```
http://localhost:3000
```

## 🎨 Design

L'application utilise un design moderne avec :
- Dark mode élégant
- Couleurs inspirées de TikTok (Rose #FE2C55, Cyan #25F4EE)
- Animations fluides avec Framer Motion
- Interface responsive mobile-first
- Composants réutilisables

## 📁 Structure du Projet

```
kda-boost-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── dashboard/         # Dashboard utilisateur
│   ├── admin/             # Panel admin
│   └── api/               # API Routes
│       ├── auth/          # Authentification
│       ├── users/         # Gestion utilisateurs
│       ├── coins/         # Système de coins
│       └── boost/         # Commandes de boost
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI (Button, Card, etc.)
│   ├── dashboard/        # Composants du dashboard
│   └── admin/            # Composants admin
├── lib/                  # Utilitaires et config
│   ├── prisma.ts        # Client Prisma
│   ├── auth.ts          # Config NextAuth
│   └── utils.ts         # Fonctions utilitaires
├── prisma/              # Schéma de base de données
│   └── schema.prisma
└── public/              # Assets statiques
```

## 🔑 Fonctionnement du Système

### Système de Coins

1. **Nouveau compte**: 30 coins gratuits
2. **Gagner des coins**: 
   - S'abonner à un autre utilisateur = +1 coin
3. **Dépenser des coins**:
   - Commander des abonnés (minimum 30 coins = 15 abonnés)

### Système d'Abonnement Automatique

1. Utilisateur A commande 15 abonnés (dépense 30 coins)
2. Le système sélectionne 15 utilisateurs actifs
3. Ces utilisateurs s'abonnent automatiquement au compte TikTok de A
4. Chaque utilisateur gagne 1 coin
5. A reçoit ses 15 nouveaux abonnés

### Rôles

- **USER**: Utilisateur standard
- **ADMIN**: Accès complet au panel admin

## 🚦 API Endpoints

### Authentification
- `POST /api/auth/signin` - Connexion
- `POST /api/auth/signup` - Inscription
- `POST /api/auth/signout` - Déconnexion

### Utilisateurs
- `GET /api/users/me` - Profil utilisateur
- `PUT /api/users/me` - Mettre à jour le profil
- `GET /api/users/stats` - Statistiques

### Coins
- `GET /api/coins/balance` - Solde actuel
- `POST /api/coins/earn` - Gagner des coins
- `GET /api/coins/transactions` - Historique

### Boost
- `POST /api/boost/order` - Créer une commande
- `GET /api/boost/orders` - Mes commandes
- `GET /api/boost/pending` - Commandes en attente

### Admin (Protégé)
- `GET /api/admin/users` - Liste utilisateurs
- `GET /api/admin/stats` - Statistiques globales
- `PUT /api/admin/users/:id` - Modifier utilisateur
- `DELETE /api/admin/users/:id` - Supprimer utilisateur

## 🔒 Sécurité

- Authentification sécurisée avec NextAuth.js
- Protection CSRF
- Validation des données côté serveur
- Hashage des mots de passe avec bcrypt
- Tokens JWT sécurisés
- Rate limiting sur les API
- Protection des routes admin

## 🎯 TODO / Améliorations Futures

- [ ] Intégration réelle API TikTok
- [ ] Système de vérification des abonnements
- [ ] Webhooks pour les notifications
- [ ] Mode clair/sombre toggle
- [ ] Système de parrainage
- [ ] Marketplace de coins
- [ ] Application mobile (React Native)
- [ ] Support multilingue

## ⚠️ Avertissement Important

**Ce projet est à but éducatif uniquement.**

L'utilisation de ce type de service :
- Viole les conditions d'utilisation de TikTok
- Peut entraîner la suspension permanente des comptes
- N'est pas recommandée pour une utilisation en production
- Peut avoir des conséquences légales dans certaines juridictions

## 📄 Licence

Ce projet est fourni "tel quel" à des fins éducatives uniquement.

## 👨‍💻 Développement

```bash
# Mode développement
npm run dev

# Build production
npm run build

# Démarrer production
npm start

# Générer le client Prisma
npm run prisma:generate

# Synchroniser la DB
npm run prisma:push

# Lint
npm run lint
```

## 🤝 Contribution

Les contributions sont les bienvenues pour améliorer ce projet éducatif !

---

**Made with ❤️ for educational purposes**

