'use client'
import { supabase } from '../../lib/supabase' 
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOtp({ 
        email,
        options: { emailRedirectTo: `${window.location.origin}/dashboard` }
      })
      if (error) alert(error.message)
      else alert('Check your email for the magic link!')
    } catch (err) {
      alert('Connection failed. Please check your Supabase keys in Netlify.')
    }
    setLoading(false)
  }

  return (
    <div className="relative h-screen w-full bg-black text-white flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('/bg-amv.jpg')" }} />
      <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] w-full max-w-md text-center">
        <h1 className="text-4xl font-black italic text-[#C5A059] mb-8 uppercase">Artist Portal</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" placeholder="Email" required
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-[#C5A059]"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={loading} className="w-full bg-[#C5A059] text-black font-black py-4 rounded-2xl">
            {loading ? 'SENDING...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  )
}
