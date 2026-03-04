export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      {/* GLOW EFFECT */}
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white uppercase">
          AMV <span className="text-gold">VAULT</span>
        </h1>
        <p className="text-gold tracking-[0.5em] text-xs uppercase font-bold">
          Abantu Recordings Elite Asset Management
        </p>
        <div className="pt-10">
          <a href="/profile" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-gold transition-all duration-300">
            Enter Portal
          </a>
        </div>
      </div>
    </main>
  )
}