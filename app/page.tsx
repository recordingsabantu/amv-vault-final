'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Login from './login/page'
import ArtistProfile from './profile/page'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#C5A059] font-black italic tracking-widest uppercase">Initializing Vault...</div>

  // If NOT logged in, show the Login (Mails) page first
  if (!session) {
    return <Login />
  }

  // If logged in, show the Dashboard
  return <ArtistProfile />
}
