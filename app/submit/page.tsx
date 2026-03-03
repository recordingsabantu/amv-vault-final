'use client'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Music, Image as ImageIcon, Globe, User, Hash, Disc, ArrowUpRight } from 'lucide-react'

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
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-8 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* HEADER SECTION */}
          <div className="mb-16">
            <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-4 italic">Metadata Ingestion</h2>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              Push <span className="text-[#C5A059]">Asset</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* MAIN FORM AREA */}
            <div className="lg:col-span-8 space-y-12">
              <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] backdrop-blur-3xl shadow-2xl">
                <div className="flex items-center gap-4 mb-10 opacity-50">
                   <Disc size={20} className="text-[#C5A059]" />
                   <h3 className="text-[11px] font-black uppercase tracking-[0.3em]">Track Specifications</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 text-left">
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] italic ml-1">Asset ID / ISRC</label>
                      <div className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#C5A059] font-mono font-bold tracking-tighter text-lg">
                         {isrc || "PENDING..."}
                      </div>
                   </div>
                   <RockInput label="Release Title" icon={Music} placeholder="e.g. Midnight Summer" />
                   <RockInput label="Primary Artist" icon={User} placeholder="Artist Name" />
                   <RockInput label="Genre / Mood" icon={Globe} placeholder="Amapiano" />
                </div>
              </section>

              <div className="flex items-center gap-6 p-8 bg-[#C5A059]/5 border border-[#C5A059]/10 rounded-[30px]">
                 <input type="checkbox" className="w-6 h-6 rounded-lg accent-[#C5A059] bg-transparent border-white/20" required />
                 <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.15em] leading-relaxed">
                    I confirm that the audio content and metadata provided are the intellectual property of <span className="text-white">Abantu Recordings</span> and compliant with DDEX standards.
                 </p>
              </div>
            </div>

            {/* UPLOAD SIDEBAR */}
            <div className="lg:col-span-4 space-y-6">
              <PremiumUpload icon={ImageIcon} label="Cover Artwork" sub="3000 x 3000px JPG/PNG" />
              <PremiumUpload icon={Music} label="Master Track" sub="High-Res 24-bit WAV" />
              
              <button className="w-full bg-white text-black font-black py-8 rounded-[40px] uppercase text-[11px] tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group">
                Initialize Push
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// ROCKWAY STYLE INPUT
function RockInput({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-3 text-left">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic ml-1">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#C5A059] transition-colors" size={16} />
        <input {...props} className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-2xl outline-none focus:border-[#C5A059]/50 focus:bg-white/[0.08] transition-all text-sm text-white font-medium" />
      </div>
    </div>
  )
}

// PREMIUM UPLOAD BOX
function PremiumUpload({ icon: Icon, label, sub }: any) {
  return (
    <label className="h-56 border border-white/10 bg-white/[0.02] rounded-[40px] flex flex-col items-center justify-center group cursor-pointer hover:border-[#C5A059]/30 hover:bg-white/[0.04] transition-all duration-500">
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
        <Icon className="text-[#C5A059]" size={28} />
      </div>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{label}</span>
      <span className="text-[9px] text-gray-600 mt-2 uppercase font-bold">{sub}</span>
      <input type="file" className="hidden" />
    </label>
  )
}
