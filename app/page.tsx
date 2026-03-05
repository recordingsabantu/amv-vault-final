'use client'
import { useState, useEffect } from 'react'
// Note: Ensure your Sidebar file is in /components/Sidebar.tsx
import Sidebar from '../components/Sidebar' 
import { createClient } from '@supabase/supabase-js'
import { Music, ImageIcon, Globe, User, Hash, Disc, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function DistributeMusic() {
  const [isrc, setIsrc] = useState("")

  useEffect(() => {
    const fetchIsrc = async () => {
      const { count } = await supabase.from('releases').select('*', { count: 'exact', head: true })
      setIsrc(`ZA-AMV-26-${((count || 0) + 1).toString().padStart(5, '0')}`)
    }
    fetchIsrc()
  }, [])

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content Area with Full Background Coverage */}
      <main className="flex-1 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1A1A1A] via-[#0A0A0A] to-[#000000]">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1400px] mx-auto p-8 md:p-16 lg:p-20">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left">
              <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.7em] mb-4 italic opacity-80">Ingestion Module // 2.0</h2>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.85]">
                Push <span className="text-[#C5A059] drop-shadow-[0_0_30px_rgba(197,160,89,0.2)]">Release</span>
              </h1>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">System: Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LEFT: DATA INPUT */}
            <div className="lg:col-span-8 space-y-10">
              <section className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[50px] shadow-2xl relative overflow-hidden group">
                {/* Subtle Card Glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C5A059]/10 blur-3xl group-hover:bg-[#C5A059]/20 transition-all duration-700" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left relative z-10">
                   <div className="md:col-span-2 space-y-4">
                      <label className="text-[9px] font-black uppercase tracking-[0.5em] text-[#C5A059]/60 italic ml-1">Assigned Asset ISRC</label>
                      <div className="w-full bg-black/40 border border-[#C5A059]/30 p-8 rounded-3xl text-[#C5A059] font-mono text-3xl md:text-4xl font-bold tracking-tighter text-center shadow-inner">
                         {isrc || "ZA-AMV-26-XXXXX"}
                      </div>
                   </div>
                   
                   <RockInput label="Track Title" icon={Disc} placeholder="Master Name" />
                   <RockInput label="Artist Name" icon={User} placeholder="Primary Talent" />
                   <RockInput label="Primary Genre" icon={Globe} placeholder="Sonic Style" />
                   <RockInput label="Audio Language" icon={Hash} placeholder="e.g. IsiZulu" />
                </div>
              </section>

              {/* Legal Declaration */}
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[30px] flex items-start gap-6 backdrop-blur-sm">
                 <input type="checkbox" className="w-6 h-6 mt-1 rounded-lg accent-[#C5A059] bg-black border-white/10" required />
                 <p className="text-[10px] uppercase font-medium text-gray-500 tracking-[0.15em] leading-loose text-left">
                    I confirm this asset is cleared for distribution via the <span className="text-white">AMV Vault Infrastructure</span>. All metadata provided is DDEX compliant and represents the final master recording.
                 </p>
              </div>
            </div>

            {/* RIGHT: ASSETS & EXECUTION */}
            <div className="lg:col-span-4 space-y-6">
              <AssetBox icon={ImageIcon} label="Cover Art" sub="3000px SQ // RGB" />
              <AssetBox icon={Music} label="Master Wav" sub="24-Bit // 44.1kHz" />
              
              <button className="w-full bg-white text-black font-black py-8 rounded-[40px] uppercase text-[12px] tracking-[0.6em] hover:bg-[#C5A059] hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center gap-4 group mt-4">
                Execute Push
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" size={18} />
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

function RockInput({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-3 text-left">
      <label className="text-[9px] font-black uppercase tracking-widest text-gray-600 italic ml-2">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700 group-focus-within:text-[#C5A059] transition-colors" size={16} />
        <input {...props} className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-2xl outline-none focus:border-[#C5A059]/50 focus:bg-white/[0.08] transition-all text-sm text-white font-bold placeholder:text-gray-800" />
      </div>
    </div>
  )
}

function AssetBox({ icon: Icon, label, sub }: any) {
  return (
    <label className="h-52 border border-white/10 bg-white/[0.02] rounded-[40px] flex flex-col items-center justify-center group cursor-pointer hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-white/5">
        <Icon className="text-[#C5A059]" size={28} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">{label}</span>
      <span className="text-[8px] text-gray-600 mt-2 uppercase font-black tracking-widest">{sub}</span>
      <input type="file" className="hidden" />
    </label>
  )
}
