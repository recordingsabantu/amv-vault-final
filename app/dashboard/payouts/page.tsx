'use client'
import { useRouter } from 'next/navigation'
import Sidebar from '../../../components/Sidebar'
import { DollarSign, TrendingUp, History, Download, CreditCard } from 'lucide-react'

export default function PayoutsPage() {
  const router = useRouter()

  return (
    <div 
      className="min-h-screen text-white flex bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url('/bg-amv.jpg')" }}
    >
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-[#C5A059] italic uppercase">Royalties & Payouts</h1>
          <p className="text-gray-400 mt-2">Track your global earnings from Spotify, Apple Music, and more.</p>
        </header>

        {/* BALANCE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-black/60 backdrop-blur-2xl p-10 rounded-[40px] border-2 border-[#C5A059]/40 shadow-2xl">
            <p className="text-[#C5A059] text-xs font-black tracking-[0.2em] uppercase mb-4">Available for Withdrawal</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black italic">R0.00</span>
              <span className="text-gray-500 font-bold uppercase text-xs">ZAR</span>
            </div>
            <button className="mt-8 w-full bg-[#C5A059] text-black font-extrabold py-4 rounded-2xl opacity-50 cursor-not-allowed">
              REQUEST PAYOUT
            </button>
            <p className="text-[10px] text-gray-500 mt-4 text-center italic">Minimum withdrawal: R500.00</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 shadow-xl">
            <p className="text-gray-400 text-xs font-black tracking-[0.2em] uppercase mb-4">Total Life-time Earnings</p>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black italic text-white/40">R0.00</span>
            </div>
            <div className="mt-8 flex items-center gap-2 text-green-500 text-sm font-bold">
              <TrendingUp size={16}/> 0% increase this month
            </div>
          </div>
        </div>

        {/* TRANSACTIONS TABLE */}
        <div className="bg-black/40 backdrop-blur-md rounded-[40px] border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <History className="text-[#C5A059]" size={20}/>
              <h3 className="font-black text-lg tracking-tight uppercase">Payment History</h3>
            </div>
            <button className="text-[10px] text-[#C5A059] font-black border border-[#C5A059]/30 px-4 py-2 rounded-full hover:bg-[#C5A059] hover:text-black transition-all">
              DOWNLOAD CSV
            </button>
          </div>
          
          <div className="h-64 flex flex-col items-center justify-center text-center p-12">
            <CreditCard size={48} className="text-white/10 mb-4"/>
            <p className="text-gray-500 text-sm font-medium">No payout history found for this account.</p>
            <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-widest leading-relaxed">
              Earnings are updated every 45 days <br/> following the end of the month.
            </p>
          </div>
        </div>

        {/* DDEX FOOTER */}
        <div className="mt-12 text-center opacity-30">
          <p className="text-[9px] font-black tracking-[0.4em] text-gray-400 uppercase">
            Official DDEX Reporting Hub • License PA-DPIDA-2026022701-M
          </p>
        </div>
      </main>
    </div>
  )
}
