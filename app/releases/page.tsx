'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import Sidebar from '../../components/Sidebar'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert('Please select a music file first!')

    setUploading(true)
    try {
      // 1. Upload the Music File to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `music/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('vault-releases')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // 2. Save the Song Info (Metadata) to the Database
      const { error: dbError } = await supabase
        .from('releases')
        .insert([{ 
            title: title, 
            artist_name: artist, 
            file_url: filePath,
            status: 'Pending Review' // This lets them know it's being checked for Spotify
        }])

      if (dbError) throw dbError

      alert('SUCCESS! Your track is now in the Vault and being prepared for Global Stores.')
      setTitle('')
      setArtist('')
      setFile(null)
    } catch (error: any) {
      alert(`Vault Error: ${error.message}`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-10 relative">
        {/* BACKGROUND HALF-LAYER */}
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-cover bg-center opacity-30 z-0" style={{ backgroundImage: "url('/bg-amv.jpg')" }} />
        
        <div className="relative z-10 max-w-3xl mt-20">
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[50px] shadow-2xl">
            <h2 className="text-4xl font-black italic mb-2 text-[#C5A059] uppercase tracking-tighter">New Distribution</h2>
            <p className="text-gray-500 text-[10px] mb-10 uppercase tracking-[0.4em]">Global Store Submission (DDEX Protocol)</p>
            
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase mb-2 text-gray-400">Song Title</label>
                  <input 
                    type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-[#C5A059]" 
                    placeholder="e.g. AmaPiano Soul" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-2 text-gray-400">Artist Name</label>
                  <input 
                    type="text" required value={artist} onChange={(e) => setArtist(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-[#C5A059]" 
                    placeholder="e.g. Durban King" 
                  />
                </div>
              </div>

              <div className="border-2 border-dashed border-white/10 p-14 rounded-[40px] text-center hover:border-[#C5A059]/50 transition-colors">
                <input 
                    type="file" accept="audio/*" required 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="hidden" id="music-upload" 
                />
                <label htmlFor="music-upload" className="cursor-pointer">
                  <p className="text-[#C5A059] font-black uppercase text-xs tracking-widest mb-2">
                    {file ? file.name : 'SELECT AUDIO FILE (WAV/MP3)'}
                  </p>
                  <p className="text-gray-600 text-[10px]">High-quality 44.1kHz preferred</p>
                </label>
              </div>

              <button 
                type="submit" disabled={uploading}
                className="w-full bg-[#C5A059] text-black font-black py-5 rounded-3xl hover:bg-white transition-all shadow-xl shadow-[#C5A059]/20"
              >
                {uploading ? 'UPLOADING TO VAULT...' : 'PUSH TO GLOBAL STORES'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
