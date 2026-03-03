'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import Sidebar from '../../components/Sidebar'
import { Users, Disc, Wallet, CheckCircle, XCircle, ExternalLink } from 'lucide-react'

export default function SuperAdmin() {
  const [stats, setStats] = useState({ artists: 0, releases: 0, revenue: 0 })
  const [pending, setPending] = useState<any[]>([])

  useEffect(() => {
    fetchAdminData()
  }, [])

  async function fetchAdminData() {
    // 1. Get Totals
    const { count: artistCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true })
    const { count: releaseCount } = await supabase.from('releases').select('*', { count: 'exact', head: true })
    
    setStats({ artists: artistCount || 0, releases: releaseCount || 0, revenue: 42500 }) // Revenue placeholder

    // 2. Get Pending Releases for Approval
    const { data } = await supabase.from('releases').select('*').eq('status', 'Pending Review')
    setPending(data || [])
  }

  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-10">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase text-[#C5A059]">CEO <span className="text-white">Vault Control</span></h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2">Executive Administration & Global Distribution</p>
        </header>

        {/* NETWORK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AdminStat label="Total Artists" value={stats.artists} icon={Users} color="white" />
          <AdminStat label="Vault Releases" value={stats.releases} icon={Disc} color="#C5A059" />
          <AdminStat label="Network Revenue" value={`R${stats.revenue}`} icon={Wallet} color="#C5A059" />
        </div>

        {/* APPROVAL QUEUE */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-md">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-black uppercase tracking-widest text-sm">Pending Distribution Queue</h3>
            <span className="bg-[#C5A059] text-black text-[10px] font-black px-3 py-1 rounded-full">{pending.length} NEW</span>
          </div>

          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5 text-[10px] uppercase tracking-widest text-gray-500">
              <tr>
                <th className="p-6">Artist / Title</th>
                <th className="p-6">UPC/ISRC</th>
                <th className="p-6">Date</th>
                <th className="p-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pending.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-all group">
                  <td className="p-6">
                    <div className="font-bold uppercase tracking-tight">{item.title}</div>
                    <div className="text-[#C5A059] text-[10px] font-bold italic">{item.artist_name}</div>
                  </td>
                  <td className="p-6 text-xs font-mono text-gray-500">{item.upc || 'GENERATE-UPC'}</td>
                  <td className="p-6 text-xs text-gray-600">{new Date(item.created_at).toLocaleDateString()}</td>
                  <td className="p-6 text-right space-x-2">
                    <button className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><XCircle size={16}/></button>
                    <button className="p-3 bg-[#C5A059]/10 text-[#C5A059] rounded-xl hover:bg-[#C5A059] hover:text-black transition-all"><CheckCircle size={16}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {pending.length === 0 && (
            <div className="p-20 text-center text-gray-600 uppercase text-[10px] font-black tracking-widest">The Vault is currently empty</div>
          )}
        </div>
      </main>
    </div>
  )
}

function AdminStat({ label, value, icon: Icon, color }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] relative overflow-hidden group">
      <Icon className="absolute right-[-10px] bottom-[-10px] text-white/5 scale-150 group-hover:text-[#C5A059]/10 transition-all" size={120} />
      <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mb-2">{label}</p>
      <h2 className="text-4xl font-black" style={{ color: color }}>{value}</h2>
    </div>
  )
}
