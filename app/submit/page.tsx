'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { UploadCloud, Music, Info } from 'lucide-react'

export default function SubmitMusic() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12">
        <div className="max-w-5xl">
          <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-2">Artist Portal</h2>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-8">Submit <span className="text-[#C5A059]">Music</span></h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Metadata Section */}
            <div className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-[40px]">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                <Info size={14} className="text-[#C5A059]" /> Track Details
              </h3>
              
              <div className="space-y-4">
                <TrackInput label="Song Title" placeholder="e.g. Durban Night" />
                <TrackInput label="Genre" placeholder="e.g. Amapiano" />
                <div className="grid grid-cols-2 gap-4">
                  <TrackInput label="ISRC (Optional)" placeholder="ZA-XXX..." />
                  <TrackInput label="Release Date" type="date" />
                </div>
                <TrackInput label="Primary Artist" placeholder="Stage Name" />
              </div>
            </div>

            {/* Upload Section */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 border-2 border-dashed border-[#C5A059]/20 bg-[#C5A059]/5 rounded-[40px] flex flex-col items-center justify-center p-10 hover:border-[#C5A059] transition-all cursor-pointer group">
                <UploadCloud size={48} className="text-[#C5A059] mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-black uppercase text-[10px] tracking-widest">Select Audio Master</p>
                <p className="text-gray-600 text-[9px] mt-2 italic">WAV preferred (High Res)</p>
                <input type="file" className="hidden" />
              </div>

              <button className="w-full bg-[#C5A059] text-black font-black py-6 rounded-[30px] uppercase text-[10px] tracking-[0.3em] shadow-lg shadow-[#C5A059]/10 hover:bg-white transition-all">
                Push to Distribution
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function TrackInput({ label, ...props }: any) {
  return (
    <div>
      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-2 block ml-1">{label}</label>
      <input 
        {...props} 
        className="w-full bg-black/40 border border-white/10 p-4 rounded-2xl text-sm focus:border-[#C5A059] outline-none transition-all placeholder:text-gray-800"
      />
    </div>
  )
}
