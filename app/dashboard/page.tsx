'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../utils/supabase'
import { 
  Music, 
  Upload, 
  DollarSign, 
  BarChart3, 
  Settings, 
  LogOut, 
  User,
  ShieldCheck
} from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // 1. Function to handle Logout
  const handleLogout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push('/login')
  }

  // 2. Function to navigate to Upload page
  const goToUpload = () => {
    router.push('/dashboard/upload')
  }

  return (
    <div className="min-h-screen bg-[#0F0908] text-white flex">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-[#C5A059]/20 p-6 flex flex-col justify-between">
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

        {/* BOTTOM SIDEBAR */}
        <div className="border-t border-[#C5A059]/10 pt-6">
          <div 
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 p-3 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
          >
            <LogOut size={20}/> {loading ? 'Logging out...' : 'Sign Out'}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Artist Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage your music and distribution</p>
          </div>
          
          <button 
            onClick={goToUpload}
            className="bg-[#C5A059] text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#C5A059]/20"
          >
            <Upload size={20}/> New Release
          </button>
        </header>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#1E1412] p-6 rounded-xl border border-[#C5A059]/20">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 text-sm font-medium">Total Streams</p>
              <BarChart3 size={18} className="text-[#C5A059] opacity-50"/>
            </div>
            <p className="text-4xl font-black">0</p>
          </div>

          <div className="bg-[#1E1412] p-6 rounded-xl border border-[#C5A059]/20">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 text-sm font-medium">Est. Royalties</p>
              <DollarSign size={18} className="text-[#C5A059] opacity-50"/>
            </div>
            <p className="text-4xl font-black text-[#C5A059]">R0.00</p>
          </div>

          <div className="bg-[#1E1412] p-6 rounded-xl border border-[#C5A059]/20">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 text-sm font-medium">DDEX Compliance</p>
              <ShieldCheck size={18} className="text-[#C5A059] opacity-50"/>
            </div>
            <p className="text-sm font-bold text-[#C5A059] mb-1">PA-DPIDA-2026022701-M</p>
            <span className="bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded uppercase font-black">Verified License</span>
          </div>
        </div>

        {/* RELEASES SECTION */}
        <div className="bg-[#1E1412] rounded-2xl border border-[#C5A059]/10 p-1">
          <div className="p-6 border-b border-[#C5A059]/10">
            <h3 className="font-bold">Recent Submissions</h3>
          </div>
          
          <div className="h-80 flex flex-col items-center justify-center text-center p-10">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
              <Music size={32} className="text-gray-600"/>
            </div>
            <h4 className="text-lg font-bold mb-2">No Music Found</h4>
            <p className="text-gray-500 max-w-xs mb-6 text-sm">
              Your vault is currently empty. Start your distribution by creating a new release.
            </p>
            <button 
              onClick={goToUpload}
              className="text-[#C5A059] text-sm font-bold hover:underline"
            >
              Upload your first track &rarr;
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
