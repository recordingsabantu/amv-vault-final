'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { UploadCloud, Music, Image as ImageIcon } from 'lucide-react'

export default function SubmitMusic() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [artFile, setArtFile] = useState<File | null>(null)

  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-[#C5A059]/30">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12 bg-[url('/vault-bg.jpg')] bg-cover bg-center bg-fixed">
        <div className="max-w-6xl mx-auto backdrop-blur-sm bg-black/40 p-10 rounded-[40px] border border-white/5">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-2">Vault <span className="text-[#C5A059]">Ingestion</span></h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-10">Global Distribution Standard</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Metadata Inputs */}
            <div className="lg:col-span-2 space-y-6 bg-white/5 p-8 rounded-[30px] border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Track Title" className="bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C5A059]" />
                <input placeholder="Genre (e.g. Amapiano)" className="bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C5A059]" />
              </div>
              <textarea placeholder="Lyrics / Track Description (Optional)" className="w-full bg-black/60 border border-white/10 p-4 rounded-xl h-32 outline-none focus:border-[#C5A059]" />
            </div>

            {/* Upload Side: Audio & Cover Art */}
            <div className="space-y-4">
              {/* Cover Art Box */}
              <div className="h-48 border-2 border-dashed border-[#C5A059]/20 bg-black/60 rounded-[30px] flex flex-col items-center justify-center relative hover:border-[#C5A059] transition-all overflow-hidden group">
                <ImageIcon className="text-[#C5A059]/50 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Add Cover Art</p>
                <p className="text-[8px] text-gray-700 mt-1 uppercase text-center px-4">3000 x 3000 JPG/PNG Only</p>
                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setArtFile(e.target.files?.[0] || null)} />
                {artFile && <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-[10px] font-bold text-[#C5A059]">{artFile.name}</div>}
              </div>

              {/* Audio Box */}
              <div className="h-48 border-2 border-dashed border-[#C5A059]/20 bg-black/60 rounded-[30px] flex flex-col items-center justify-center relative hover:border-[#C5A059] transition-all group">
                <Music className="text-[#C5A059]/50 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Add Master Audio</p>
                <p className="text-[8px] text-gray-700 mt-1 uppercase">WAV or High-Res MP3</p>
                <input type="file" accept="audio/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setAudioFile(e.target.files?.[0] || null)} />
                {audioFile && <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-[10px] font-bold text-[#C5A059]">{audioFile.name}</div>}
              </div>

              <button className="w-full bg-[#C5A059] text-black font-black py-5 rounded-[25px] uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all active:scale-95 shadow-lg shadow-[#C5A059]/10">
                Push to Distribution
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
