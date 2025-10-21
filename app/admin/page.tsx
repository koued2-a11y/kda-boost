'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaTiktok, FaUsers, FaCoins, FaChartBar, FaCrown,
  FaUserShield, FaBan, FaCheckCircle, FaTrash, FaEdit
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function AdminPanel() {
  const [stats] = useState({
    totalUsers: 10234,
    activeUsers: 8543,
    totalCoins: 456789,
    totalTransactions: 52341,
    totalBoosts: 3421,
    revenueToday: 1250,
  })

  const [users, setUsers] = useState([
    { id: '1', username: 'user123', tiktokUsername: '@tiktok123', coins: 45, role: 'USER', isActive: true },
    { id: '2', username: 'user456', tiktokUsername: '@tiktok456', coins: 120, role: 'USER', isActive: true },
    { id: '3', username: 'user789', tiktokUsername: '@tiktok789', coins: 30, role: 'USER', isActive: false },
    { id: '4', username: 'admin', tiktokUsername: '@admin_kda', coins: 999, role: 'ADMIN', isActive: true },
  ])

  const recentActivity = [
    { id: 1, user: 'user123', action: 'Boost commandé', details: '15 abonnés', time: 'Il y a 5 min' },
    { id: 2, user: 'user456', action: 'Nouvel utilisateur', details: 'Inscription', time: 'Il y a 10 min' },
    { id: 3, user: 'user789', action: 'Transaction', details: '+15 coins', time: 'Il y a 15 min' },
  ]

  const toggleUserStatus = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isActive: !user.isActive } : user
    ))
  }

  const deleteUser = (userId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <FaTiktok className="text-3xl text-tiktok-pink" />
                <span className="text-xl font-bold bg-gradient-to-r from-tiktok-pink to-tiktok-cyan bg-clip-text text-transparent">
                  KDA-BOOST
                </span>
              </Link>
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                <FaCrown className="text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">ADMIN</span>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ← Retour au Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
              <FaUserShield className="text-tiktok-pink" />
              Panel Administrateur
            </h1>
            <p className="text-gray-400">
              Gestion complète de la plateforme KDA-Boost
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <HiSparkles className="text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Utilisateurs totaux</div>
              <div className="mt-2 text-xs text-green-400">
                {stats.activeUsers.toLocaleString()} actifs
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                  <FaCoins className="text-2xl text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.totalCoins.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Coins en circulation</div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan rounded-xl">
                  <FaChartBar className="text-2xl text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.totalBoosts.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Boosts effectués</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Users Management */}
            <div className="lg:col-span-2">
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FaUsers className="text-tiktok-pink" />
                    Gestion des Utilisateurs
                  </h2>
                  <button className="px-4 py-2 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan text-white rounded-lg text-sm hover:shadow-lg transition-all">
                    + Ajouter
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Utilisateur</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">TikTok</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Coins</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Rôle</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Status</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-medium text-white">{user.username}</div>
                          </td>
                          <td className="py-4 px-4 text-gray-400 text-sm">{user.tiktokUsername}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 text-yellow-400">
                              <FaCoins className="text-xs" />
                              {user.coins}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                              user.role === 'ADMIN' 
                                ? 'bg-yellow-500/20 text-yellow-400' 
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                              user.isActive 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-red-500/20 text-red-400'
                            }`}>
                              {user.isActive ? <FaCheckCircle /> : <FaBan />}
                              {user.isActive ? 'Actif' : 'Inactif'}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button 
                                onClick={() => toggleUserStatus(user.id)}
                                className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                                title={user.isActive ? 'Désactiver' : 'Activer'}
                              >
                                {user.isActive ? <FaBan /> : <FaCheckCircle />}
                              </button>
                              <button 
                                className="p-2 bg-tiktok-cyan/20 text-tiktok-cyan rounded-lg hover:bg-tiktok-cyan/30 transition-colors"
                                title="Modifier"
                              >
                                <FaEdit />
                              </button>
                              <button 
                                onClick={() => deleteUser(user.id)}
                                className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                                title="Supprimer"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Activité Récente</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-sm font-medium text-white">{activity.user}</div>
                      <div className="text-xs text-gray-400 mt-1">{activity.action}</div>
                      <div className="text-xs text-tiktok-cyan mt-1">{activity.details}</div>
                      <div className="text-xs text-gray-600 mt-1">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-effect p-6 rounded-2xl bg-gradient-to-br from-tiktok-pink/10 to-tiktok-cyan/10 border border-tiktok-pink/30">
                <h3 className="text-xl font-bold text-white mb-4">Stats Rapides</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Transactions</span>
                    <span className="text-white font-semibold">{stats.totalTransactions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Revenus Aujourd'hui</span>
                    <span className="text-green-400 font-semibold">${stats.revenueToday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Taux d'Activité</span>
                    <span className="text-tiktok-cyan font-semibold">83.5%</span>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Actions Admin</h3>
                <div className="space-y-2">
                  <button className="w-full py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm">
                    Envoyer une Notification
                  </button>
                  <button className="w-full py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm">
                    Créditer des Coins
                  </button>
                  <button className="w-full py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm">
                    Mode Maintenance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

