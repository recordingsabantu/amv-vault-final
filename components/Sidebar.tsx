'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  UploadCloud, 
  Library, 
  Wallet, 
  Settings, 
  LogOut, 
  ShieldCheck 
} from 'lucide-react'

const menuItems = [
  { name: 'Artist Portal', icon: LayoutDashboard, path: '/profile' },
  { name: 'Push Music', icon: UploadCloud, path: '/submit' },
  { name: 'My Catalog', icon: Library, path: '/catalog' },
  { name: 'Royalties', icon: Wallet, path: '/wallet' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-black border-r border-white/5 flex flex-col h-screen sticky top-0 z-50">
      {/* BRANDING */}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="text-[#C5A059]" size={22} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">AMV Vault</span>
        </div>
        <p className="text-[8px] text-gray-600 uppercase font-bold tracking-widest">Abantu Recordings Ltd.</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`
                flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20' 
                  : 'text-gray-500 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              <item.icon size={18} className={isActive ? 'text-black' : 'group-hover:text-[#C5A059]'} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* FOOTER / EXIT */}
      <div className="p-8 border-t border-white/5 space-y-6">
        <Link 
          href="/settings"
          className="flex items-center gap-4 text-gray-600 hover:text-white transition-all"
        >
          <Settings size={18} />
          <span className="text-[10px] font-black uppercase tracking-widest">Settings</span>
        </Link>
        
        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-4 text-gray-600 hover:text-red-500 transition-all w-full text-left group"
        >
          <LogOut size={18} className="group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-[10px] font-black uppercase tracking-widest">Exit Vault</span>
        </button>
      </div>
    </aside>
  )
}
