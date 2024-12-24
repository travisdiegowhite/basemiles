// store/auth.ts
import { create } from 'zustand'
import { AuthUser } from '@supabase/supabase-js'

interface AuthState {
  user: AuthUser | null
  setUser: (user: AuthUser | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))