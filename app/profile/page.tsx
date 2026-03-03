'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
// THE FIX: "User" and "Camera" added to imports to stop Netlify error
import { User, Instagram, Music2, Globe, CheckCircle, Camera, ShieldCheck } from 'lucide-react'

export default function ArtistProfile() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-[#C5A059]/30">
      <Sidebar />
      
      <main className="flex-1 p-8 md:p-12 relative overflow-hidden">
        {/* THE FIX: Background now points to exactly bg-amv.jpg */}
        <div 
          className="absolute inset-0 bg-[url('/bg-amv.jpg')] bg-cover bg-center bg-fixed opacity-40 -z-10" 
          style={{ backgroundSize: 'cover' }}
        />

        {/* Overlay to ensure text is readable over the picture */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-[50px] border border-white/10 shadow-2xl">
          <header className="mb-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            
            {/* THE FIX: Clickable Profile Picture Label */}
            <label className="relative group cursor-pointer block">
               <div className="w-32 h-32 md:w-40 md:h-40 bg-black border-2 border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-all overflow-hidden relative">
                  <User size={48} className="group-hover:scale-110 transition-transform opacity-50" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Camera size={24} className="text-[#C5A059]" />
                  </div>
                  {/* Hidden Input that triggers on click of the circle */}
                  <input type="file" className="hidden" accept="image/*" />
               </div>
               <div className="absolute bottom-2 right-2 bg-[#C5A059] text-black p-2 rounded-full border-4 border-black shadow-lg">
                  <ShieldCheck size={16} />
               </div>
            </label>

            <div>
              <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-2 italic">Management</h2>
              <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">Artist <span className="text-[#C5A059]">Profile</span></h1>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-3 font-bold border-l border-[#C5A059] pl-3">Public Label Identity & DSP Metadata</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* PERSONAL DETAILS */}
            <div className="space-y-6">
               <ProfileInput label="Official Stage Name" placeholder="e.g. AmaVampire" icon={Music2} />
               <ProfileInput label="Instagram Handle" placeholder="@yourhandle" icon={Instagram} />
               <ProfileInput label="Spotify Artist URI" placeholder="spotify:artist:..." icon={Globe} />
            </div>

            {/* BIO SECTION */}
            <div className="space-y-6 flex flex-col">
               <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-2 block italic text-white">Artist Biography (EPK)</label>
               <textarea 
                  className="w-full flex-1 bg-black/80 border border-white/10 p-6 rounded-[35px] outline-none focus:border-[#C5A059] transition-all text-sm h-48 md:h-full placeholder:text-gray-800 text-white"
                  placeholder="Tell the world your story..."
               />
               
               <button 
                  onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
                  className="w-full bg-[#C5A059] text-black font-black py-6 rounded-[30px] uppercase text-[10px] tracking-[0.4em] hover:bg-white transition-all shadow-xl shadow-[#C5A059]/10 active:scale-95"
               >
                  {loading ? "Syncing..." : "Update Identity"}
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProfileInput({ label, icon: Icon, ...props }: any) {
  return (
    <div>
      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-2 block ml-2 italic text-white">{label}</label>
      <div className="relative">
         <div className="absolute left-5 top-1/2 -translate-y-1/2 bg-[#C5A059]/10 p-2 rounded-lg">
            <Icon className="text-[#C5A059]" size={16} />
         </div>
         <input 
            {...props} 
            className="w-full bg-black/80 border border-white/10 p-5 pl-16 rounded-[25px] outline-none focus:border-[#C5A059] transition-all text-sm text-white placeholder:text-gray-800" 
         />
      </div>
    </div>
  )
}
