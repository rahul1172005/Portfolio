import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

// Keep Orbitron loaded as a fallback variable only
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Rahul R',
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
      <body
        className="bg-white text-black antialiased selection:bg-[#d9ff00] selection:text-black overflow-x-hidden w-full relative"
        style={{ fontFamily: "'Adieu', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
      >
        <div className="site-bg" />
        <div className="relative w-full overflow-x-hidden max-w-[100vw]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
