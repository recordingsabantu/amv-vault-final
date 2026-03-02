'use client'
import Sidebar from '../components/Sidebar'
import { BarChart3, Users, Music2, Globe } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* PROFESSIONAL SIDEBAR */}
      <Sidebar />

      <main className="flex-1 relative">
        {/* THE HALF-BACKGROUND YOU LIKED */}
        <div 
          className="h-[45vh] w-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/bg-amv.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#0a0a0a]" />
          
          <div className="relative z-10 p-10">
            <h1 className="text-5xl font-black italic tracking-tighter text-white">WELCOME TO THE VAULT</h1>
            <p className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs mt-2">Executive Artist Command Center</p>
          </div>
        </div>

        {/* DASHBOARD CONTENT */}
        <div className="p-10 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon={Music2} label="Total Streams" value="1.2M" color="text-blue-400" />
            <StatCard icon={Users} label="Monthly Listeners" value="84.2K" color="text-purple-400" />
            <StatCard icon={BarChart3} label="Revenue" value="R12,450" color="text-[#C5A059]" />
            <StatCard icon={Globe} label="Global Reach" value="42 Countries" color="text-green-400" />
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6">Recent Release Performance</h3>
            <div className="h-64 flex items-end gap-4 px-4">
              {/* Simple Visual Graph for the Youth */}
              {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-[#C5A059]/20 rounded-t-lg relative group transition-all hover:bg-[#C5A059]">
                  <div className="absolute bottom-0 w-full bg-[#C5A059] rounded-t-lg transition-all" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-xl">
      <Icon className={`${color} mb-4`} size={28} />
      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{label}</p>
      <h4 className="text-2xl font-black mt-1">{value}</h4>
    </div>
  )
}
