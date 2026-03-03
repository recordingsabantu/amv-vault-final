'use client'
import { useRouter, usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Disc, 
  BarChart3, 
  Wallet, 
  User, 
  ShieldCheck, 
  PlusCircle 
} from 'lucide-react'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  // ALL CORE TABS DEFINED HERE
  const menu = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'My Releases', icon: Disc, path: '/releases' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
    { name: 'Payouts & Wallet', icon: Wallet, path: '/payouts' },
    { name: 'Verification', icon: ShieldCheck, path: '/verification' },
    { name: 'Artist Profile', icon: User, path: '/profile' },
  ]

  return (
    <aside className="w-72 h-screen bg-[#050505] border-r border-white/10 flex flex-col p-6 sticky top-0 z-50">
      
      {/* BRANDING SECTION */}
      <div className="mb-12 px-2 group cursor-pointer" onClick={() => router.push('/')}>
        <h1 className="text-2xl font-black italic text-white tracking-tighter uppercase">
          AMV <span className="text-[#C5A059]">VAULT</span>
        </h1>
        <div className="h-[2px] w-8 bg-[#C5A059] mt-1 group-hover:w-16 transition-all duration-500"></div>
        <p className="text-[8px] uppercase tracking-[0.4em] text-gray-600 mt-2 font-bold">Executive Portal</p>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 space-y-2">
        {menu.map((item) => {
          const isActive = pathname === item.path
          return (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                isActive 
                ? 'bg-[#C5A059] text-black font-extrabold shadow-[0_10px_20px_rgba(197,160,89,0.15)]' 
                : 'text-gray-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 1.5} 
                className={isActive ? 'text-black' : 'group-hover:text-[#C5A059]'}
              />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                {item.name}
              </span>
            </button>
          )
        })}
      </nav>

      {/* FOOTER ACTION: NEW RELEASE */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <button 
          onClick={() => router.push('/releases')}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:bg-[#C5A059] hover:scale-[1.02] transition-all active:scale-95 shadow-xl"
        >
          <PlusCircle size={18} />
          Submit Music
        </button>
      </div>
    </aside>
  )
}
