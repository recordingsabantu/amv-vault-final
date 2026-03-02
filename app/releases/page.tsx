'use client'
import Sidebar from '../components/Sidebar'

export default function UploadPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-10">
        <div className="max-w-2xl bg-white/5 border border-white/10 p-10 rounded-[40px]">
          <h2 className="text-3xl font-black italic mb-6 text-[#C5A059]">SUBMIT TO GLOBAL STORES</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase font-bold mb-2">Track Title</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="e.g. Durban Summer" />
            </div>
            <div className="border-2 border-dashed border-white/10 p-10 rounded-3xl text-center">
              <p className="text-gray-500 uppercase text-xs font-bold">Drag & Drop WAV or MP3</p>
            </div>
            <button type="button" className="w-full bg-[#C5A059] text-black font-black py-4 rounded-2xl">
              PUSH TO STORES
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
