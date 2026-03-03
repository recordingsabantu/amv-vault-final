// Inside your Profile header section, replace the User circle with this:
<label className="relative group cursor-pointer">
   <div className="w-32 h-32 md:w-40 md:h-40 bg-black border-2 border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-all overflow-hidden relative">
      <User size={48} className="group-hover:scale-110 transition-transform opacity-50" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-widest">Update Photo</span>
      </div>
      {/* THIS IS THE HIDDEN INPUT THAT NOW WORKS ON CLICK */}
      <input type="file" className="hidden" accept="image/*" />
   </div>
   <div className="absolute bottom-2 right-2 bg-[#C5A059] text-black p-2 rounded-full border-4 border-black">
      <ShieldCheck size={16} />
   </div>
</label>
