// app/components/navigation/Header.tsx
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export default function Header() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            BaseMiles
          </Link>
          
          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="text-gray-600 hover:text-gray-900"
                >
                  My Routes
                </Link>
                <button
                  onClick={async () => {
                    const { error } = await supabase.auth.signOut()
                    if (error) console.error('Error signing out:', error)
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}