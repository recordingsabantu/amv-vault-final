'use client'
import { useRouter } from 'next/navigation'
import { supabase } from '../utils/supabase'
import { 
  Music, 
  DollarSign, 
  BarChart3, 
  User, 
  LogOut 
} from 'lucide-react'

export default function Sidebar() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <aside className="w-64 border-r border-[#C5A059]/20 p-6 flex flex-col justify-between h-screen sticky top-0">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-[#C5A059] rounded-full flex items-center justify-center text-black font-bold">V</div>
          <h2 className="text-xl font-bold text-[#C5A059] tracking-tighter">AMV VAULT</h2>
        </div>
        
        <nav className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-[#C5A059] bg-[#C5A059]/10 p-3 rounded-lg cursor-pointer font-medium">
            <BarChart3 size={20}/> Analytics
          </div>
          <div className="flex items-center gap-3 text-gray-400 p-3 hover:text-white hover:bg-white/5 rounded-lg transition cursor-pointer">
            <Music size={20}/> My Releases
          </div>
          <div className="flex items-center gap-3 text-gray-400 p-3 hover:text-white hover:bg-white/5 rounded-lg transition cursor-pointer">
            <DollarSign size={20}/> Payouts
          </div>
          <div className="flex items-center gap-3 text-gray-400 p-3 hover:text-white hover:bg-white/5 rounded-lg transition cursor-pointer">
            <User size={20}/> Artist Profile
          </div>
        </nav>
      </div>

      <div className="border-t border-[#C5A059]/10 pt-6">
        <div 
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 p-3 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
        >
          <LogOut size={20}/> Sign Out
        </div>
      </div>
    </aside>
  )
}
