'use client'
import Sidebar from '../../components/Sidebar'
import { Play, Disc, CheckCircle, Clock } from 'lucide-react'

export default function MyCatalog() {
  // Mock data for display
  const releases = [
    { title: 'Durban Night', artist: 'Artist Name', date: '2026-03-01', status: 'Live' },
    { title: 'Vampire Piano', artist: 'Artist Name', date: '2026-02-15', status: 'Processing' },
  ]

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">My <span className="text-[#C5A059]">Catalog</span></h1>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold mt-2">Active & Pending Distribution</p>
        </header>

        <div className="space-y-4">
          {releases.map((track, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 p-6 rounded-[30px] hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-black rounded-2xl border border-white/10 flex items-center justify-center text-[#C5A059]">
                  <Disc size={24} className="group-hover:rotate-180 transition-all duration-1000" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-widest text-sm">{track.title}</h3>
                  <p className="text-gray-500 text-[10px] uppercase font-bold mt-1">{track.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Status</p>
                  <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${track.status === 'Live' ? 'text-green-500' : 'text-[#C5A059]'}`}>
                    {track.status === 'Live' ? <CheckCircle size={12} /> : <Clock size={12} />}
                    {track.status}
                  </div>
                </div>
                <button className="bg-white/10 p-4 rounded-full hover:bg-[#C5A059] hover:text-black transition-all">
                  <Play size={16} fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
