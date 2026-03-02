'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      
      {/* FIXED BACKGROUND LAYER 
        We use 'fixed' and 'inset-0' to ensure it fills the monitor.
        We use 'z-0' to keep it behind the text.
      */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('/bg-amv.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-4">
        
        <div className="max-w-4xl w-[95%] bg-black/40 backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-[40px] shadow-2xl text-center">
          
          <div className="inline-block bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 px-4 py-1 rounded-full text-[10px] font-black tracking-widest mb-6 uppercase">
            Licensed DDEX: PA-DPIDA-2026022701-M
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black italic tracking-tighter mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-none">
            AMV VAULT
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
            {/* BASIC TIER */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl group transition-all">
              <h3 className="text-[#C5A059] font-black uppercase text-[10px] mb-2 tracking-widest">Artist Basic</h3>
              <div className="text-4xl font-black mb-6 text-white">R420<span className="text-xs text-gray-500 ml-1">/yr</span></div>
              <button 
                onClick={() => router.push('/login')} 
                className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-[#C5A059] transition-all"
              >
                GET STARTED
              </button>
            </div>

            {/* PRO TIER */}
            <div className="bg-[#C5A059] p-8 rounded-3xl text-black shadow-xl shadow-[#C5A059]/20">
              <h3 className="font-black uppercase text-[10px] mb-2 opacity-70 tracking-widest">Artist Pro</h3>
              <div className="text-4xl font-black mb-6">R859<span className="text-xs opacity-50 ml-1">/yr</span></div>
              <button 
                onClick={() => router.push('/login')} 
                className="w-full bg-black text-white font-black py-4 rounded-xl"
              >
                GO PRO
              </button>
            </div>
          </div>
        </div>

        <footer className="absolute bottom-8 text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] opacity-50">
          Abantu Musik Vault • Durban, South Africa
        </footer>
      </div>
    </div>
  )
}
