// app/utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '@/app/types/supabase'

export function createClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const store = await cookieStore;
          return store.get(name)?.value;
        },
        async set(name: string, value: string, options: any) {
          try {
            const store = await cookieStore;
            store.set({ name, value, ...options })
          } catch (error) {
            console.error('Error setting cookie:', error)
          }
        },
        async remove(name: string, options: any) {
                  try {
                    const store = await cookieStore;
                    store.set({ name, value: '', ...options })
                  } catch (error) {
                    console.error('Error removing cookie:', error)
                  }
                },
        },
      },
    
  )
}