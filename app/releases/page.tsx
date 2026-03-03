<div className="max-w-4xl mx-auto space-y-6">
  {/* HEADER CARD */}
  <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] flex items-center gap-8">
    <div className="w-32 h-32 bg-[#111] rounded-3xl border border-[#C5A059]/30 flex items-center justify-center">
       <Disc className="text-[#C5A059]/20" size={48} />
    </div>
    <div>
      <h1 className="text-5xl font-black italic uppercase tracking-tighter">Bayeza</h1>
      <p className="text-[#C5A059] font-bold">Housemates Musique SA</p>
      <p className="text-gray-600 text-[10px] mt-1 font-mono uppercase">UPC: 195604888038</p>
    </div>
  </div>

  {/* STATUS CHECKLIST */}
  <div className="grid gap-4">
    <div className="p-6 bg-white/5 border border-white/10 rounded-[30px] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
          <ShieldCheck size={20} />
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wide">Distribute to Music Services</h3>
          <p className="text-[10px] text-gray-500">Global Stores (Spotify, Apple, etc.)</p>
        </div>
      </div>
      <span className="px-4 py-1 bg-yellow-500/10 text-yellow-500 text-[9px] font-black uppercase rounded-full">
        Pending Review
      </span>
    </div>
  </div>
</div>
