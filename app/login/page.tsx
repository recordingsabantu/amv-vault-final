'use client'
import { supabase } from '../../lib/supabase' 
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') // Added password for instant entry
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // FIX: Using signInWithPassword for instant access without waiting for email
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      // If user doesn't exist, we try to sign them up instantly
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })
      if (signUpError) alert(signUpError.message)
      else router.push('/dashboard')
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center p-4">
      {/* BACKGROUND FIX */}
      <div 
        className="fixed inset-0 z-0 opacity-60"
        style={{ backgroundImage: "url('/bg-amv.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative z-10 bg-black/80 backdrop-blur-2xl border border-white/10 p-12 rounded-[40px] w-full max-w-md shadow-2xl text-center">
        <h1 className="text-4xl font-black italic text-[#C5A059] mb-2 uppercase tracking-tighter text-white">AMV VAULT</h1>
        <p className="text-gray-500 text-[10px] mb-8 uppercase tracking-[0.3em]">Executive Artist Portal</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" placeholder="Artist Email" required
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C5A059]"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Create Vault Password" required
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C5A059]"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" disabled={loading}
            className="w-full bg-[#C5A059] text-black font-black py-4 rounded-2xl hover:bg-white transition-all shadow-lg"
          >
            {loading ? 'VERIFYING...' : 'ENTER THE VAULT'}
          </button>
        </form>
      </div>
    </div>
  )
}
