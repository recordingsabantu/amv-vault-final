'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Database, Search, Play, MoreVertical, Loader2 } from 'lucide-react'

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function CatalogPage() {
  const [assets, setAssets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const { data, error } = await supabase
          .from('releases')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (error) throw error
        setAssets(data || [])
      } catch (err) {
        console.error("Vault Fetch Error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchAssets()
  }, [])

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
            <div className="relative md:w-64 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input type="text" placeholder="SEARCH ARCHIVE..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-bold tracking-widest outline-none focus:border-[#C5A059]" />
            </div>
          </header>

          <section className="bg-white/[0.02] border border-white/5 rounded-[50px] overflow-hidden backdrop-blur-3xl">
            {loading ? (
              <div className="p-20 flex flex-col items-center gap-4">
                <Loader2 className="animate-spin text-[#C5A059]" size={40} />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Decrypting Archive...</span>
              </div>
            ) : (
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
                  {assets.length > 0 ? assets.map((asset) => (
                    <AssetRow key={asset.id} asset={asset} />
                  )) : (
                    <tr>
                      <td colSpan={4} className="p-20 text-center text-gray-600 text-[10px] font-black uppercase tracking-widest">No assets found in the vault.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

function AssetRow({ asset }: any) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
      <td className="p-8">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-black transition-all">
            <Play size={16} fill="currentColor" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest">{asset.title}</p>
            <p className="text-[10px] text-gray-500 font-bold uppercase">{asset.artist}</p>
          </div>
        </div>
      </td>
      <td className="p-8 font-mono text-[10px] text-gray-400">{asset.isrc}</td>
      <td className="p-8">
        <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${asset.status === 'live' ? 'bg-green-500/10 text-green-500' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
          {asset.status || 'processing'}
        </span>
      </td>
      <td className="p-8">
        <button className="text-gray-600 hover:text-white transition-colors"><MoreVertical size={18} /></button>
      </td>
    </tr>
  )
}
