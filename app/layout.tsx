import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TracKing — Gestión de mensajería en tiempo real',
  description:
    'Plataforma SaaS multi-tenant para gestionar flotas de mensajeros. Tracking GPS, liquidaciones automáticas y reportes financieros.',
  openGraph: {
    title: 'TracKing — Gestión de mensajería en tiempo real',
    description:
      'Plataforma SaaS multi-tenant para gestionar flotas de mensajeros. Tracking GPS, liquidaciones automáticas y reportes financieros.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
