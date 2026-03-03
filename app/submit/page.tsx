'use client'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Music, Image as ImageIcon, ShieldCheck, Loader2 } from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DistributeMusic() {
  const [isrc, setIsrc] = useState("")
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const fetchAndGenerateISRC = async () => {
      const { count } = await supabase.from('releases').select('*', { count: 'exact', head: true })
      const nextNumber = ((count || 0) + 1).toString().padStart(5, '0')
      setIsrc(`ZA-AMV-26-${nextNumber}`)
    }
    fetchAndGenerateISRC()
  }, [])

  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 relative z-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <ShieldCheck className="text-[#C5A059]" size={16} />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 text-left">DDEX Certified Portal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-left">
              Push <span className="text-[#C5A059]">Music</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form className="lg:col-span-2 space-y-6 bg-black/60 backdrop-blur-2xl p-8 md:p-12 rounded-[50px] border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                 <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#C5A059] italic ml-2">Official ISRC (Auto-Generated)</label>
                    <div className="w-full bg-[#C5A059]/10 border border-[#C5A059]/30 p-6 rounded-3xl text-[#C5A059] font-mono font-bold text-center">
                       {isrc || "GENERATING..."}
                    </div>
                 </div>
                 <VaultInput label="Track Title" placeholder="Song Name" />
                 <VaultInput label="Primary Artist" placeholder="Artist Name" />
                 <VaultInput label="Genre" placeholder="Amapiano" />
              </div>
              
              <div className="p-6 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-3xl flex items-start gap-4">
                 <input type="checkbox" className="mt-1 w-5 h-5 accent-[#C5A059]" required />
                 <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest leading-loose text-left">
                    I verify that <span className="text-white">Abantu Recordings</span> owns the master rights to this ISRC.
                 </p>
              </div>
            </form>

            <div className="space-y-6 text-left">
              <UploadBox icon={ImageIcon} label="Cover Art" sub="3000px JPG" />
              <UploadBox icon={Music} label="Master Audio" sub="WAV Only" />
              <button className="w-full bg-[#C5A059] text-black font-black py-8 rounded-[40px] uppercase text-xs tracking-[0.5em] hover:bg-white transition-all shadow-2xl active:scale-95">
                {uploading ? <Loader2 className="animate-spin mx-auto" /> : "Start Ingestion"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function VaultInput({ label, ...props }: any) {
  return (
    <div className="space-y-2 text-left">
      <label className="text-[9px] font-black uppercase tracking-widest text-[#C5A059] italic ml-2">{label}</label>
      <input {...props} className="w-full bg-black/80 border border-white/5 p-6 rounded-3xl outline-none focus:border-[#C5A059] transition-all text-sm text-white" />
    </div>
  )
}

function UploadBox({ icon: Icon, label, sub }: any) {
  return (
    <label className="h-44 border-2 border-dashed border-white/10 bg-black/60 backdrop-blur-md rounded-[45px] flex flex-col items-center justify-center group cursor-pointer hover:border-[#C5A059]/40 transition-all">
      <Icon className="text-[#C5A059] mb-2 group-hover:scale-110 transition-transform" size={32} />
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      <span className="text-[8px] text-gray-600 mt-2 uppercase">{sub}</span>
      <input type="file" className="hidden" />
    </label>
  )
}
