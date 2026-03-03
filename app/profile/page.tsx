'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { User, Camera, Instagram, Globe, Music2, Mail, Save } from 'lucide-react'

export default function ProfilePage() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-10 relative">
        {/* GOLD GRADIENT ACCENT */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[150px] -z-10" />

        <header className="mb-12">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">Artist <span className="text-[#C5A059]">Profile</span></h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2">Manage your Global Identity</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: AVATAR & QUICK STATS */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[50px] flex flex-col items-center text-center backdrop-blur-md">
              <div className="relative group">
                <div className="w-40 h-40 rounded-full bg-[#111] border-2 border-dashed border-[#C5A059]/30 flex items-center justify-center mb-6 overflow-hidden">
                  <User size={64} className="text-[#C5A059]/20" />
                </div>
                <button className="absolute bottom-6 right-2 bg-[#C5A059] p-3 rounded-full text-black hover:scale-110 transition-transform shadow-lg">
                  <Camera size={18} />
                </button>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Artist Name</h2>
              <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mt-1">Verified Artist</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-[30px]">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">Vault Status</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-300">Account Type</span>
                <span className="text-[10px] font-black text-[#C5A059] uppercase">Executive</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300">Member Since</span>
                <span className="text-[10px] font-black text-gray-500 uppercase">2026</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EDITABLE FIELDS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[50px] backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <ProfileInput label="Stage Name" placeholder="e.g. Durban King" icon={Music2} />
                <ProfileInput label="Email Address" placeholder="artist@example.com" icon={Mail} />
                <ProfileInput label="Instagram Handle" placeholder="@username" icon={Instagram} />
                <ProfileInput label="Official Website" placeholder="www.artist.com" icon={Globe} />
              </div>

              <div className="mb-8">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Artist Bio (Global Stores)</label>
                <textarea 
                  className="w-full bg-black/40 border border-white/10 p-5 rounded-3xl h-40 text-sm focus:border-[#C5A059] outline-none transition-all resize-none"
                  placeholder="Tell the world your story..."
                ></textarea>
              </div>

              <button 
                onClick={() => {setLoading(true); setTimeout(() => setLoading(false), 1500)}}
                className="flex items-center justify-center gap-3 bg-[#C5A059] text-black font-black py-5 px-10 rounded-3xl w-full md:w-auto uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl shadow-[#C5A059]/10"
              >
                {loading ? 'Saving Changes...' : <><Save size={18} /> Update Vault Profile</>}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

function ProfileInput({ label, placeholder, icon: Icon }: any) {
  return (
    <div>
      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">{label}</label>
      <div className="relative">
        <Icon className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C5A059]/40" size={18} />
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-black/40 border border-white/10 p-4 pl-14 rounded-2xl text-sm focus:border-[#C5A059] outline-none transition-all font-medium"
        />
      </div>
    </div>
  )
}
