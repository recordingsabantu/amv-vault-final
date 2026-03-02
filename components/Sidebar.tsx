'use client'
import Link from 'next/link'
import { LayoutDashboard, Music2, BarChart3, Wallet, UserCircle, ShieldCheck, CreditCard, PlusCircle } from 'lucide-react'

const menu = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'My Releases', icon: Music2, path: '/releases' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  { name: 'Payouts', icon: Wallet, path: '/payouts' },
  { name: 'Artist Profile', icon: UserCircle, path: '/profile' },
  { name: 'Verification', icon: ShieldCheck, path: '/verification' },
  { name: 'Pricing Plans', icon: CreditCard, path: '/pricing' },
]

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-black border-r border-white/5 p-8 flex flex-col sticky top-0 z-50">
      <div className="mb-12 font-black italic text-3xl tracking-tighter text-[#C5A059]">AMV <span className="text-white">VAULT</span></div>
      
      <nav className="flex-1 space-y-2">
        {menu.map((item) => (
          <div key={item.name} className="flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-500 hover:bg-white/5 hover:text-[#C5A059] transition-all cursor-pointer">
            <item.icon size={20} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{item.name}</span>
          </div>
        ))}
      </nav>

      <button className="mt-auto w-full bg-[#C5A059] text-black font-black py-5 rounded-3xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-[#C5A059]/10">
        <PlusCircle size={20} />
        <span className="text-[10px] uppercase tracking-widest">New Release</span>
      </button>
    </aside>
  )
}
