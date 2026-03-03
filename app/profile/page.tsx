'use client'
import Sidebar from '../../components/Sidebar'
import { User, Wallet, ShieldCheck, Music2, Instagram, Globe, ArrowUpRight } from 'lucide-react'

export default function ArtistProfile() {
  return (
    <div className="flex min-h-screen bg-black text-white relative overflow-hidden">
      <Sidebar />
      
      {/* THE "HALF-SCREEN" BACKGROUND - GLUED */}
      <div 
        className="fixed top-0 right-0 w-full md:w-1/2 h-full opacity-30 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-amv.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
        }}
      />

      <main className="flex-1 p-6 md:p-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* TOP HEADER */}
          <header className="mb-10 flex items-center gap-6">
            <div className="w-20 h-20 bg-black border border-[#C5A059]/40 rounded-2xl flex items-center justify-center text-[#C5A059] shadow-lg shadow-[#C5A059]/5">
               <User size={32} />
            </div>
            <div>
              <h2 className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em] mb-1 italic">Authorized Artist</h2>
              <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">Management <span className="text-[#C5A059]">Center</span></h1>
            </div>
          </header>

          {/* VERTICAL GRID: Profile (Left) & Wallet (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            
            {/* ARTIST IDENTITY (8 Columns) */}
            <div className="lg:col-span-8 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[40px] space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Identity Metadata</h3>
                 <ShieldCheck className="text-[#C5A059]" size={16} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VaultInput label="Stage Name" icon={Music2} placeholder="Artist Name" />
                 <VaultInput label="Instagram" icon={Instagram} placeholder="@handle" />
                 <VaultInput label="Spotify URI" icon={Globe} placeholder="spotify:artist:..." />
                 <div className="flex items-end">
                    <button className="w-full bg-[#C5A059] text-black font-black py-4 rounded-2xl uppercase text-[9px] tracking-widest hover:bg-white transition-all">
                       Save Profile
                    </button>
                 </div>
              </div>
            </div>

            {/* ARTIST WALLET (4 Columns) - Tidy & Professional */}
            <div className="lg:col-span-4 bg-[#C5A059] p-8 rounded-[40px] text-black flex flex-col justify-between shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                     <Wallet size={16} />
                     <h3 className="text-[9px] font-black uppercase tracking-widest">Artist Wallet</h3>
                  </div>
                  <p className="text-[10px] uppercase font-bold opacity-60">Balance Due</p>
                  <h4 className="text-5xl font-black italic tracking-tighter mb-8">R 0.00</h4>
                  
                  <button className="w-full bg-black text-white font-black py-4 rounded-2xl uppercase text-[9px] tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-80 transition-all">
                     Payout <ArrowUpRight size={14} />
                  </button>
               </div>
               {/* Decorative background icon */}
               <Wallet className="absolute -bottom-4 -right-4 opacity-10 text-black rotate-12" size={120} />
            </div>
          </div>

          {/* CATALOG LIST - VERTICAL STACK */}
          <div className="bg-black/60 backdrop-blur-md border border-white/5 p-8 rounded-[40px]">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">Recent Activity</h3>
             <div className="space-y-4">
                <CatalogItem title="Track Name" status="Pending" date="March 2026" />
                <CatalogItem title="Label Anthem" status="Live" date="February 2026" />
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
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
       <div className="flex items-center gap-4 text-left">
          <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center text-[#C5A059]">
             <Music2 size={16} />
          </div>
          <div>
             <p className="text-[11px] font-bold text-white uppercase">{title}</p>
             <p className="text-[8px] text-gray-600 uppercase tracking-tighter">{date}</p>
          </div>
       </div>
       <span className="text-[8px] font-black uppercase px-3 py-1 rounded-full bg-white/5 text-gray-400">
          {status}
       </span>
    </div>
  )
}
