'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/bg-amv.jpg')" }}>
      <div className="max-w-4xl w-full bg-black/60 backdrop-blur-2xl border border-white/10 p-12 rounded-[40px] shadow-2xl text-center">
        <h2 className="text-[#C5A059] font-black tracking-widest text-xs mb-4 uppercase">DDEX Licensed: PA-DPIDA-2026022701-M</h2>
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">AMV VAULT</h1>
        <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <p className="text-[#C5A059] font-bold text-xs uppercase mb-2">Basic</p>
            <p className="text-4xl font-black mb-6">R420<span className="text-sm opacity-50">/yr</span></p>
            <button onClick={() => router.push('/login')} className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-[#C5A059] transition-all">GET STARTED</button>
          </div>
          <div className="bg-[#C5A059] p-8 rounded-3xl text-black">
            <p className="font-bold text-xs uppercase mb-2">Pro</p>
            <p className="text-4xl font-black mb-6">R859<span className="text-sm opacity-60">/yr</span></p>
            <button onClick={() => router.push('/login')} className="w-full bg-black text-white font-black py-4 rounded-xl">GO PRO</button>
          </div>
        </div>
      </div>
    </div>
  )
}
