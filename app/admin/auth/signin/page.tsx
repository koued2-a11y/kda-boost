'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaTiktok, FaUser, FaLock } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulation - À remplacer par l'authentification réelle
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
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
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <HiSparkles className="text-tiktok-cyan" />
            Connectez-vous pour booster votre compte
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-effect rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Connexion
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  Connexion...
                </span>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Pas encore de compte ?{' '}
              <Link href="/auth/signup" className="text-tiktok-cyan font-semibold hover:underline">
                S'inscrire
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

