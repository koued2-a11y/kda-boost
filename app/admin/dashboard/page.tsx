'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaTiktok, FaCoins, FaUsers, FaChartLine, FaHistory, 
  FaRocket, FaCrown, FaSignOutAlt, FaPlus 
} from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'

export default function Dashboard() {
  const [user] = useState({
    username: 'Demo User',
    tiktokUsername: '@demo_tiktok',
    coins: 45,
    followers: 1250,
    following: 320,
    totalFollowersGained: 150,
  })

  const [showBoostModal, setShowBoostModal] = useState(false)
  const [boostAmount, setBoostAmount] = useState(15)

  const transactions = [
    { id: 1, type: 'EARN', amount: 1, description: 'Abonnement à @user123', date: '2025-10-21' },
    { id: 2, type: 'EARN', amount: 1, description: 'Abonnement à @user456', date: '2025-10-21' },
    { id: 3, type: 'SPEND', amount: -30, description: 'Boost de 15 abonnés', date: '2025-10-20' },
    { id: 4, type: 'BONUS', amount: 30, description: 'Bonus d\'inscription', date: '2025-10-20' },
  ]

  const handleBoost = () => {
    const coinsNeeded = boostAmount * 2
    if (user.coins >= coinsNeeded) {
      alert(`Boost de ${boostAmount} abonnés commandé! (Coût: ${coinsNeeded} coins)`)
      setShowBoostModal(false)
    } else {
      alert(`Pas assez de coins! Vous avez besoin de ${coinsNeeded} coins.`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <FaTiktok className="text-3xl text-tiktok-pink" />
              <span className="text-xl font-bold bg-gradient-to-r from-tiktok-pink to-tiktok-cyan bg-clip-text text-transparent">
                KDA-BOOST
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                <FaCoins className="text-yellow-400" />
                <span className="font-bold text-yellow-400">{user.coins}</span>
              </div>
              <Link
                href="/auth/signin"
                className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaSignOutAlt />
                <span className="hidden sm:inline">Déconnexion</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-white mb-2">
              Bonjour, {user.username}! 👋
            </h1>
            <p className="text-gray-400 flex items-center gap-2">
              <FaTiktok className="text-tiktok-pink" />
              {user.tiktokUsername}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                  <FaCoins className="text-2xl text-white" />
                </div>
                <span className="text-xs text-gray-500">Solde</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{user.coins}</div>
              <div className="text-sm text-gray-400">Coins disponibles</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-tiktok-pink to-purple-500 rounded-xl">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <span className="text-xs text-gray-500">TikTok</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{user.followers}</div>
              <div className="text-sm text-gray-400">Abonnés actuels</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-tiktok-cyan to-blue-500 rounded-xl">
                  <FaChartLine className="text-2xl text-white" />
                </div>
                <span className="text-xs text-gray-500">Boost</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">+{user.totalFollowersGained}</div>
              <div className="text-sm text-gray-400">Abonnés gagnés</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <span className="text-xs text-gray-500">Activité</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{user.following}</div>
              <div className="text-sm text-gray-400">Abonnements donnés</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Boost Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Boost Card */}
              <div className="glass-effect p-8 rounded-2xl tiktok-glow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      <HiSparkles className="inline mr-2 text-yellow-400" />
                      Booster Mon Compte
                    </h2>
                    <p className="text-gray-400">
                      Utilisez vos coins pour gagner des abonnés réels
                    </p>
                  </div>
                  <FaRocket className="text-4xl text-tiktok-pink" />
                </div>

                <div className="bg-gradient-to-r from-tiktok-pink/10 to-tiktok-cyan/10 rounded-xl p-6 border border-tiktok-pink/30 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">30</div>
                      <div className="text-sm text-gray-400">Coins minimum</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">15</div>
                      <div className="text-sm text-gray-400">Abonnés reçus</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowBoostModal(true)}
                  className="w-full py-4 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan text-white font-bold rounded-xl hover:shadow-lg hover:shadow-tiktok-pink/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <HiLightningBolt className="text-2xl" />
                  Commander un Boost Maintenant
                </button>
              </div>

              {/* Transactions History */}
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaHistory className="text-tiktok-cyan" />
                    Historique des Transactions
                  </h3>
                </div>

                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          transaction.type === 'EARN' ? 'bg-green-500/20' :
                          transaction.type === 'SPEND' ? 'bg-red-500/20' :
                          'bg-yellow-500/20'
                        }`}>
                          <FaCoins className={`${
                            transaction.type === 'EARN' ? 'text-green-400' :
                            transaction.type === 'SPEND' ? 'text-red-400' :
                            'text-yellow-400'
                          }`} />
                        </div>
                        <div>
                          <div className="text-white font-medium">{transaction.description}</div>
                          <div className="text-sm text-gray-500">{transaction.date}</div>
                        </div>
                      </div>
                      <div className={`font-bold ${
                        transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-gradient-to-r from-tiktok-pink/20 to-tiktok-cyan/20 border border-tiktok-pink/30 text-white rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <FaPlus />
                    Gagner des Coins
                  </button>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    <FaChartLine />
                    Mes Statistiques
                  </button>
                </div>
              </div>

              {/* Tips */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HiSparkles className="text-yellow-400" />
                  Astuce du Jour
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Abonnez-vous à plus d'utilisateurs pour gagner plus de coins et booster votre compte plus rapidement !
                </p>
              </div>

              {/* Upgrade (if admin) */}
              <div className="glass-effect p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <FaCrown className="text-3xl text-yellow-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Admin</h3>
                    <p className="text-xs text-gray-400">Panel de gestion</p>
                  </div>
                </div>
                <Link
                  href="/admin"
                  className="block w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg text-center hover:shadow-lg transition-all"
                >
                  Accéder au Panel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Boost Modal */}
      {showBoostModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect max-w-md w-full p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Commander un Boost</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nombre d'abonnés souhaités
              </label>
              <input
                type="number"
                min="15"
                step="15"
                value={boostAmount}
                onChange={(e) => setBoostAmount(parseInt(e.target.value) || 15)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-tiktok-pink"
              />
              <p className="text-xs text-gray-500 mt-2">
                Coût: {boostAmount * 2} coins • Vous avez: {user.coins} coins
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBoostModal(false)}
                className="flex-1 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleBoost}
                className="flex-1 py-3 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

