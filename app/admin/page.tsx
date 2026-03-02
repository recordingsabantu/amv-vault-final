'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import Sidebar from '../../components/Sidebar'
import { CheckCircle, Clock, ExternalLink, Play } from 'lucide-react'

export default function AdminPanel() {
  const [releases, setReleases] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReleases()
  }, [])

  async function fetchReleases() {
    const { data, error } = await supabase
      .from('releases')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!error) setReleases(data)
    setLoading(false)
  }

  async function updateStatus(id: string, newStatus: string) {
    const { error } = await supabase
      .from('releases')
      .update({ status: newStatus })
      .eq('id', id)
    
    if (!error) fetchReleases()
  }

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-10">
        <header className="mb-10">
          <h1 className="text-4xl font-black italic text-[#C5A059] tracking-tighter uppercase">CEO Command Center</h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2">Managing Abantu Musik Vault Distribution</p>
        </header>

        <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-md">
          <table className="w-full text-left">
            <thead className="bg-white/5 border-b border-white/10">
              <tr className="text-[10px] uppercase tracking-widest text-gray-400">
                <th className="p-6">Artist & Title</th>
                <th className="p-6">Status</th>
                <th className="p-6">Date Uploaded</th>
                <th className="p-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {releases.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-6">
                    <div className="font-bold text-white uppercase tracking-tight">{item.title}</div>
                    <div className="text-[#C5A059] text-xs font-medium italic">{item.artist_name}</div>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                      item.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-6 text-xs text-gray-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-6 text-right space-x-2">
                    <button 
                      onClick={() => updateStatus(item.id, 'Sent to Stores')}
                      className="p-3 bg-white/5 rounded-xl hover:bg-[#C5A059] hover:text-black transition-all"
                      title="Mark as Sent"
                    >
                      <ExternalLink size={16} />
                    </button>
                    <button 
                      onClick={() => updateStatus(item.id, 'Live')}
                      className="p-3 bg-white/5 rounded-xl hover:bg-green-500 hover:text-black transition-all"
                      title="Mark as Live"
                    >
                      <CheckCircle size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {releases.length === 0 && !loading && (
            <div className="p-20 text-center text-gray-600 uppercase text-xs font-black tracking-widest">
              No music in the vault yet...
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
