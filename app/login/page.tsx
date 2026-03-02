'use client'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { Mail, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Check your email for the magic link!')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0F0908] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#1E1412] border border-[#C5A059]/30 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#C5A059]">Artist Portal</h1>
          <p className="text-gray-400 mt-2">Enter your email to access the Vault</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="email"
                required
                className="w-full bg-black border border-gray-700 rounded-lg py-3 px-10 text-white focus:border-[#C5A059] outline-none transition"
                placeholder="artist@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C5A059] text-black font-bold py-3 rounded-lg hover:bg-white transition flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Magic Link'}
          </button>
        </form>

        {message && (
          <p className={`mt-6 text-center text-sm ${message.includes('Error') ? 'text-red-400' : 'text-[#C5A059]'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
