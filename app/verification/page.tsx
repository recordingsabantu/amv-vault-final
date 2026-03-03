'use client'
import Sidebar from '../../components/Sidebar'
import { ShieldCheck, Fingerprint, FileText, CheckCircle } from 'lucide-react'

export default function Verification() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12 bg-[url('/bg-pattern.png')] bg-fixed bg-cover">
        <div className="max-w-4xl">
          <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-2">Artist Portal</h2>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-10">Identity <span className="text-[#C5A059]">Verification</span></h1>

          <div className="grid gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] flex items-center justify-between hover:border-[#C5A059]/50 transition-all">
              <div className="flex items-center gap-6">
                <div className="bg-[#C5A059]/10 p-4 rounded-2xl text-[#C5A059]">
                  <Fingerprint size={32} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm">National ID / Passport</h3>
                  <p className="text-gray-500 text-xs">Required for royalty payments</p>
                </div>
              </div>
              <button className="bg-white text-black px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest">Upload</button>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] flex items-center justify-between opacity-50">
              <div className="flex items-center gap-6">
                <div className="bg-gray-500/10 p-4 rounded-2xl text-gray-500">
                  <FileText size={32} />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm">Proof of Residence</h3>
                  <p className="text-gray-500 text-xs">Bank confirmation or utility bill</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase text-gray-600">Locked</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
