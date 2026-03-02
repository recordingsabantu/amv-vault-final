'use client'
import { supabase } from '@/lib/supabase' // Double check your supabase client path
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert(error.message)
    else alert('Check your email for the magic link!')
    setLoading(false)
  }

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('/bg-amv.jpg')" }}>
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[40px] w-full max-w-md shadow-2xl">
        <h1 className="text-4xl font-black italic text-[#C5A059] mb-2 uppercase tracking-tighter text-center">Artist Portal</h1>
        <p className="text-gray-400 text-center mb-8 text-sm">Enter your email to access the Vault</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#C5A059] transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-[#C5A059] text-black font-black py-4 rounded-xl hover:bg-white transition-all shadow-lg shadow-[#C5A059]/20">
            {loading ? 'SENDING...' : 'SEND MAGIC LINK'}
          </button>
        </form>
      </div>
    </div>
  )
}
