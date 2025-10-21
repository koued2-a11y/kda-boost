import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KDA-Boost - Boost TikTok Moderne',
  description: 'Plateforme moderne de boost d\'abonnés TikTok avec système de coins intelligent',
  keywords: ['TikTok', 'Boost', 'Abonnés', 'Followers', 'KDA'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

