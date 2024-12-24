// app/pages/auth/page.tsx
import { useState } from 'react'
import AuthForm from '../components/auth/AuthForm'
import ResetPassword from '../components/auth/ResetPassword'

export default function AuthPage() {
  const [showResetPassword, setShowResetPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Welcome to BaseMiles
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {showResetPassword ? (
          <>
            <ResetPassword />
            <button
              onClick={() => setShowResetPassword(false)}
              className="mt-4 text-sm text-blue-600 hover:text-blue-500 block mx-auto"
            >
              Back to Sign In
            </button>
          </>
        ) : (
          <>
            <AuthForm />
            <button
              onClick={() => setShowResetPassword(true)}
              className="mt-4 text-sm text-blue-600 hover:text-blue-500 block mx-auto"
            >
              Forgot Password?
            </button>
          </>
        )}
      </div>
    </div>
  )
}