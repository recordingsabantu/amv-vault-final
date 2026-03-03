'use client'
import Sidebar from '../components/Sidebar'
import { TrendingUp, Globe, Users, PlayCircle, BarChart } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-10 relative overflow-hidden">
        {/* LIGHT GLOW EFFECT IN BACKGROUND */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px]" />

        <header className="mb-12 relative z-10">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase">Market <span className="text-[#C5A059]">Intelligence</span></h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2 font-mono">Real-time Global Stream Data</p>
        </header>

        {/* TOP STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 relative z-10">
          <StatBox icon={PlayCircle} label="Total Plays" value="1.2M" trend="+12%" />
          <StatBox icon={Users} label="Unique Listeners" value="84.2K" trend="+5.4%" />
          <StatBox icon={Globe} label="Top Region" value="South Africa" trend="KZN" />
          <StatBox icon={TrendingUp} label="Viral Score" value="88/100" trend="Rising" />
        </div>

        {/* MAIN CHART AREA */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-md mb-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight">Stream Performance</h3>
              <p className="text-gray-500 text-xs">Last 30 Days Activity</p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#C5A059]" />
              <span className="text-[10px] uppercase font-bold text-gray-400">Premium Streams</span>
            </div>
          </div>
          
          {/* VISUAL GRAPH BARS */}
          <div className="h-64 flex items-end gap-3 px-4">
            {[30, 45, 35, 60, 85, 40, 55, 70, 95, 65, 50, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group transition-all">
                <div 
                  className="absolute bottom-0 w-full bg-gradient-to-t from-[#C5A059] to-[#E2C285] rounded-t-xl transition-all duration-1000 group-hover:brightness-125" 
                  style={{ height: `${h}%` }} 
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function StatBox({ icon: Icon, label, value, trend }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-7 rounded-[32px] hover:border-[#C5A059]/30 transition-all group">
      <Icon className="text-[#C5A059] mb-4 group-hover:scale-110 transition-transform" size={24} />
      <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h4 className="text-2xl font-black">{value}</h4>
        <span className="text-[10px] text-[#C5A059] font-bold">{trend}</span>
      </div>
    </div>
  )
}
