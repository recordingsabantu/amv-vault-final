'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { User, Wallet, ShieldCheck, Camera, Music2, Instagram, Globe, ArrowUpRight } from 'lucide-react'

export default function ArtistProfile() {
  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-[#C5A059]/30 relative overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 relative min-h-screen">
        
        {/* THE "HALF-SCREEN" BACKGROUND FIX */}
        <div 
          className="absolute top-0 right-0 w-full h-[50vh] md:w-1/2 md:h-full opacity-40 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg-amv.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
          }}
        />
        
        {/* DARK GRADIENT TO CLEAN UP THE LOOK */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black -z-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* HEADER SECTION */}
          <header className="mb-10 flex items-end gap-6">
            <div className="relative group">
               <div className="w-24 h-24 bg-black border border-[#C5A059]/30 rounded-2xl flex items-center justify-center text-[#C5A059] overflow-hidden relative">
                  <User size={40} className="opacity-20" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                    <Camera size={20} />
                  </div>
               </div>
               <div className="absolute -bottom-2 -right-2 bg-[#C5A059] text-black p-1.5 rounded-lg border-4 border-black">
                  <ShieldCheck size={12} />
               </div>
            </div>
            <div>
              <h2 className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em] mb-1 italic text-left">Verified Artist</h2>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Portal <span className="text-[#C5A059]">Access</span></h1>
            </div>
          </header>

          {/* THE VERTICAL ROW: Profile & Wallet Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT: ARTIST METADATA (8 Columns) */}
            <div className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4 border-b border-white/5 pb-4">Identity Metadata</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VaultInput label="Stage Name" icon={Music2} placeholder="Artist Name" />
                 <VaultInput label="Instagram" icon={Instagram} placeholder="@handle" />
                 <VaultInput label="Spotify URI" icon={Globe} placeholder="spotify:artist:..." />
                 <div className="flex flex-col justify-end">
                    <button className="bg-[#C5A059] text-black font-black py-4 rounded-2xl uppercase text-[9px] tracking-widest hover:bg-white transition-all shadow-lg shadow-[#C5A059]/10">
                       Save Profile
                    </button>
                 </div>
              </div>
            </div>

            {/* RIGHT: ARTIST WALLET (4 Columns) - No longer a show-off, just a functional box */}
            <div className="lg:col-span-4 bg-[#C5A059] p-8 rounded-[40px] text-black shadow-2xl shadow-[#C5A059]/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Wallet size={80} />
               </div>
               <h3 className="text-[9px] font-black uppercase tracking-widest mb-6 border-b border-black/10 pb-2">Artist Wallet</h3>
               <div className="mb-8">
                  <p className="text-[10px] uppercase font-bold opacity-60">Available Royalties</p>
                  <h4 className="text-4xl font-black italic tracking-tighter">R 0.00</h4>
               </div>
               <button className="w-full bg-black text-white font-black py-4 rounded-2xl uppercase text-[9px] tracking-widest flex items-center justify-center gap-2 hover:opacity-80 transition-all">
                  Request Payout <ArrowUpRight size={14} />
               </button>
            </div>

          </div>

          {/* BOTTOM SECTION: CATALOG LIST (Vertical Stack) */}
          <div className="mt-8 bg-black/40 border border-white/5 p-8 rounded-[40px]">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">Recent Distribution Activity</h3>
             <div className="space-y-4">
                <CatalogItem title="Vampire Piano" status="Processing" date="Mar 2026" />
                <CatalogItem title="Abantu Anthem" status="Live" date="Feb 2026" />
             </div>
          </div>

        </div>
      </main>
    </div>
  )
}

function VaultInput({ label, icon: Icon, ...props }: any) {
  return (
    <div className="space-y-2 text-left">
      <label className="text-[8px] font-black uppercase tracking-widest text-gray-500 ml-2 italic">{label}</label>
      <div className="relative">
         <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5A059]/40" size={14} />
         <input {...props} className="w-full bg-black/40 border border-white/5 p-4 pl-12 rounded-2xl outline-none focus:border-[#C5A059] transition-all text-[12px] text-white" />
      </div>
    </div>
  )
}

function CatalogItem({ title, status, date }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#C5A059]/20 transition-all">
       <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#C5A059]/10 rounded-lg flex items-center justify-center text-[#C5A059]">
             <Music2 size={16} />
          </div>
          <div>
             <p className="text-[11px] font-bold text-white uppercase">{title}</p>
             <p className="text-[8px] text-gray-600 uppercase tracking-tighter">{date}</p>
          </div>
       </div>
       <span className={`text-[8px] font-black uppercase px-3 py-1 rounded-full ${status === 'Live' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
          {status}
       </span>
    </div>
  )
}
