import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// This "if" check prevents the build from failing if the URL isn't perfect yet
if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
  console.warn("Supabase URL is missing or invalid during build. Check Netlify Env Vars.")
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
)
