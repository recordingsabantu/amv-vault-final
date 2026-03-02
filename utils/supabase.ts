import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// This is the line that exports it so the login page can see it
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
