// app/page.tsx
import { useSession } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export default function Home() {
  const session = useSession()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plan Your Perfect Route
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Create custom routes with AI-powered suggestions for cycling and walking
        </p>
        
        {session ? (
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Start Planning
          </Link>
        ) : (
          <Link
            href="/auth"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign In to Get Started
          </Link>
        )}
      </div>
    </div>
  )
}