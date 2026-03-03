'use client'
import Sidebar from '@/components/Sidebar'
import { User, Settings, Music, BarChart3, TrendingUp, Clock } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-left">
            <div>
              <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-3 italic">Administrative Portal</h2>
              <h1 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none">
                Label <span className="text-[#C5A059]">Chief</span>
              </h1>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest">System Online</span>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard icon={Music} label="Active Releases" value="24" />
            <StatCard icon={TrendingUp} label="Total Streams" value="1.2M" gold />
            <StatCard icon={BarChart3} label="Global Rank" value="#402" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <section className="bg-white/[0.03] border border-white/10 rounded-[40px] p-10 text-left">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-[#C5A059] rounded-2xl flex items-center justify-center text-black font-black italic text-2xl">A</div>
                  <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter">Abantu Recordings</h3>
                    <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.2em]">Master Account</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InfoItem label="Email Address" value="management@abanturecordings.com" />
                  <InfoItem label="Region" value="South Africa (ZA)" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, gold }: any) {
  return (
    <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[35px] text-left">
      <Icon size={20} className="text-[#C5A059] mb-4" />
      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">{label}</p>
      <p className={`text-3xl font-black italic uppercase mt-1 ${gold ? 'text-[#C5A059]' : 'text-white'}`}>{value}</p>
    </div>
  )
}

function InfoItem({ label, value }: any) {
  return (
    <div className="space-y-1">
      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">{label}</p>
      <p className="text-sm font-bold text-white tracking-wide">{value}</p>
    </div>
  )
}
