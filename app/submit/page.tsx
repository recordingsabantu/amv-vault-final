'use client'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Music, Image as ImageIcon, CheckCircle, ShieldCheck, Loader2 } from 'lucide-react'

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function DistributeMusic() {
  const [isrc, setIsrc] = useState("")
  const [uploading, setUploading] = useState(false)

  // --- THE ISRC GENERATOR LOGIC ---
  useEffect(() => {
    const fetchAndGenerateISRC = async () => {
      // 1. Check how many songs are already in your database
      const { count } = await supabase
        .from('releases')
        .select('*', { count: 'exact', head: true })

      // 2. Build the code: ZA (Country) - AMV (Registrant) - 26 (Year) - Number
      const country = "ZA"
      const registrant = "AMV" 
      const year = "26"
      const nextNumber = ((count || 0) + 1).toString().padStart(5, '0')
      
      setIsrc(`${country}-${registrant}-${year}-${nextNumber}`)
    }

    fetchAndGenerateISRC()
  }, [])

  return (
    <div className="flex min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* GLUED BACKGROUND */}
      <div 
        className="fixed top-0 right-0 w-full md:w-1/2 h-full opacity-30 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-amv.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to left, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 100%)'
        }}
      />

      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 relative z-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <ShieldCheck className="text-[#C5A059]" size={16} />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">DDEX Certified Portal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              Push <span className="text-[#C5A059]">Music</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* FORM SECTION */}
            <form className="lg:col-span-2 space-y-6 bg-black/60 backdrop-blur-2xl p-8 md:p-12 rounded-[50px] border border-white/10 shadow-2xl">
              
              {/* THIS IS THE DISPLAY SECTION YOU ASKED TO PASTE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#C5A059] italic ml-2">Official ISRC (Auto-Generated)</label>
                    <div className="w-full bg-[#C5A059]/10 border border-[#C5A059]/30 p-6 rounded-3xl text-[#C5A059] font-mono font-bold text-center">
                       {isrc || "GENERATING..."}
                    </div>
                 </div>
                 <VaultInput label="Track Title" placeholder="Enter Song Name" />
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

            {/* UPLOAD SECTION */}
            <div className="space-y-6">
              <UploadBox icon={ImageIcon} label="Cover Art" sub="3000px JPG" />
              <UploadBox icon={Music} label="Master Audio" sub="WAV Only" />
              
              <button className="w-full bg-[#C5A059] text-black font-black py-8 rounded-[40px] uppercase text-xs tracking-[0.5em] hover:bg-white transition-all shadow-2xl">
                {uploading ? <Loader2 className="animate-spin mx-auto" /> : "Start Ingestion"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// THE VAULT INPUT TEMPLATE (The definition)
function VaultInput({ label, ...props }: any) {
  return (
    <div className="space-y-2 text-left">
      <label className="text-[9px] font-black uppercase tracking-widest text-[#C5A059] italic ml-2">{label}</label>
      <input {...props} className="w-full bg-black/80 border border-white/5 p-6 rounded-3xl outline-none focus:border-[#C5A059] transition-all text-sm text-white" />
    </div>
  )
}

// THE UPLOAD BOX TEMPLATE
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
