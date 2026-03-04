'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Database, Search, Play, MoreVertical, Loader2, Disc, User, Hash } from 'lucide-react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

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
    <div className="flex min-h-screen bg-black text-white overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-6 md:p-16 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto text-left">
          
          {/* ADAPTIVE HEADER */}
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-[#C5A059] text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-3 italic">Asset Registry</h2>
              <h1 className="text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none">
                Vault <span className="text-[#C5A059]">Assets</span>
              </h1>
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="SEARCH ARCHIVE..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-bold tracking-[0.2em] outline-none focus:border-[#C5A059] transition-all"
              />
            </div>
          </header>

          {/* LOADING STATE */}
          {loading ? (
            <div className="p-20 flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-[#C5A059]" size={40} />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Decrypting Archive...</span>
            </div>
          ) : (
            <div className="w-full">
              {/* DESKTOP TABLE VIEW - Hidden on Mobile */}
              <div className="hidden lg:block bg-white/[0.02] border border-white/5 rounded-[50px] overflow-hidden backdrop-blur-3xl">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                      <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Track Details</th>
                      <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 text-center">ISRC</th>
                      <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 text-center">Status</th>
                      <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset) => (
                      <DesktopRow key={asset.id} asset={asset} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARD VIEW - Hidden on Desktop */}
              <div className="lg:hidden space-y-4">
                {assets.map((asset) => (
                  <MobileCard key={asset.id} asset={asset} />
                ))}
              </div>

              {assets.length === 0 && (
                <div className="p-20 text-center border border-dashed border-white/10 rounded-[40px]">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 italic">No master assets found in the vault.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// COMPONENT: DESKTOP ROW
function DesktopRow({ asset }: any) {
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
      <td className="p-8 font-mono text-[10px] text-gray-400 text-center">{asset.isrc}</td>
      <td className="p-8 text-center">
        <span className={`text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${asset.status === 'live' ? 'bg-green-500/10 text-green-500' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
          {asset.status || 'processing'}
        </span>
      </td>
      <td className="p-8 text-right">
        <button className="text-gray-600 hover:text-white transition-colors"><MoreVertical size={18} /></button>
      </td>
    </tr>
  )
}

// COMPONENT: MOBILE CARD
function MobileCard({ asset }: any) {
  return (
    <div className="bg-white/[0.03] border border-white/10 p-6 rounded-[30px] space-y-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center text-[#C5A059]">
            <Disc size={20} />
          </div>
          <div className="text-left">
            <p className="text-xs font-black uppercase tracking-widest text-white">{asset.title}</p>
            <p className="text-[10px] font-bold uppercase text-[#C5A059]">{asset.artist}</p>
          </div>
        </div>
        <button className="text-gray-500 p-2"><MoreVertical size={16} /></button>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="text-left">
           <p className="text-[8px] font-black uppercase tracking-widest text-gray-600 mb-1">Serial ISRC</p>
           <p className="text-[10px] font-mono font-bold text-gray-400">{asset.isrc}</p>
        </div>
        <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${asset.status === 'live' ? 'bg-green-500/10 text-green-500' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
          {asset.status || 'processing'}
        </span>
      </div>
    </div>
  )
}
