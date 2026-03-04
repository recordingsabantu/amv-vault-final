'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { 
  Shield, 
  TrendingUp, 
  Disc, 
  Users, 
  Activity, 
  Lock,
  ArrowUpRight,
  Zap
} from 'lucide-react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function AdminDashboard() {
  const [stats, setStats] = useState({ total: 0, pending: 0, storage: '0 GB' })
  const [recent, setRecent] = useState<any[]>([])

  useEffect(() => {
    const getAdminData = async () => {
      const { count } = await supabase.from('releases').select('*', { count: 'exact', head: true })
      const { data: recentData } = await supabase.from('releases').select('*').limit(5).order('created_at', { ascending: false })
      
      setStats({
        total: count || 0,
        pending: recentData?.filter(r => r.status === 'processing').length || 0,
        storage: '1.2 GB' // This can be calculated via Supabase Storage API later
      })
      setRecent(recentData || [])
    }
    getAdminData()
  }, [])

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* TOP BAR */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full flex items-center gap-2">
                  <Lock size={10} className="text-red-500" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500">Root Access</span>
                </div>
              </div>
              <h1 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none">
                Vault <span className="text-[#C5A059]">Admin</span>
              </h1>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex items-center gap-6">
               <div className="text-right">
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-500">System Uptime</p>
                  <p className="text-lg font-black italic uppercase">99.9%</p>
               </div>
               <Activity size={24} className="text-green-500 animate-pulse" />
            </div>
          </header>

          {/* KPI GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <AdminKpi icon={TrendingUp} label="Total Assets" value={stats.total} />
            <AdminKpi icon={Disc} label="Processing" value={stats.pending} color="text-[#C5A059]" />
            <AdminKpi icon={Users} label="Auth Users" value="1" />
            <AdminKpi icon={Zap} label="Storage Use" value={stats.storage} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* RECENT INGESTIONS */}
            <div className="lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-[50px] p-10 text-left">
               <h3 className="text-[11px] font-black uppercase tracking-[0.5em] mb-10 text-gray-400 italic">Global Feed</h3>
               <div className="space-y-4">
                  {recent.map((release) => (
                    <div key={release.id} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/5">
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest">{release.title}</p>
                        <p className="text-[9px] text-[#C5A059] font-bold uppercase mt-1">{release.artist}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-mono text-gray-500">{release.isrc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* SECURITY MONITOR */}
            <div className="lg:col-span-4 space-y-6">
               <div className="bg-red-500/5 border border-red-500/10 p-10 rounded-[50px] text-left">
                  <Shield size={28} className="text-red-500 mb-6" />
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4">Security Protocol</h4>
                  <ul className="space-y-3">
                    <SecurityCheck text="AES-256 Encryption" />
                    <SecurityCheck text="RLS Master Policy" />
                    <SecurityCheck text="DDEX Metadata Check" />
                  </ul>
               </div>

               <button className="w-full bg-[#C5A059] py-8 rounded-[40px] text-black font-[1000] uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-white transition-all duration-500">
                  <ArrowUpRight size={18} />
                  System Export
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function AdminKpi({ icon: Icon, label, value, color = "text-white" }: any) {
  return (
    <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[40px] text-left hover:bg-white/5 transition-all">
      <Icon size={18} className="text-[#C5A059] mb-4" />
      <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-500">{label}</p>
      <p className={`text-4xl font-[1000] italic tracking-tighter mt-1 ${color}`}>{value}</p>
    </div>
  )
}

function SecurityCheck({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
      <div className="w-1 h-1 bg-red-500 rounded-full" />
      {text}
    </li>
  )
}
