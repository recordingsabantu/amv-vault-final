'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutGrid, Radio, Database, CreditCard, Shield, LogOut, ChevronRight } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  
  const menu = [
    { name: 'Dashboard', icon: LayoutGrid, path: '/profile' },
    { name: 'Push Release', icon: Radio, path: '/submit' },
    { name: 'Vault Catalog', icon: Database, path: '/catalog' },
    { name: 'Finance', icon: CreditCard, path: '/wallet' },
    { name: 'Admin', icon: Shield, path: '/admin' },
  ]

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 bg-black border-r border-white/5 flex-col h-screen sticky top-0 z-50">
        <div className="p-10 flex items-center gap-4">
          {/* Your 'A' Logo Branding */}
          <div className="w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center text-black font-black italic text-lg shadow-[0_0_20px_rgba(197,160,89,0.3)]">A</div>
          <div className="text-left">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white">AMV VAULT</p>
            <p className="text-[8px] font-bold text-[#C5A059] uppercase tracking-widest mt-0.5">Abantu Management</p>
          </div>
        </div>

        <nav className="flex-1 px-6 space-y-2 mt-4">
          {menu.map((item) => {
            const active = pathname === item.path
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-500 group ${
                  active ? 'bg-white/5 text-[#C5A059]' : 'text-gray-500 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon size={18} className={active ? 'text-[#C5A059]' : 'group-hover:text-white'} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                </div>
                {active && <ChevronRight size={14} />}
              </Link>
            )
          })}
        </nav>

        {/* User Footer Section */}
        <div className="p-8 border-t border-white/5">
          <div className="flex items-center justify-between bg-white/[0.03] p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold">AMV</div>
              <div>
                <p className="text-[10px] font-black text-white uppercase">Sakhile Mdunge</p>
                <p className="text-[8px] text-[#C5A059] font-bold uppercase">Executive</p>
              </div>
            </div>
            <LogOut size={16} className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-2xl border-t border-white/10 flex justify-around p-4 z-50">
        {menu.slice(0, 4).map((item) => (
          <Link key={item.path} href={item.path} className={pathname === item.path ? 'text-[#C5A059]' : 'text-gray-500'}>
            <item.icon size={20} />
          </Link>
        ))}
      </nav>
    </>
  )
}
