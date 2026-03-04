'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Music, Image as ImageIcon, Globe, User, Disc, ArrowUpRight, Loader2, CheckCircle2 } from 'lucide-react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function DistributeMusic() {
  const [loading, setLoading] = useState(false)
  const [isrc, setIsrc] = useState("")
  const [formData, setFormData] = useState({ title: '', artist: '', genre: '' })
  const [files, setFiles] = useState<{ audio: File | null, art: File | null }>({ audio: null, art: null })

  // 1. AUTO-GENERATE ISRC ON LOAD
  useEffect(() => {
    const fetchNextIsrc = async () => {
      const { count } = await supabase.from('releases').select('*', { count: 'exact', head: true })
      const nextNum = ((count || 0) + 1).toString().padStart(5, '0')
      setIsrc(`ZA-AMV-26-${nextNum}`)
    }
    fetchNextIsrc()
  }, [])

  // 2. THE UPLOAD EXECUTION
  const handlePush = async () => {
    if (!files.audio || !formData.title) return alert("Missing Title or Audio Master")
    setLoading(true)

    try {
      // Upload Audio to Storage
      const audioPath = `audio/${Date.now()}_${files.audio.name}`
      await supabase.storage.from('vault-assets').upload(audioPath, files.audio)

      // Upload Artwork to Storage
      let artPath = ''
      if (files.art) {
        artPath = `artwork/${Date.now()}_${files.art.name}`
        await supabase.storage.from('vault-assets').upload(artPath, files.art)
      }

      // Insert Metadata to Table
      const { error } = await supabase.from('releases').insert([{
        title: formData.title,
        artist: formData.artist,
        genre: formData.genre,
        isrc: isrc,
        audio_url: audioPath,
        artwork_url: artPath,
        status: 'processing'
      }])

      if (error) throw error
      alert("RELEASE INGESTED SUCCESSFULLY")
      window.location.href = '/catalog'
    } catch (err) {
      console.error(err)
      alert("PUSH FAILED: Check Console")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-20 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          
          <header className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
            <div>
              <h2 className="text-[#C5A059] text-[11px] font-black uppercase tracking-[0.6em] mb-4 italic">Ingestion Module</h2>
              <h1 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none">
                Push <span className="text-[#C5A059]">Release</span>
              </h1>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
              <CheckCircle2 size={14} className={loading ? "animate-spin text-gray-500" : "text-[#C5A059]"} />
              <span className="text-[10px] font-black uppercase tracking-widest uppercase">
                {loading ? "Uploading..." : "System Ready"}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <section className="bg-white/[0.02] border border-white/10 p-12 rounded-[60px] shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                   <div className="md:col-span-2 space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A059] italic ml-1">Assigned ISRC</label>
                      <div className="w-full bg-[#C5A059]/5 border border-[#C5A059]/20 p-8 rounded-3xl text-[#C5A059] font-mono text-3xl font-bold tracking-tighter text-center">
                         {isrc}
                      </div>
                   </div>
                   
                   <RockInput label="Track Title" icon={Disc} placeholder="Song Name" 
                     onChange={(e: any) => setFormData({...formData, title: e.target.value})} />
                   <RockInput label="Artist" icon={User} placeholder="Primary Performer" 
                     onChange={(e: any) => setFormData({...formData, artist: e.target.value})} />
                   <RockInput label="Genre" icon={Globe} placeholder="Amapiano / Afro House" 
                     onChange={(e: any) => setFormData({...formData, genre: e.target.value})} />
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <AssetBox icon={ImageIcon} label="Cover Art" sub="3000px SQ" 
                onFile={(f) => setFiles({...files, art: f})} hasFile={!!files.art} />
              <AssetBox icon={Music} label="Master Wav" sub="24-Bit / 44.1k" 
                onFile={(f) => setFiles({...files, audio: f})} hasFile={!!files.audio} />
              
              <button 
                onClick={handlePush}
                disabled={loading}
                className="w-full bg-white text-black font-[1000] py-10 rounded-[50px] uppercase text-[13px] tracking-[0.5em] hover:bg-[#C5A059] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Execute Push"}
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// UI HELPER COMPONENTS
function RockInput({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-4 text-left">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic ml-2">{label}</label>
      <div className="relative">
        <Icon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
        <input {...props} className="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-3xl outline-none focus:border-[#C5A059] transition-all text-sm text-white font-bold" />
      </div>
    </div>
  )
}

function AssetBox({ icon: Icon, label, sub, onFile, hasFile }: any) {
  return (
    <label className={`h-60 border-2 border-dashed rounded-[50px] flex flex-col items-center justify-center group cursor-pointer transition-all duration-700 ${hasFile ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-white/10 bg-white/[0.02] hover:border-[#C5A059]/40'}`}>
      <Icon className={hasFile ? "text-white" : "text-[#C5A059]"} size={32} />
      <span className="text-[11px] font-[1000] uppercase tracking-[0.3em] text-white mt-4">{hasFile ? "File Ready" : label}</span>
      <span className="text-[9px] text-gray-600 mt-2 uppercase font-black">{sub}</span>
      <input type="file" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
    </label>
  )
}
