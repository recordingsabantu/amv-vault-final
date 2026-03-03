'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { UploadCloud, Music, CheckCircle2 } from 'lucide-react'

export default function UploadMusic() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleUpload() {
    if (!file || !title) return alert("Please add a Title and File")
    setLoading(true)

    // 1. Upload file to Supabase Storage
    const fileName = `${Date.now()}_${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('vault-releases')
      .upload(fileName, file)

    if (uploadError) {
      alert("Storage Error: " + uploadError.message)
      setLoading(false)
      return
    }

    // 2. Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('vault-releases')
      .getPublicUrl(fileName)

    // 3. Save metadata to the 'releases' table
    const { error: dbError } = await supabase.from('releases').insert({
      title: title,
      artist_name: "Verified Artist", // Later we can pull this from profile
      file_url: publicUrl,
      status: 'Pending Review'
    })

    if (!dbError) {
      alert("HOUSTON, WE ARE LIVE! Music sent to the Vault.")
      window.location.reload()
    }
    setLoading(false)
  }

  return (
    <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-md max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">Submit to <span className="text-[#C5A059]">Vault</span></h2>
      
      <div className="space-y-6">
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">Track Title</label>
          <input 
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-black/50 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C5A059] transition-all"
            placeholder="Enter track name..."
          />
        </div>

        <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center hover:border-[#C5A059]/50 transition-all cursor-pointer relative">
          <input 
            type="file" 
            accept="audio/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <UploadCloud className="mx-auto text-[#C5A059] mb-4" size={40} />
          <p className="text-sm font-bold">{file ? file.name : "Drag & Drop Audio File"}</p>
          <p className="text-[9px] text-gray-600 uppercase mt-2">WAV or MP3 (Max 20MB)</p>
        </div>

        <button 
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-[#C5A059] text-black font-black py-5 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-white transition-all disabled:opacity-50"
        >
          {loading ? "Transmitting..." : "Push to Distribution"}
        </button>
      </div>
    </div>
  )
}
