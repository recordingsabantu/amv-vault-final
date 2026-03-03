'use client'
import { useRouter } from 'next/navigation'
import { Shield, ChevronRight, Zap } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <Zap size={12} className="text-[#C5A059]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">Next Gen Distribution</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-white mb-8">
          AMV <span className="text-[#C5A059]">VAULT</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base uppercase tracking-widest font-medium leading-relaxed mb-12">
          The official master ingestion portal for <span className="text-white">Abantu Recordings</span>. Global delivery. Precision analytics.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => router.push('/profile')}
            className="group relative flex items-center gap-4 bg-[#C5A059] text-black font-black px-10 py-5 rounded-full uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-2xl shadow-[#C5A059]/20"
          >
            Enter Management
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>
          
          <div className="flex items-center gap-3 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            <Shield size={14} className="text-[#C5A059]" />
            DDEX Certified 2026
          </div>
        </div>
      </div>
    </div>
  )
}
