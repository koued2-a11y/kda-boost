'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaTiktok, FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import { HiSparkles, HiGift } from 'react-icons/hi'

export default function SignUp() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    tiktokUsername: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas!')
      return
    }

    setLoading(true)
    
    // Simulation - À remplacer par l'authentification réelle
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tiktok-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tiktok-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 mb-4">
            <FaTiktok className="text-5xl text-tiktok-pink animate-pulse" />
            <span className="text-3xl font-black bg-gradient-to-r from-tiktok-pink to-tiktok-cyan bg-clip-text text-transparent">
              KDA-BOOST
            </span>
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-2">
            <HiGift className="text-yellow-400 text-xl" />
            <span className="text-yellow-400 font-semibold text-sm">30 Coins Gratuits !</span>
          </div>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <HiSparkles className="text-tiktok-cyan" />
            Rejoignez KDA-Boost maintenant
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Inscription
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nom d'utilisateur
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-gray-500" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tiktok-pink focus:border-transparent transition-all"
                  placeholder="votre_username"
                />
              </div>
            </div>

            {/* TikTok Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nom d'utilisateur TikTok
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaTiktok className="text-tiktok-pink" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.tiktokUsername}
                  onChange={(e) => setFormData({ ...formData, tiktokUsername: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tiktok-pink focus:border-transparent transition-all"
                  placeholder="@votre_compte_tiktok"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Ce compte recevra les abonnés
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email (optionnel)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-500" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tiktok-pink focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tiktok-pink focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tiktok-pink focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan text-white font-bold rounded-xl hover:shadow-lg hover:shadow-tiktok-pink/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Création du compte...
                </span>
              ) : (
                'Créer mon compte'
              )}
            </button>
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            En vous inscrivant, vous acceptez nos conditions d'utilisation
          </p>

          {/* Divider */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Déjà un compte ?{' '}
              <Link href="/auth/signin" className="text-tiktok-cyan font-semibold hover:underline">
                Se connecter
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-500 hover:text-tiktok-cyan transition-colors text-sm">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

