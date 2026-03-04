'use client'
import React from 'react'
// BOABLE CHECK: Ensure your folder is 'components' and file is 'Sidebar.tsx'
import Sidebar from '@/components/Sidebar' 
import { 
  User, 
  Settings, 
  Music, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  ShieldCheck
} from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      {/* SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER SECTION - ROCKWAY STYLE */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.6em] mb-4 italic">Management Console</h2>
              <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-[0.8]">
                Label <span className="text-[#C5A059]">Chief</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-3xl">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Vault Secure</span>
            </div>
          </header>

          {/* TOP STATS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StatCard icon={Music} label="Active Assets" value="32" />
            <StatCard icon={TrendingUp} label="Total Streams" value="1.4M" highlight />
            <StatCard icon={BarChart3} label="Revenue Rank" value="#108" />
          </div>

          {/* ACCOUNT DETAILS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LEFT SIDE: ACCOUNT INFO */}
            <div className="lg:col-span-8 space-y-10">
              <section className="bg-white/[0.02] border border-white/5 p-12 rounded-[50px] backdrop-blur-3xl text-left">
                <div className="flex items-center gap-8 mb-12">
                  <div className="w-20 h-20 bg-[#C5A059] rounded-[28px] flex items-center justify-center text-black shadow-2xl shadow-[#C5A059]/20">
                    <User size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter">Abantu Recordings</h3>
                    <p className="text-[#C5A059] text-[11px] font-black uppercase tracking-[0.4em] mt-1">Verified Master Account</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                  <DetailItem label="Primary Email" value="management@abanturecordings.com" />
                  <DetailItem label="HQ Location" value="South Africa (Durban)" />
                  <DetailItem label="Distribution ID" value="ABANTU-VAULT-2026" />
                  <DetailItem label="Legal Status" value="Entity Verified" />
                </div>
              </section>

              {/* RECENT SUBMISSIONS LIST */}
              <section className="bg-white/[0.02] border border-white/5 p-12 rounded-[50px] text-left">
                 <div className="flex items-center justify-between mb-10">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em]">Recent Vault Activity</h4>
                    <Clock size={16} className="text-gray-600" />
                 </div>
                 <div className="space-y-4">
                    <ActivityItem title="Summer Heat Wave" date="Feb 28, 2026" status="Live" />
                    <ActivityItem title="The Zulu King EP" date="Feb 24, 2026" status="Processing" />
                    <ActivityItem title="Midnight Sessions" date="Feb 20, 2026" status="Live" />
                 </div>
              </section>
            </div>

            {/* RIGHT SIDE: QUICK ACTIONS */}
            <div className="lg:col-span-4 space-y-6">
              <button className="w-full bg-white text-black py-10 rounded-[45px] font-[1000] uppercase text-[12px] tracking-[0.4em] hover:bg-[#C5A059] transition-all duration-700 shadow-xl flex items-center justify-center gap-3">
                <Settings size={18} />
                Portal Settings
              </button>

              <div className="bg-[#C5A059]/5 border border-[#C5A059]/10 p-10 rounded-[45px] text-left">
                <ShieldCheck className="text-[#C5A059] mb-4" size={24} />
                <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-2">Encryption Active</h5>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-loose">
                  All data ingested into the AMV Vault is protected by AES-256 military-grade standards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

// UI COMPONENTS
function StatCard({ icon: Icon, label, value, highlight }: any) {
  return (
    <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] flex flex-col items-start gap-4 hover:bg-white/5 transition-all group text-left">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">{label}</p>
        <p className={`text-4xl font-black italic uppercase mt-1 tracking-tighter ${highlight ? 'text-[#C5A059]' : 'text-white'}`}>
          {value}
        </p>
      </div>
    </div>
  )
}

function DetailItem({ label, value }: any) {
  return (
    <div className="space-y-2">
      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">{label}</p>
      <p className="text-sm font-bold text-white tracking-wide">{value}</p>
    </div>
  )
}

function ActivityItem({ title, date, status }: any) {
  return (
    <div className="flex items-center justify-between p-6 bg-white/[0.03] rounded-3xl border border-transparent hover:border-white/10 transition-all">
      <div className="flex items-center gap-5">
        <div className={`w-2 h-2 rounded-full ${status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`} />
        <span className="text-xs font-black uppercase tracking-widest">{title}</span>
      </div>
      <div className="text-right">
        <p className="text-[9px] font-black uppercase tracking-widest text-white">{status}</p>
        <p className="text-[8px] font-bold text-gray-600 uppercase mt-1">{date}</p>
      </div>
    </div>
  )
}
