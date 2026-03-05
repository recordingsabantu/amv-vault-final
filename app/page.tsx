'use client'
import Sidebar from '@/components/Sidebar';
import UploadForm from '@/components/UploadForm';
import ClaimArtistForm from '@/components/ClaimArtistForm';
import { ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';

export default function VaultDashboard() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white selection:bg-[#C5A059]/30">
      <Sidebar />
      
      <main className="flex-1 relative p-6 lg:p-16 overflow-y-auto">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.7em] italic">Distribution Node: ZA-AMV</h2>
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">AMV <span className="text-[#C5A059]">VAULT</span></h1>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest opacity-70">Cloud Sync Active</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[40px] backdrop-blur-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-[#C5A059]" size={18} />
                  <h3 className="text-[10px] font-black uppercase tracking-widest">Artist Claims</h3>
                </div>
                <ClaimArtistForm />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Stat icon={Globe} label="Region" value="ZA Triangle" />
                <Stat icon={Zap} label="Processing" value="24-Bit Wav" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 p-8 rounded-[40px]">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] mb-6 text-center">Asset Ingestion</h3>
                <UploadForm />
                <button className="w-full mt-6 bg-white text-black font-black py-6 rounded-3xl uppercase text-[10px] tracking-[0.4em] hover:bg-[#C5A059] transition-all">
                  Execute Push <ArrowUpRight className="inline ml-1" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function Stat({ icon: Icon, label, value }: any) {
  return (
    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
      <div className="flex items-center gap-2 text-gray-500 mb-1">
        <Icon size={12} />
        <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-sm font-bold uppercase">{value}</div>
    </div>
  )
}
