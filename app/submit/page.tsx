'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Music, Image as ImageIcon, CheckCircle, Loader2, ShieldCheck } from 'lucide-react'

export default function DistributeMusic() {
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState('')
  const supabase = createClientComponentClient()

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-[#C5A059]/30 relative">
      
      {/* THE "GLUED" BACKGROUND: This stays full-screen and never moves */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-amv.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.4' 
        }}
      />
      
      {/* THE OVERLAY: Glued on top of the image to make it look premium/dark */}
      <div className="fixed inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent z-0 pointer-events-none" />

      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 relative z-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <ShieldCheck className="text-[#C5A059]" size={16} />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Secure Distribution Portal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              Push <span className="text-[#C5A059]">Music</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <form className="lg:col-span-2 space-y-6 bg-black/40 backdrop-blur-2xl p-8 md:p-12 rounded-[50px] border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <VaultInput label="Track Title" placeholder="Enter Song Name" />
                 <VaultInput label="Primary Artist" placeholder="Artist Stage Name" />
                 <VaultInput label="Genre" placeholder="Amapiano / Gqom" />
                 <VaultInput label="Release Date" type="date" />
              </div>
              
              <div className="p-6 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-[30px] flex items-start gap-4">
                 <input type="checkbox" className="mt-1 w-5 h-5 accent-[#C5A059]" required />
                 <p className="text-[10px] uppercase font-bold text-gray-400 leading-relaxed tracking-widest">
                    I confirm that this recording is 100% owned by <span className="text-white">Abantu Recordings</span> and is cleared for global distribution.
                 </p>
              </div>
            </form>

            {/* Upload Section */}
            <div className="space-y-6">
              <UploadSlot icon={ImageIcon} label="Cover Art" sub="3000 x 3000 px" />
              <UploadSlot icon={Music} label="Master Audio" sub="High-Res WAV Only" />
              
              <button className="w-full bg-[#C5A059] text-black font-black py-8 rounded-[40px] uppercase text-xs tracking-[0.5em] hover:bg-white transition-all shadow-2xl shadow-[#C5A059]/20 active:scale-95">
                Initialize Release
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
    <div className="space-y-2">
      <label className="text-[9px] font-black uppercase tracking-widest text-[#C5A059] ml-2 italic">{label}</label>
      <input {...props} className="w-full bg-black/60 border border-white/5 p-6 rounded-3xl outline-none focus:border-[#C5A059] transition-all text-sm placeholder:text-gray-800" />
    </div>
  )
}

function UploadSlot({ icon: Icon, label, sub }: any) {
  return (
    <label className="h-48 border-2 border-dashed border-white/10 bg-black/60 backdrop-blur-md rounded-[50px] flex flex-col items-center justify-center group cursor-pointer hover:border-[#C5A059]/40 transition-all">
      <Icon className="text-[#C5A059] mb-3 group-hover:scale-110 transition-transform" size={32} />
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      <span className="text-[8px] text-gray-600 mt-2 uppercase tracking-tighter">{sub}</span>
      <input type="file" className="hidden" />
    </label>
  )
}
