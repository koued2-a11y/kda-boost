-- KDA-Boost Database Schema pour Supabase
-- Exécutez ce script dans le SQL Editor de Supabase

-- Table Users
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  username TEXT UNIQUE NOT NULL,
  tiktok_id TEXT UNIQUE NOT NULL,
  tiktok_username TEXT NOT NULL,
  avatar TEXT,
  coins INTEGER DEFAULT 30 NOT NULL,
  role TEXT DEFAULT 'USER' NOT NULL CHECK (role IN ('USER', 'ADMIN')),
  is_active BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Table Follows
CREATE TABLE IF NOT EXISTS follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  followed_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(follower_id, followed_id)
);

-- Table Transactions
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('EARN', 'SPEND', 'BONUS', 'PENALTY')),
  amount INTEGER NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Table Boost Orders
CREATE TABLE IF NOT EXISTS boost_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  target_username TEXT NOT NULL,
  followers_wanted INTEGER NOT NULL,
  coins_spent INTEGER NOT NULL,
  completed INTEGER DEFAULT 0 NOT NULL,
  status TEXT DEFAULT 'PENDING' NOT NULL CHECK (status IN ('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Indexes pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_tiktok_id ON users(tiktok_id);
CREATE INDEX IF NOT EXISTS idx_follows_follower ON follows(follower_id);
CREATE INDEX IF NOT EXISTS idx_follows_followed ON follows(followed_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_created ON transactions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_boost_orders_user ON boost_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_boost_orders_status ON boost_orders(status);

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour updated_at sur users
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Activer Row Level Security (RLS) pour plus de sécurité
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE boost_orders ENABLE ROW LEVEL SECURITY;

-- Policies RLS (À adapter selon vos besoins)
-- Pour le moment, permettre toutes les opérations (à sécuriser en production)

-- Users: lecture pour tous, écriture pour utilisateur authentifié
CREATE POLICY "Users are viewable by everyone"
  ON users FOR SELECT
  USING (true);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  USING (true);

CREATE POLICY "Users can insert"
  ON users FOR INSERT
  WITH CHECK (true);

-- Follows: tous peuvent lire et écrire (à sécuriser)
CREATE POLICY "Follows are viewable by everyone"
  ON follows FOR SELECT
  USING (true);

CREATE POLICY "Users can create follows"
  ON follows FOR INSERT
  WITH CHECK (true);

-- Transactions: tous peuvent lire et écrire (à sécuriser)
CREATE POLICY "Transactions are viewable by everyone"
  ON transactions FOR SELECT
  USING (true);

CREATE POLICY "Transactions can be inserted"
  ON transactions FOR INSERT
  WITH CHECK (true);

-- Boost Orders: tous peuvent lire et écrire (à sécuriser)
CREATE POLICY "Boost orders are viewable by everyone"
  ON boost_orders FOR SELECT
  USING (true);

CREATE POLICY "Boost orders can be inserted"
  ON boost_orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Boost orders can be updated"
  ON boost_orders FOR UPDATE
  USING (true);

-- Insérer un utilisateur admin par défaut (optionnel)
INSERT INTO users (username, tiktok_id, tiktok_username, email, coins, role)
VALUES ('admin', 'admin_tiktok_id', '@admin_kda', 'admin@kda-boost.com', 999, 'ADMIN')
ON CONFLICT (username) DO NOTHING;

-- Message de succès
DO $$
BEGIN
  RAISE NOTICE 'Database schema created successfully!';
  RAISE NOTICE 'Tables created: users, follows, transactions, boost_orders';
  RAISE NOTICE 'Indexes created for performance optimization';
  RAISE NOTICE 'RLS enabled with basic policies';
END $$;

