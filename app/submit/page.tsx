'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { UploadCloud, Music, Image as ImageIcon, ShieldCheck } from 'lucide-react'

export default function DistributeMusic() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-[#C5A059]/30">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12 relative">
        {/* Half-Background Glow Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C5A059]/5 to-transparent -z-10" />

        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-2">Distribute <span className="text-[#C5A059]">Music</span></h1>
            <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold">Global DSP Ingestion Portal</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white/5 p-8 md:p-12 rounded-[50px] border border-white/10 backdrop-blur-md">
            <div className="lg:col-span-2 space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <VaultInput label="Track Title" placeholder="e.g. AmaVampire" />
                  <VaultInput label="Primary Artist Name" placeholder="Stage Name" />
                  <VaultInput label="Featured Artist(s)" placeholder="Leave blank if none" />
                  <VaultInput label="Genre" placeholder="Amapiano / Gqom" />
                  <VaultInput label="ISRC Code" placeholder="ZA-XXX-26-XXXXX" />
                  <VaultInput label="Release Date" type="date" />
               </div>

               <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-6 h-6 accent-[#C5A059] cursor-pointer" />
                  <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest leading-relaxed">
                    I verify that I own all rights to this master recording and artwork. I authorize <span className="text-[#C5A059]">Abantu Recordings</span> to distribute this content globally.
                  </p>
               </div>
            </div>

            <div className="space-y-6">
              <UploadBox icon={ImageIcon} label="Cover Art" sub="3000x3000px JPG" />
              <UploadBox icon={Music} label="Master Audio" sub="High-Res WAV" />
              
              <button 
                disabled={!agreed}
                className="w-full bg-[#C5A059] text-black font-black py-6 rounded-[35px] uppercase text-xs tracking-[0.4em] hover:bg-white transition-all disabled:opacity-10 active:scale-95 shadow-xl shadow-[#C5A059]/10"
              >
                Push to Release
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
    <div>
      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-2 block ml-2 italic">{label}</label>
      <input {...props} className="w-full bg-black border border-white/10 p-5 rounded-2xl outline-none focus:border-[#C5A059] transition-all text-sm placeholder:text-gray-800" />
    </div>
  )
}

function UploadBox({ icon: Icon, label, sub }: any) {
  return (
    <label className="h-44 border-2 border-dashed border-white/10 bg-black rounded-[40px] flex flex-col items-center justify-center relative hover:border-[#C5A059]/50 transition-all group cursor-pointer">
      <Icon className="text-[#C5A059] mb-2 group-hover:scale-110 transition-transform" size={32} />
      <p className="text-[10px] font-black uppercase tracking-widest text-white">{label}</p>
      <p className="text-[8px] text-gray-600 mt-1 uppercase">{sub}</p>
      <input type="file" className="hidden" />
    </label>
  )
}
