'use client'
import Link from 'next/link'
import { LayoutGrid, Music, Wallet, LogOut } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-72 bg-black border-r border-white/5 flex-col h-screen sticky top-0 p-10 justify-between">
      <div className="space-y-12">
        <div>
          <div className="w-12 h-12 bg-[#C5A059] rounded-2xl flex items-center justify-center text-black font-black italic text-xl shadow-[0_0_30px_rgba(197,160,89,0.2)]">A</div>
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-white mt-4">Abantu</h2>
          <p className="text-[9px] font-bold text-[#C5A059] uppercase tracking-widest">Management</p>
        </div>
        <nav className="space-y-6">
          <SidebarLink icon={LayoutGrid} label="Vault Core" href="/" active />
          <SidebarLink icon={Music} label="Submit" href="#" />
          <SidebarLink icon={Wallet} label="Finance" href="#" />
        </nav>
      </div>
      <button className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors">
        <LogOut size={16} />
        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Terminate</span>
      </button>
    </aside>
  )
}

function SidebarLink({ icon: Icon, label, href, active }: any) {
  return (
    <Link href={href} className={`flex items-center gap-4 transition-colors ${active ? 'text-[#C5A059]' : 'text-gray-500 hover:text-white'}`}>
      <Icon size={18} />
      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
    </Link>
  )
}
