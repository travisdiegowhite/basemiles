// app/types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      routes: {
        Row: {
          id: string
          created_at: string
          user_id: string
          route_data: Json
          name: string | null
          description: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          route_data: Json
          name?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          route_data?: Json
          name?: string | null
          description?: string | null
        }
      }
      // Add other tables here as needed
    }
  }
}