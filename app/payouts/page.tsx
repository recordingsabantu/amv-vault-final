'use client'
import Sidebar from '../components/Sidebar'
import { Wallet, ArrowUpRight, Download, History, Banknote } from 'lucide-react'

export default function PayoutsPage() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-10 relative">
        {/* DESIGN ACCENT */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C5A059]/5 rounded-full blur-[100px] z-0" />

        <header className="mb-12 relative z-10">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">Artist <span className="text-[#C5A059]">Wallet</span></h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2">Revenue & Royalty Management</p>
        </header>

        {/* FINANCIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
          {/* TOTAL REVENUE */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-md">
            <History className="text-gray-500 mb-4" size={20} />
            <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Lifetime Earnings</p>
            <h2 className="text-4xl font-black mt-2">R12,450.00</h2>
          </div>

          {/* CURRENT BALANCE - GOLD THEME */}
          <div className="bg-[#C5A059] p-8 rounded-[40px] text-black shadow-[0_20px_40px_rgba(197,160,89,0.2)]">
            <Wallet className="text-black/60 mb-4" size={20} />
            <p className="text-black/60 text-[9px] font-black uppercase tracking-widest">Available for Payout</p>
            <h2 className="text-4xl font-black mt-2">R4,250.00</h2>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Withdraw Funds
            </button>
          </div>

          {/* NEXT PAYOUT */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] flex flex-col justify-center items-center">
            <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Next Payout Cycle</p>
            <h2 className="text-xl font-black mt-2 text-white/40">25 MARCH 2026</h2>
          </div>
        </div>

        {/* TRANSACTION HISTORY */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em]">Transaction History</h3>
            <button className="text-[10px] font-bold text-[#C5A059] flex items-center gap-2 uppercase tracking-widest">
              <Download size={14} /> Export CSV
            </button>
          </div>

          <div className="space-y-4">
            <TransactionRow date="Feb 28, 2026" type="Spotify Royalty" amount="+ R1,240.00" status="Processed" />
            <TransactionRow date="Feb 15, 2026" type="Withdrawal (EFT)" amount="- R2,500.00" status="Completed" />
            <TransactionRow date="Feb 02, 2026" type="Apple Music Royalty" amount="+ R890.50" status="Processed" />
            <TransactionRow date="Jan 25, 2026" type="YouTube Music" amount="+ R420.00" status="Processed" />
          </div>
        </div>
      </main>
    </div>
  )
}

function TransactionRow({ date, type, amount, status }: any) {
  const isWithdrawal = amount.startsWith('-')
  return (
    <div className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 hover:border-[#C5A059]/20 transition-all">
      <div className="flex items-center gap-5">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isWithdrawal ? 'bg-red-500/10 text-red-500' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
          {isWithdrawal ? <ArrowUpRight size={20} /> : <Banknote size={20} />}
        </div>
        <div>
          <p className="font-bold text-sm">{type}</p>
          <p className="text-[10px] text-gray-500 font-mono uppercase">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-black ${isWithdrawal ? 'text-white' : 'text-[#C5A059]'}`}>{amount}</p>
        <p className="text-[8px] font-black uppercase tracking-tighter text-gray-600">{status}</p>
      </div>
    </div>
  )
}
