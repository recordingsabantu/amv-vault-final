'use client'
import { useRouter, usePathname } from 'next/navigation'
import { LayoutDashboard, Disc, UploadCloud, Wallet, ShieldCheck, BarChart3, User } from 'lucide-react'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const menu = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'My Releases', icon: Disc, path: '/releases' },
    { name: 'Submit Music', icon: UploadCloud, path: '/submit' },
    { name: 'Payouts & Wallet', icon: Wallet, path: '/payouts' },
    { name: 'Verification', icon: ShieldCheck, path: '/verification' },
    { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  ]

  return (
    <aside className="w-72 h-screen bg-[#050505] border-r border-white/10 flex flex-col p-6 sticky top-0 z-50">
      <div className="mb-12 px-2">
        <h1 className="text-2xl font-black italic text-white tracking-tighter uppercase">
          AMV <span className="text-[#C5A059]">VAULT</span>
        </h1>
        <p className="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] mt-2 font-bold">Artist Portal</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menu.map((item) => (
          <button key={item.name} onClick={() => router.push(item.path)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
              pathname === item.path ? 'bg-[#C5A059] text-black font-black' : 'text-gray-500 hover:text-white hover:bg-white/5'
            }`}>
            <item.icon size={20} />
            <span className="text-[10px] uppercase tracking-widest font-bold">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* RECENT PERFORMANCE WIDGET */}
      <div className="mt-auto p-4 bg-white/5 rounded-3xl border border-white/10">
        <p className="text-[8px] uppercase tracking-widest text-gray-500 mb-2">Recent Performance</p>
        <div className="flex items-end gap-1 h-8">
          {[4, 7, 5, 9, 6, 10, 8].map((h, i) => (
            <div key={i} className="flex-1 bg-[#C5A059]/40 rounded-t-sm" style={{ height: `${h * 10}%` }} />
          ))}
        </div>
        <p className="text-[10px] font-bold mt-2">+12.4% <span className="text-gray-600 font-normal ml-1">this week</span></p>
      </div>
    </aside>
  )
}
