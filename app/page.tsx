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
  }, [])

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#C5A059] font-black tracking-widest uppercase">AMV VAULT LOADING...</div>

  if (!session) {
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* THE HALF-SCREEN GLUE */}
        <div 
          className="fixed top-0 right-0 w-full md:w-1/2 h-full opacity-30 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg-amv.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to left, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 100%)'
          }}
        />
        <div className="relative z-10">
          <Login />
        </div>
      </div>
    )
  }

  return <ArtistProfile />
}
