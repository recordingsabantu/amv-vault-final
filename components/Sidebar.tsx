'use client'
import { useRouter, usePathname } from 'next/navigation'
import { LayoutDashboard, Disc, BarChart3, Wallet, User, ShieldCheck, Plus } from 'lucide-react'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const menu = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'My Releases', icon: Disc, path: '/releases' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Payouts', icon: Wallet, path: '/payouts' },
    { name: 'Profile', icon: User, path: '/profile' },
  ]

  return (
    <aside className="w-72 h-screen bg-[#050505] border-r border-white/10 flex flex-col p-6 sticky top-0 z-50">
      {/* BRANDING */}
      <div className="mb-12 px-2">
        <h1 className="text-2xl font-black italic text-white tracking-tighter uppercase">
          AMV <span className="text-[#C5A059]">VAULT</span>
        </h1>
        <div className="h-[1px] w-12 bg-[#C5A059] mt-1"></div>
      </div>

      {/* NAV LINKS */}
      <nav className="flex-1 space-y-2">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
              pathname === item.path 
              ? 'bg-[#C5A059] text-black font-black shadow-[0_0_20px_rgba(197,160,89,0.2)]' 
              : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon size={20} strokeWidth={pathname === item.path ? 2.5 : 1.5} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* ACTION BUTTON */}
      <button 
        onClick={() => router.push('/releases')}
        className="mt-auto flex items-center justify-center gap-2 bg-white text-black py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:bg-[#C5A059] transition-colors"
      >
        <Plus size={16} /> New Release
      </button>
    </aside>
  )
}
