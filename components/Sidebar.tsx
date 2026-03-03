'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutGrid, Radio, Database, CreditCard, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  
  const menu = [
    { name: 'Dashboard', icon: LayoutGrid, path: '/profile' },
    { name: 'Distribution', icon: Radio, path: '/submit' },
    { name: 'Vault Assets', icon: Database, path: '/catalog' },
    { name: 'Finance', icon: CreditCard, path: '/wallet' },
  ]

  return (
    <aside className="w-24 md:w-80 bg-black/40 backdrop-blur-3xl border-r border-white/5 flex flex-col h-screen sticky top-0 z-50">
      <div className="p-10 flex items-center gap-4">
        <div className="w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center text-black font-black italic">A</div>
        <div className="hidden md:block">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Abantu</p>
          <p className="text-[8px] font-bold text-[#C5A059] uppercase tracking-widest">Management</p>
        </div>
      </div>

      <nav className="flex-1 px-6 space-y-4">
        {menu.map((item) => {
          const active = pathname === item.path
          return (
            <Link key={item.path} href={item.path} className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${active ? 'bg-white text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
              <item.icon size={20} />
              <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em]">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-10 border-t border-white/5">
        <button onClick={() => window.location.href = '/'} className="flex items-center gap-4 text-gray-600 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-left">Terminate Session</span>
        </button>
      </div>
    </aside>
  )
}
