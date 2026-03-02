'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Music, BarChart, Wallet, User, BadgeCheck, ShieldEllipsis, Plus } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'My Releases', icon: Music, path: '/dashboard/releases' },
  { name: 'Analytics', icon: BarChart, path: '/dashboard/analytics' },
  { name: 'Payouts', icon: Wallet, path: '/dashboard/payouts' },
  { name: 'Artist Profile', icon: User, path: '/dashboard/profile' },
  { name: 'Verification', icon: BadgeCheck, path: '/dashboard/verification' },
  { name: 'Pricing Plans', icon: ShieldEllipsis, path: '/dashboard/pricing' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-80 h-screen bg-black/60 backdrop-blur-3xl border-r border-white/5 p-8 flex flex-col sticky top-0">
      <div className="mb-14 px-2 italic font-black text-3xl tracking-tighter text-[#C5A059]">
        AMV <span className="text-white">VAULT</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.path
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold uppercase tracking-widest text-[10px] ${
                active ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <button className="w-full bg-white text-black font-black py-5 rounded-3xl flex items-center justify-center gap-2 hover:bg-[#C5A059] transition-colors shadow-2xl">
          <Plus size={20} />
          <span className="text-[10px] uppercase tracking-widest">New Release</span>
        </button>
      </div>
    </aside>
  )
}
