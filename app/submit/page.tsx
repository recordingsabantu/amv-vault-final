'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Music, Image as ImageIcon, Globe, User, Disc, ArrowUpRight, Loader2, CheckCircle2, Menu } from 'lucide-react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function DistributeMusic() {
  const [loading, setLoading] = useState(false)
  const [isrc, setIsrc] = useState("")
  const [formData, setFormData] = useState({ title: '', artist: '', genre: '' })
  const [files, setFiles] = useState<{ audio: File | null, art: File | null }>({ audio: null, art: null })

  useEffect(() => {
    const fetchNextIsrc = async () => {
      const { count } = await supabase.from('releases').select('*', { count: 'exact', head: true })
      const nextNum = ((count || 0) + 1).toString().padStart(5, '0')
      setIsrc(`ZA-AMV-26-${nextNum}`)
    }
    fetchNextIsrc()
  }, [])

  const handlePush = async () => {
    if (!files.audio || !formData.title) return alert("Error: Title and Master Audio required.")
    setLoading(true)
    try {
      const audioPath = `audio/${Date.now()}_${files.audio.name}`
      await supabase.storage.from('vault-assets').upload(audioPath, files.audio)

      let artPath = ''
      if (files.art) {
        artPath = `artwork/${Date.now()}_${files.art.name}`
        await supabase.storage.from('vault-assets').upload(artPath, files.art)
      }

      await supabase.from('releases').insert([{
        title: formData.title,
        artist: formData.artist,
        genre: formData.genre,
        isrc: isrc,
        audio_url: audioPath,
        artwork_url: artPath,
        status: 'processing'
      }])

      alert("VAULT INGESTION COMPLETE")
      window.location.href = '/catalog'
    } catch (err) {
      alert("System Error during Push")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white overflow-x-hidden">
      <Sidebar />
      
      {/* MAIN CONTENT - MOBILE FRIENDLY PADDING */}
      <main className="flex-1 p-6 md:p-20 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER - SCALES FOR MOBILE */}
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8 text-left">
            <div className="w-full">
              <h2 className="text-[#C5A059] text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] mb-4 italic">Ingestion Module</h2>
              <h1 className="text-5xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-[0.85]">
                Push <span className="text-[#C5A059]">Release</span>
              </h1>
            </div>
            <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
              <CheckCircle2 size={12} className={loading ? "animate-spin text-gray-500" : "text-[#C5A059]"} />
              <span className="text-[9px] font-black uppercase tracking-widest">{loading ? "Uploading" : "Ready"}</span>
            </div>
          </header>

          {/* GRID: 1 COL ON MOBILE, 12 COLS ON PC */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            
            {/* FORM AREA */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
              <section className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[40px] md:rounded-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
                   <div className="md:col-span-2 space-y-3">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C5A059] italic ml-1">ISRC Designation</label>
                      <div className="w-full bg-[#C5A059]/5 border border-[#C5A059]/20 py-6 md:py-8 rounded-2xl md:rounded-3xl text-[#C5A059] font-mono text-2xl md:text-3xl font-bold tracking-tighter text-center">
                         {isrc}
                      </div>
                   </div>
                   
                   <RockInput label="Track Title" icon={Disc} onChange={(e: any) => setFormData({...formData, title: e.target.value})} />
                   <RockInput label="Artist" icon={User} onChange={(e: any) => setFormData({...formData, artist: e.target.value})} />
                   <div className="md:col-span-2">
                     <RockInput label="Genre" icon={Globe} onChange={(e: any) => setFormData({...formData, genre: e.target.value})} />
                   </div>
                </div>
              </section>
            </div>

            {/* UPLOAD AREA */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <AssetBox icon={ImageIcon} label="Artwork" sub="3000px" onFile={(f) => setFiles({...files, art: f})} hasFile={!!files.art} />
                <AssetBox icon={Music} label="Master" sub="WAV Only" onFile={(f) => setFiles({...files, audio: f})} hasFile={!!files.audio} />
              </div>
              
              <button 
                onClick={handlePush}
                disabled={loading}
                className="w-full bg-white text-black font-[1000] py-8 md:py-10 rounded-[40px] md:rounded-[50px] uppercase text-[12px] tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50 active:scale-95"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Execute Push"}
                <ArrowUpRight size={18} />
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
    <div className="space-y-3 text-left w-full">
      <label className="text-[9px] font-black uppercase tracking-widest text-gray-600 italic ml-2">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-700 group-focus-within:text-[#C5A059] transition-colors" size={16} />
        <input {...props} className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-2xl outline-none focus:border-[#C5A059] text-sm text-white font-bold" />
      </div>
    </div>
  )
}

function AssetBox({ icon: Icon, label, sub, onFile, hasFile }: any) {
  return (
    <label className={`h-48 md:h-60 border-2 border-dashed rounded-[40px] md:rounded-[50px] flex flex-col items-center justify-center group cursor-pointer transition-all ${hasFile ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-white/10 bg-white/[0.02]'}`}>
      <Icon className={hasFile ? "text-white" : "text-[#C5A059]"} size={28} />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white mt-3">{hasFile ? "Loaded" : label}</span>
      <span className="text-[8px] text-gray-600 mt-1 uppercase font-bold">{sub}</span>
      <input type="file" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
    </label>
  )
}
