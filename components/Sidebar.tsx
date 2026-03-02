'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Music2, 
  BarChart3, 
  CircleDollarSign, 
  UserCircle, 
  ShieldCheck, 
  CreditCard,
  PlusCircle,
  LogOut
} from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'My Releases', icon: Music2, path: '/dashboard/releases' },
  { name: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
  { name: 'Payouts', icon: CircleDollarSign, path: '/dashboard/payouts' },
  { name: 'Artist Profile', icon: UserCircle, path: '/dashboard/profile' },
  { name: 'Verification', icon: ShieldCheck, path: '/dashboard/verification' },
  { name: 'Pricing Plans', icon: CreditCard, path: '/dashboard/pricing' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 h-screen bg-black/40 backdrop-blur-2xl border-r border-white/10 flex flex-col p-6 sticky top-0 shadow-2xl">
      {/* BRANDING */}
      <div className="mb-12 px-2 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#C5A059] rounded-xl flex items-center justify-center shadow-lg shadow-[#C5A059]/20">
            <span className="text-black font-black text-xl italic">A</span>
        </div>
        <div>
            <h2 className="text-xl font-black italic tracking-tighter text-white">AMV</h2>
            <p className="text-[8px] text-[#C5A059] font-bold tracking-[0.3em] uppercase">The Vault</p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20 font-bold' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={22} className={isActive ? 'text-black' : 'text-gray-500 group-hover:text-[#C5A059]'} />
              <span className="text-sm tracking-tight uppercase font-bold">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* FOOTER ACTIONS */}
      <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
        <button className="w-full bg-gradient-to-r from-[#C5A059] to-[#E5C079] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl">
          <PlusCircle size={20} />
          <span className="text-xs uppercase tracking-widest">New Release</span>
        </button>
        
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all group">
          <LogOut size={20} />
          <span className="text-xs font-black uppercase tracking-widest">Logout</span>
        </button>
      </div>
    </aside>
  )
}
