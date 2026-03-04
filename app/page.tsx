'use client'
import { useRouter } from 'next/navigation'
import { Shield, ChevronRight, Zap, Globe, Users, Activity } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex flex-col justify-between py-12 px-6 md:px-20">
      {/* TOP NAV LOGO */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C5A059] rounded-lg flex items-center justify-center font-black italic text-black">A</div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Vault v2.0</span>
        </div>
        <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-widest text-gray-500">
          <span>DDEX Standard</span>
          <span>ISRC Registry</span>
          <span>Abantu Rights</span>
        </div>
      </div>

      {/* MAIN HERO SECTION */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20">
            <Zap size={10} className="text-[#C5A059]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Digital Asset Management</span>
          </div>

          <h1 className="text-[14vw] md:text-[160px] font-[1000] italic uppercase tracking-[-0.05em] leading-[0.8] text-white">
            AMV <span className="text-[#C5A059]">VAULT</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-10 pt-6">
            <button 
              onClick={() => router.push('/profile')}
              className="group relative flex items-center gap-8 bg-white text-black font-black px-12 py-8 rounded-full uppercase text-[12px] tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Enter Portal
              <ChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            
            <p className="max-w-xs text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-loose">
              Proprietary master ingestion for <span className="text-white">Abantu Recordings</span>. Global DSP delivery and legal ISRC verification.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER STATS */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
        <StatItem icon={Globe} label="Global Distribution" value="Active" />
        <StatItem icon={Users} label="Catalog Strength" value="Elite" />
        <StatItem icon={Activity} label="Server Status" value="Online" />
        <StatItem icon={Shield} label="Encryption" value="AES-256" />
      </div>
    </div>
  )
}

function StatItem({ icon: Icon, label, value }: any) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-[#C5A059]">
        <Icon size={12} />
        <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-60 text-white">{label}</span>
      </div>
      <span className="text-xl font-black italic uppercase text-white">{value}</span>
    </div>
  )
}
