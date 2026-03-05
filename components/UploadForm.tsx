'use client'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { UploadCloud, CheckCircle2, Loader2 } from 'lucide-react'

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState<string | null>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const upload = async () => {
    if (!file) return
    setLoading(true)
    try {
      const path = `uploads/${Date.now()}_${file.name}`
      const { error } = await supabase.storage.from('uploads').upload(path, file)
      if (error) throw error
      const { data } = supabase.storage.from('uploads').getPublicUrl(path)
      setUrl(data.publicUrl)
    } catch (err: any) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative group">
        <input 
          type="file" 
          onChange={handleFile} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
        />
        <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center group-hover:border-[#C5A059]/50 transition-all bg-white/[0.02]">
          <UploadCloud className={file ? "text-green-500" : "text-[#C5A059]"} size={32} />
          <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-white">
            {file ? file.name : "Select Asset"}
          </p>
        </div>
      </div>

      <button 
        onClick={upload} 
        disabled={loading || !file}
        className="w-full py-4 bg-[#C5A059] text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl disabled:opacity-30 flex items-center justify-center gap-3 transition-transform active:scale-95"
      >
        {loading ? <Loader2 className="animate-spin" size={16} /> : "Initialize Upload"}
      </button>

      {url && (
        <div className="flex items-center justify-center gap-2 text-green-500 text-[9px] font-bold uppercase tracking-widest">
          <CheckCircle2 size={12} />
          Encrypted & Stored
        </div>
      )}
    </div>
  )
}
