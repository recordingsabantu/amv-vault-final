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
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        }
      })

      if (error) {
        alert(`Error: ${error.message}`)
      } else {
        alert('Check your email for the magic link!')
      }
    } catch (err) {
      alert('Connection error. Please check your internet or try again.')
    }
    setLoading(false)
  }

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/bg-amv.jpg')" }}
      />

      <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[40px] w-full max-w-md shadow-2xl text-center">
          <h1 className="text-4xl font-black italic text-[#C5A059] mb-2 uppercase tracking-tighter">Artist Portal</h1>
          <p className="text-gray-400 mb-8 text-sm">Access the Vault</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C5A059] transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#C5A059] text-black font-extrabold py-4 rounded-2xl hover:bg-white transition-all shadow-xl shadow-[#C5A059]/20"
            >
              {loading ? 'SENDING...' : 'SEND MAGIC LINK'}
            </button>
          </form>

          <button onClick={() => router.push('/')} className="mt-8 text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
