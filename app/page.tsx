'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-x-hidden">
      
      {/* THE BACKGROUND FIX: Forced Z-index and Fixed Positioning */}
      <div 
        className="fixed inset-0 w-full h-full z-0 opacity-80"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('/bg-amv.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* CONTENT LAYER: Raised Z-index to stay above background */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-12 flex flex-col items-center">
        
        {/* PREMIUM VAULT HEADER */}
        <div className="bg-black/60 backdrop-blur-3xl border border-white/10 p-10 md:p-20 rounded-[60px] shadow-2xl text-center w-full max-w-4xl">
          
          <div className="inline-block bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] mb-8 uppercase">
            Licensed DDEX: PA-DPIDA-2026022701-M
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-black italic tracking-tighter mb-6 bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-none">
            AMV VAULT
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-14 font-medium tracking-tight uppercase max-w-2xl mx-auto">
            The Executive Distribution Hub for Durban’s Finest.
          </p>

          {/* PRICING CARDS */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* BASIC TIER */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all cursor-pointer group shadow-xl">
              <h3 className="text-[#C5A059] font-black uppercase text-xs tracking-widest mb-2">Artist Basic</h3>
              <div className="text-5xl font-black mb-8">R420<span className="text-xs text-gray-500 ml-1 italic font-normal uppercase">/ Annual Vault Fee</span></div>
              <button 
                onClick={() => router.push('/login')}
                className="w-full bg-white text-black font-black py-5 rounded-2xl group-hover:bg-[#C5A059] transition-all uppercase tracking-widest text-sm shadow-lg shadow-white/5"
              >
                Start Uploading
              </button>
            </div>

            {/* PRO TIER */}
            <div className="bg-[#C5A059] p-10 rounded-[40px] text-black hover:scale-[1.02] transition-transform cursor-pointer shadow-2xl shadow-[#C5A059]/30">
              <h3 className="font-black uppercase text-xs tracking-widest mb-2 opacity-70">Artist Pro</h3>
              <div className="text-5xl font-black mb-8">R859<span className="text-xs opacity-60 ml-1 italic font-normal uppercase">/ Full Label Suite</span></div>
              <button 
                onClick={() => router.push('/login')}
                className="w-full bg-black text-white font-black py-5 rounded-2xl shadow-xl uppercase tracking-widest text-sm"
              >
                Go Executive
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-gray-500 text-[10px] font-black tracking-[0.5em] uppercase opacity-40">
          Abantu Musik Vault • Durban, RSA • &copy; 2026
        </footer>
      </div>
    </div>
  )
}
