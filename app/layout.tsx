// app/layout.tsx
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Header from './components/navigation/Header'
import { AuthProvider } from './components/auth/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}