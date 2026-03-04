'use client'
import Sidebar from '@/components/Sidebar'
import { CreditCard, ArrowUpRight, ArrowDownLeft, DollarSign } from 'lucide-react'

export default function WalletPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto text-left">
          
          <header className="mb-16">
            <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-3 italic">Financial Oversight</h2>
            <h1 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none">
              Royalties <span className="text-[#C5A059]">& Bank</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* MAIN BALANCE */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-[#C5A059] p-12 rounded-[50px] text-black flex flex-col justify-between aspect-[2/1] md:aspect-auto md:h-80 shadow-2xl shadow-[#C5A059]/20">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-60">Available Balance</p>
                  <h3 className="text-7xl font-[1000] italic uppercase tracking-tighter mt-2">$12,450.00</h3>
                </div>
                <div className="flex justify-between items-end">
                   <div className="font-mono text-sm font-bold tracking-widest opacity-80">**** **** **** 2026</div>
                   <CreditCard size={40} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* SIDE ACTIONS */}
            <div className="lg:col-span-4 space-y-6">
              <button className="w-full h-full bg-white/5 border border-white/10 rounded-[50px] flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all p-12">
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-3xl flex items-center justify-center text-[#C5A059]">
                  <ArrowUpRight size={24} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Withdraw Funds</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
