'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      
      {/* BACKGROUND LAYER - FIXED TO FULL SCREEN */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url('/bg-amv.jpg')" 
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-4">
        
        <div className="max-w-4xl w-full bg-black/40 backdrop-blur-2xl border border-white/10 p-8 md:p-16 rounded-[40px] shadow-2xl text-center">
          
          <div className="inline-block bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 px-4 py-1 rounded-full text-[10px] font-black tracking-widest mb-6 uppercase">
            Licensed DDEX: PA-DPIDA-2026022701-M
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4 bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent leading-none">
            AMV VAULT
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-medium tracking-tight max-w-xl mx-auto leading-relaxed">
            Global distribution. 100% royalties. Durban Sound.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* BASIC */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group shadow-xl">
              <h3 className="text-[#C5A059] font-black uppercase text-xs tracking-widest mb-2">Basic Tier</h3>
              <div className="text-4xl font-black mb-6">R420<span className="text-xs text-gray-500 ml-1">/yr</span></div>
              <button 
                onClick={() => router.push('/login')}
                className="w-full bg-white text-black font-black py-4 rounded-xl group-hover:bg-[#C5A059] transition-colors"
              >
                START UPLOADING
              </button>
            </div>

            {/* PRO */}
            <div className="bg-[#C5A059] p-8 rounded-3xl text-black hover:scale-[1.02] transition-transform cursor-pointer shadow-2xl shadow-[#C5A059]/30">
              <h3 className="font-black uppercase text-xs tracking-widest mb-2 opacity-70">Pro Tier</h3>
              <div className="text-4xl font-black mb-6">R859<span className="text-xs opacity-50 ml-1">/yr</span></div>
              <button 
                onClick={() => router.push('/login')}
                className="w-full bg-black text-white font-black py-4 rounded-xl shadow-lg"
              >
                GO PRO NOW
              </button>
            </div>
          </div>
        </div>

        <footer className="absolute bottom-8 text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">
          Abantu Musik Vault &copy; 2026 • Durban, South Africa
        </footer>
      </div>
    </div>
  )
}
