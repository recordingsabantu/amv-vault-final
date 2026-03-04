'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutGrid, Radio, Database, CreditCard, Shield, LogOut } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  const menu = [
    { name: 'Dashboard', icon: LayoutGrid, path: '/profile' },
    { name: 'Push', icon: Radio, path: '/submit' },
    { name: 'Vault', icon: Database, path: '/catalog' },
    { name: 'Finance', icon: CreditCard, path: '/wallet' },
    { name: 'Admin', icon: Shield, path: '/admin' },
  ]

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-80 bg-black border-r border-white/5 flex-col h-screen sticky top-0 z-50">
        <div className="p-10 flex items-center gap-4">
          <div className="w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center text-black font-black italic">A</div>
          <div className="text-left">
            <p className="text-[11px] font-black uppercase tracking-[0.3em]">Abantu</p>
            <p className="text-[8px] font-bold text-[#C5A059] uppercase tracking-widest mt-1">Management</p>
          </div>
        </div>
        <nav className="flex-1 px-6 space-y-2">
          {menu.map((item) => {
            const active = pathname === item.path
            return (
              <Link key={item.path} href={item.path} className={`flex items-center gap-4 p-5 rounded-2xl transition-all group ${active ? 'bg-white text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                <item.icon size={20} className={active ? 'text-black' : 'group-hover:text-[#C5A059]'} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-around p-4 z-50">
        {menu.map((item) => {
          const active = pathname === item.path
          return (
            <Link key={item.path} href={item.path} className={`p-3 rounded-xl ${active ? 'text-[#C5A059]' : 'text-gray-500'}`}>
              <item.icon size={20} />
            </Link>
          )
        })}
      </nav>
    </>
  )
}
