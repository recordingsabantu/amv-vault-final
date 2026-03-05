'use client'
import { Lock, Cpu, Globe } from 'lucide-react'

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full text-center space-y-12">
        
        {/* LOGO AREA */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 border-2 border-[#C5A059] rounded-full flex items-center justify-center animate-pulse">
              <Lock className="text-[#C5A059]" size={40} />
            </div>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
            AMV <span className="text-[#C5A059]">VAULT</span>
          </h1>
          <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.8em] italic">
            Digital Asset Infrastructure
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="bg-white/5 border border-white/10 p-12 rounded-[40px] backdrop-blur-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatusItem icon={Cpu} label="System State" value="MIGRATING" color="text-amber-500" />
            <StatusItem icon={Globe} label="Region" value="ZA-TRIANGLE" color="text-[#C5A059]" />
            <StatusItem icon={Lock} label="Security" value="ENCRYPTED" color="text-green-500" />
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/5 text-left">
            <h2 className="text-white text-xs font-black uppercase tracking-widest mb-4">Migration Log:</h2>
            <p className="text-gray-500 text-[11px] leading-relaxed uppercase font-bold tracking-wider">
              We are currently migrating our distribution core from Netlify to Vercel Edge. 
              The <span className="text-white">Durban, Johannesburg, and Cape Town</span> ingestion modules 
              are temporarily offline for white-label API integration.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-[9px] uppercase font-black tracking-[0.4em]">
          Authorized Access Only // © 2026 AMV Vault Strategy
        </p>
      </div>
    </div>
  )
}

function StatusItem({ icon: Icon, label, value, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2 text-gray-500">
        <Icon size={14} />
        <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <div className={`${color} text-xl font-black tracking-tighter uppercase`}>{value}</div>
    </div>
  )
}
