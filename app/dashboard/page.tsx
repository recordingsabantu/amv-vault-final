'use client'
import { useRouter } from 'next/navigation'
import Sidebar from '../../components/Sidebar' // <-- THE IMPORT
import { Upload, Music, BarChart3, DollarSign, ShieldCheck } from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()

  const goToUpload = () => {
    router.push('/dashboard/upload')
  }

  return (
    <div className="min-h-screen bg-[#0F0908] text-white flex">
      
      {/* 1. THE SIDEBAR COMPONENT */}
      <Sidebar />

      {/* 2. THE MAIN CONTENT */}
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

        {/* RELEASES LIST */}
        <div className="bg-[#1E1412] rounded-2xl border border-[#C5A059]/10 p-1">
          <div className="p-6 border-b border-[#C5A059]/10 text-sm font-bold opacity-70">
            RECENT SUBMISSIONS
          </div>
          <div className="h-80 flex flex-col items-center justify-center text-center p-10">
            <Music size={40} className="text-gray-700 mb-4"/>
            <p className="text-gray-500 text-sm">No releases found. Push your first track to the DSPs.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
