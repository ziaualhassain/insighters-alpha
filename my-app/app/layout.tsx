import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import { Providers } from '../components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Insighters',
  description: 'Connect, share, and discover insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="min-h-screen bg-gray-100 pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

