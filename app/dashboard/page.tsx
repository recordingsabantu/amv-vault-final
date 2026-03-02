'use client'
import { useRouter } from 'next/navigation'
import Sidebar from '../../components/Sidebar'
import { Upload, Music, BarChart3, DollarSign, ShieldCheck } from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()

  const goToUpload = () => {
    router.push('/dashboard/upload')
  }

  return (
    <div 
      className="min-h-screen text-white flex bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        // This uses the image you provided. Make sure it is saved as 'bg-amv.jpg' in your /public folder!
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url('/bg-amv.jpg')"
      }}
    >
      
      {/* 1. SIDEBAR COMPONENT */}
      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto backdrop-blur-[2px]">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-r from-[#C5A059] via-white to-[#C5A059] bg-clip-text text-transparent italic">
              AMV VAULT
            </h1>
            <p className="text-gray-400 font-medium mt-2 tracking-wide uppercase text-xs">Global Music Distribution Portal</p>
          </div>
          
          <button 
            onClick={goToUpload}
            className="bg-[#C5A059] text-black font-extrabold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-[#C5A059]/40 border-2 border-transparent hover:border-[#C5A059]"
          >
            <Upload size={22}/> NEW RELEASE
          </button>
        </header>

        {/* STATS CARDS - Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-[#C5A059]/20 shadow-2xl hover:border-[#C5A059]/50 transition-colors">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Total Streams</p>
              <BarChart3 size={20} className="text-[#C5A059]"/>
            </div>
            <p className="text-5xl font-black italic">0</p>
          </div>

          <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-[#C5A059]/20 shadow-2xl hover:border-[#C5A059]/50 transition-colors">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Artist Revenue</p>
              <DollarSign size={20} className="text-[#C5A059]"/>
            </div>
            <p className="text-5xl font-black text-[#C5A059] italic">R0.00</p>
          </div>

          <div className="bg-[#C5A059]/10 backdrop-blur-xl p-8 rounded-3xl border-2 border-[#C5A059]/40 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#C5A059] text-xs font-bold tracking-widest uppercase">DDEX License</p>
              <ShieldCheck size={20} className="text-[#C5A059]"/>
            </div>
            <p className="text-sm font-black text-white mb-2 tracking-tighter">PA-DPIDA-2026022701-M</p>
            <div className="inline-block bg-[#C5A059] text-black text-[10px] px-3 py-1 rounded-full font-black animate-pulse">
              STATUS: ACTIVE
            </div>
          </div>
        </div>

        {/* RELEASES SECTION */}
        <div className="bg-black/40 backdrop-blur-md rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h3 className="font-black text-lg tracking-tight">YOUR RELEASES</h3>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">0 Tracks Delivered</span>
          </div>
          
          <div className="h-96 flex flex-col items-center justify-center text-center p-12">
            <div className="relative mb-8">
               <Music size={80} className="text-white/10"/>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#C5A059]/20 rounded-full animate-ping"></div>
               </div>
            </div>
            <h4 className="text-2xl font-bold mb-3 text-white">The Vault is Silent</h4>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Your distribution journey starts here. Upload your high-quality WAV files and let the world hear your sound.
            </p>
            <button 
              onClick={goToUpload}
              className="text-[#C5A059] text-sm font-black hover:text-white transition-colors tracking-widest uppercase border-b border-[#C5A059] pb-1"
            >
              Upload Music Now &rarr;
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
