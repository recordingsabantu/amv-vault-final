'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '../../../components/Sidebar'
import { supabase } from '../../../utils/supabase'
import { Music, Upload, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react'

export default function UploadPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1) // 1: Info, 2: File, 3: Success

  // Form State
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [isrc, setIsrc] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert("Please select an audio file")
    
    setLoading(true)
    
    try {
      // 1. Upload to Supabase Storage Bucket 'music'
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`
      const filePath = `releases/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('music')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // 2. Insert Metadata into 'releases' table
      const { error: dbError } = await supabase.from('releases').insert([
        { 
          title, 
          artist_name: artist, 
          isrc_code: isrc, 
          file_url: filePath,
          status: 'pending' 
        }
      ])

      if (dbError) throw dbError

      setStep(3) // Move to Success screen
    } catch (err: any) {
      alert("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div 
      className="min-h-screen text-white flex bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/bg-amv.jpg')" }}
    >
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
        </button>

        <div className="max-w-3xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-black tracking-tighter text-[#C5A059] italic uppercase">New Release</h1>
            <p className="text-gray-400 mt-2">Prepare your sound for global stores</p>
          </header>

          {/* PROGRESS STEPS */}
          <div className="flex justify-center gap-4 mb-10">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`w-12 h-1 h-1 rounded-full ${step >= s ? 'bg-[#C5A059]' : 'bg-white/10'}`}
              />
            ))}
          </div>

          <div className="bg-black/60 backdrop-blur-2xl p-10 rounded-[40px] border border-[#C5A059]/20 shadow-2xl">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold border-b border-white/5 pb-4">Step 1: Track Metadata</h2>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Song Title</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#C5A059] outline-none transition"
                    placeholder="Enter track name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-widest">Artist Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-[#C5A059] outline-none transition"
                    placeholder="Primary Artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                  />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-[#C5A059] text-black font-black py-4 rounded-xl hover:bg-white transition-all shadow-lg"
                >
                  NEXT: UPLOAD AUDIO
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold border-b border-white/5 pb-4">Step 2: High-Quality Audio</h2>
                <div className="border-2 border-dashed border-[#C5A059]/30 rounded-3xl p-12 text-center hover:border-[#C5A059] transition-colors cursor-pointer relative">
                  <input 
                    type="file" 
                    accept="audio/*" 
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <Upload size={48} className="mx-auto text-[#C5A059] mb-4 opacity-50"/>
                  <p className="font-bold">{file ? file.name : "Select WAV or MP3 File"}</p>
                  <p className="text-xs text-gray-500 mt-2 italic">Recommended: 44.1kHz WAV for best quality</p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 bg-white/5 py-4 rounded-xl font-bold hover:bg-white/10">BACK</button>
                  <button 
                    onClick={handleUpload}
                    disabled={loading}
                    className="flex-[2] bg-[#C5A059] text-black font-black py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin"/> : 'DELIVER TO VAULT'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48}/>
                </div>
                <h2 className="text-3xl font-black mb-4 uppercase italic">Submission Received!</h2>
                <p className="text-gray-400 mb-8">Your music is being processed for distribution under License <span className="text-[#C5A059]">PA-DPIDA-2026022701-M</span>.</p>
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="bg-white text-black font-black px-10 py-4 rounded-xl hover:bg-[#C5A059] transition-all shadow-xl"
                >
                  RETURN TO DASHBOARD
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
