'use client'
import { Music, Upload, DollarSign, BarChart3, Settings } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0F0908] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#C5A059]/20 p-6 flex flex-col gap-8">
        <h2 className="text-xl font-bold text-[#C5A059]">AMV VAULT</h2>
        <nav className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#C5A059] bg-[#C5A059]/10 p-3 rounded-lg"><BarChart3 size={20}/> Analytics</div>
          <div className="flex items-center gap-3 text-gray-400 p-3 hover:text-white transition cursor-pointer"><Music size={20}/> My Releases</div>
          <div className="flex items-center gap-3 text-gray-400 p-3 hover:text-white transition cursor-pointer"><DollarSign size={20}/> Payouts</div>
          <div className="flex items-center gap-3 text-gray-400 p-3 hover:text-white transition cursor-pointer"><Settings size={20}/> Settings</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Artist Dashboard</h1>
            <p className="text-gray-400">Welcome back, Artist</p>
          </div>
          <button className="bg-[#C5A059] text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white transition">
            <Upload size={20}/> New Release
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-[#1E1412] p-6 rounded-xl border border-[#C5A059]/20">
            <p className="text-gray-400 text-sm">Total Streams</p>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
          <div className="bg-[#1E1412] p-6 rounded-xl border border-[#C5A059]/20">
            <p className="text-gray-400 text-sm">Estimated Revenue</p>
            <p className="text-3xl font-bold mt-2">R0.00</p>
          </div>
          <div className="bg-[#1E1412] p-6 rounded-xl border border-[#C5A059]/20">
            <p className="text-gray-400 text-sm">DDEX Status</p>
            <p className="text-[#C5A059] font-bold mt-2 italic text-sm">PA-DPIDA-2026022701-M (ACTIVE)</p>
          </div>
        </div>

        {/* Placeholder for music list */}
        <div className="bg-[#1E1412] h-64 rounded-xl border border-[#C5A059]/10 flex flex-col items-center justify-center text-gray-500">
          <Music size={48} className="mb-4 opacity-20"/>
          <p>No releases found. Start by uploading your first track.</p>
        </div>
      </main>
    </div>
  )
}
