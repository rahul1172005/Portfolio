import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Rahul R — Co-Founder & CTO | Zapsters',
  description: 'UI/UX Architect • Full Stack Engineer',
}

import { Navbar } from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`smooth-scroll ${orbitron.variable}`}>
      <body className="bg-white text-black antialiased selection:bg-red-500/10 overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
