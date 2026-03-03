'use client'
import { useRouter } from 'next/navigation'
import { Shield, ChevronRight, Zap, Globe, Users, BarChart3 } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-20 px-6">
      <div /> {/* Spacer for centering */}

      <div className="relative z-10 max-w-5xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 mb-10">
          <Zap size={12} className="text-[#C5A059]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A059]">Direct-to-DSP Ingestion</span>
        </div>

        <h1 className="text-[12vw] md:text-[150px] font-black italic uppercase tracking-tighter leading-[0.8] text-white mb-10">
          ABANTU <span className="text-[#C5A059]">VAULT</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <button 
            onClick={() => router.push('/profile')}
            className="group relative flex items-center gap-6 bg-white text-black font-black px-12 py-7 rounded-full uppercase text-[12px] tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-700 shadow-2xl"
          >
            Access Portal
            <ChevronRight className="group-hover:translate-x-2 transition-transform" size={18} />
          </button>
          
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest">
              <Shield size={16} className="text-[#C5A059]" />
              DDEX Certified
            </div>
            <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Global Rights Management</span>
          </div>
        </div>
      </div>

      {/* THE PROFESSIONAL STATS ROW */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
        <StatBox icon={Globe} label="Territories" value="240+" />
        <StatBox icon={Users} label="Artist Network" value="Abantu Family" />
        <StatBox icon={BarChart3} label="Data Feed" value="Live Ingestion" />
      </div>
    </div>
  )
}

function StatBox({ icon: Icon, label, value }: any) {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <div className="flex items-center gap-3 text-gray-500 mb-1">
        <Icon size={14} />
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">{label}</span>
      </div>
      <span className="text-2xl font-black italic uppercase text-white tracking-tighter">{value}</span>
    </div>
  )
}
