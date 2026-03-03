'use client'
import { useRouter } from 'next/navigation'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <header className="mb-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-3xl flex items-center justify-center text-[#C5A059] mb-6 animate-pulse">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-4 italic text-center">
            Abantu Recordings • Global Distribution
          </h2>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white mb-6 text-center">
            THE <span className="text-[#C5A059]">VAULT</span>
          </h1>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold leading-loose text-center">
            Secure Master Ingestion & Royalty Management Portal
          </p>
        </header>

        <button 
          onClick={() => router.push('/profile')}
          className="group relative inline-flex items-center gap-4 bg-[#C5A059] text-black font-black px-12 py-6 rounded-full uppercase text-xs tracking-[0.4em] hover:bg-white transition-all shadow-2xl shadow-[#C5A059]/20"
        >
          Enter Portal
          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
        </button>
      </div>
    </div>
  )
}
