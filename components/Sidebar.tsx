'use client'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
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
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 p-8 md:p-20 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-[#C5A059] text-[11px] font-black uppercase tracking-[0.6em] mb-4 italic">Ingestion Module</h2>
              <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">Push <span className="text-[#C5A059]">Release</span></h1>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
                <CheckCircle2 size={14} className="text-[#C5A059]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">System Ready</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* FORM SIDE */}
            <div className="lg:col-span-8 space-y-12">
              <section className="bg-black/40 backdrop-blur-3xl border border-white/10 p-12 rounded-[60px] shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                   <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A059] italic ml-1">Assigned ISRC Code</label>
                      <div className="w-full bg-[#C5A059]/5 border border-[#C5A059]/20 p-8 rounded-3xl text-[#C5A059] font-mono text-3xl font-bold tracking-tighter text-center">
                         {isrc || "ZA-AMV-26-XXXXX"}
                      </div>
                   </div>
                   
                   <RockInput label="Track Title" icon={Disc} placeholder="Song Name" />
                   <RockInput label="Artist Name" icon={User} placeholder="Primary Performer" />
                   <RockInput label="Genre" icon={Globe} placeholder="Music Style" />
                   <RockInput label="Language" icon={Hash} placeholder="English/IsiZulu" />
                </div>
              </section>

              <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] flex items-start gap-6">
                 <input type="checkbox" className="w-8 h-8 rounded-xl accent-[#C5A059] border-white/20" required />
                 <p className="text-[11px] uppercase font-bold text-gray-500 tracking-[0.2em] leading-loose text-left">
                    I declare that this recording is owned by <span className="text-white">Abantu Recordings</span> and all contributors are credited correctly according to DDEX standards.
                 </p>
              </div>
            </div>

            {/* ASSET SIDE */}
            <div className="lg:col-span-4 space-y-8">
              <AssetBox icon={ImageIcon} label="Cover Art" sub="3000px SQ" />
              <AssetBox icon={Music} label="Master Wav" sub="24-Bit / 44.1k" />
              
              <button className="w-full bg-white text-black font-[1000] py-10 rounded-[50px] uppercase text-[13px] tracking-[0.5em] hover:bg-[#C5A059] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 group">
                Execute Push
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
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
    <div className="space-y-4 text-left">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic ml-2">{label}</label>
      <div className="relative">
        <Icon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
        <input {...props} className="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-3xl outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all text-sm text-white font-bold" />
      </div>
    </div>
  )
}

function AssetBox({ icon: Icon, label, sub }: any) {
  return (
    <label className="h-60 border-2 border-dashed border-white/10 bg-white/[0.02] rounded-[50px] flex flex-col items-center justify-center group cursor-pointer hover:border-[#C5A059]/40 hover:bg-white/[0.05] transition-all duration-700">
      <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-[#C5A059]" size={32} />
      </div>
      <span className="text-[11px] font-[1000] uppercase tracking-[0.3em] text-white">{label}</span>
      <span className="text-[9px] text-gray-600 mt-2 uppercase font-black">{sub}</span>
      <input type="file" className="hidden" />
    </label>
  )
}
