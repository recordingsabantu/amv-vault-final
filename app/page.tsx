'use client'
import Sidebar from '../components/Sidebar'
import { Disc, TrendingUp, Users, Play } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      
      <main className="flex-1 p-8 md:p-12 relative overflow-hidden">
        {/* DESIGN ACCENT: GOLD BLUR */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] -z-10" />

        {/* WELCOME SECTION */}
        <header className="mb-12">
          <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-3">
            Artist Portal
          </h2>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-none">
            Artist <span className="text-[#C5A059]">Command Center</span>
          </h1>
          
          <div className="max-w-3xl border-l-2 border-[#C5A059] pl-6 py-2 bg-white/5 rounded-r-3xl pr-6">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
              "Welcome to the AMV Vault. Your music is the heartbeat of the nation. 
              Use this portal to track your global impact, manage royalties, and distribute 
              your sound to every corner of the world. Abantu Recordings — The Future of African Sound."
            </p>
          </div>
        </header>

        {/* QUICK STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard label="Total Streams" value="142.8K" icon={TrendingUp} />
          <StatCard label="Monthly Listeners" value="12,405" icon={Users} />
          <StatCard label="Active Releases" value="08" icon={Disc} />
        </div>

        {/* RECENT ACTIVITY SECTION */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-md">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Play size={16} className="text-[#C5A059]" /> Current Trajectory
            </h3>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Last 7 Days</span>
          </div>

          {/* PLACEHOLDER FOR PERFORMANCE GRAPH */}
          <div className="h-40 flex items-end gap-2 px-4">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-gradient-to-t from-[#C5A059]/20 to-[#C5A059] rounded-t-lg transition-all hover:brightness-125 cursor-pointer" 
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ label, value, icon: Icon }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] hover:border-[#C5A059]/30 transition-all group">
      <Icon className="text-[#C5A059] mb-4 group-hover:scale-110 transition-transform" size={24} />
      <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">{label}</p>
      <h4 className="text-3xl font-black mt-1">{value}</h4>
    </div>
  )
}
