'use client'
import Sidebar from '@/components/Sidebar'
import { Database, Search, Filter, Play, MoreVertical } from 'lucide-react'

export default function CatalogPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto text-left">
          
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mb-3 italic">Asset Registry</h2>
              <h1 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none">
                Vault <span className="text-[#C5A059]">Assets</span>
              </h1>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input 
                  type="text" 
                  placeholder="SEARCH ARCHIVE..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-bold tracking-widest outline-none focus:border-[#C5A059] transition-all"
                />
              </div>
            </div>
          </header>

          <section className="bg-white/[0.02] border border-white/5 rounded-[50px] overflow-hidden backdrop-blur-3xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Track Details</th>
                  <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">ISRC</th>
                  <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Status</th>
                  <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AssetRow title="Midnight Summer" artist="Abantu Crew" isrc="ZA-AMV-26-00001" status="Live" />
                <AssetRow title="Ghetto Gospel" artist="Z.K." isrc="ZA-AMV-26-00002" status="Processing" />
              </tbody>
            </table>
          </section>

        </div>
      </main>
    </div>
  )
}

function AssetRow({ title, artist, isrc, status }: any) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
      <td className="p-8">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black transition-all">
            <Play size={16} fill="currentColor" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest">{title}</p>
            <p className="text-[10px] text-gray-500 font-bold uppercase">{artist}</p>
          </div>
        </div>
      </td>
      <td className="p-8 font-mono text-[10px] text-gray-400">{isrc}</td>
      <td className="p-8">
        <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${status === 'Live' ? 'bg-green-500/10 text-green-500' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
          {status}
        </span>
      </td>
      <td className="p-8">
        <button className="text-gray-600 hover:text-white transition-colors">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  )
}
