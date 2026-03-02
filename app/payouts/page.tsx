'use client'
import Sidebar from '../../components/Sidebar'
import { Wallet, TrendingUp, Download, ArrowUpRight } from 'lucide-react'

export default function PayoutsPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-black italic text-[#C5A059] tracking-tighter uppercase">Artist Wallet</h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2">Global Royalties & Payouts</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* TOTAL EARNED */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[35px] backdrop-blur-md">
            <TrendingUp className="text-[#C5A059] mb-4" size={24} />
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Total Royalties</p>
            <h2 className="text-3xl font-black mt-1">R4,250.00</h2>
          </div>

          {/* AVAILABLE TO WITHDRAW */}
          <div className="bg-[#C5A059] p-8 rounded-[35px] text-black shadow-xl shadow-[#C5A059]/10">
            <Wallet className="mb-4" size={24} />
            <p className="text-black/60 text-[10px] font-black uppercase tracking-widest">Available Balance</p>
            <h2 className="text-3xl font-black mt-1">R1,820.50</h2>
          </div>

          {/* NEXT PAYOUT DATE */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[35px] flex flex-col justify-center">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest text-center">Next Payout Cycle</p>
            <h2 className="text-xl font-black mt-1 text-center text-white/40">25 MARCH 2026</h2>
          </div>
        </div>

        {/* REVENUE BREAKDOWN */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black uppercase text-xs tracking-[0.2em]">Platform Breakdown</h3>
            <button className="text-[10px] font-bold text-[#C5A059] flex items-center gap-1 uppercase">
              <Download size={12} /> Statement
            </button>
          </div>
          
          <div className="space-y-4">
            <RevenueRow platform="Spotify" amount="R2,100" percentage={50} />
            <RevenueRow platform="Apple Music" amount="R1,200" percentage={30} />
            <RevenueRow platform="YouTube Music" amount="R650" percentage={15} />
            <RevenueRow platform="TikTok/Other" amount="R300" percentage={5} />
          </div>
        </div>
      </main>
    </div>
  )
}

function RevenueRow({ platform, amount, percentage }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
      <div className="flex items-center gap-4">
        <div className="w-1 bg-[#C5A059] h-8 rounded-full" />
        <span className="font-bold text-sm">{platform}</span>
      </div>
      <div className="text-right">
        <div className="font-black">{amount}</div>
        <div className="text-[9px] text-gray-500 uppercase">{percentage}% of total</div>
      </div>
    </div>
  )
}
