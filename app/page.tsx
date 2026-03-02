import { Music, Check, ShieldCheck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F0908] text-white font-sans">
      {/* Hero Section */}
      <nav className="p-6 border-b border-[#C5A059]/20 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#C5A059] tracking-tighter">AMV VAULT</h1>
        <div className="text-xs text-[#C5A059] border border-[#C5A059] px-2 py-1 rounded">
          DDEX: PA-DPIDA-2026022701-M
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#C5A059] to-white bg-clip-text text-transparent">
          Distribute Your Sound.
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Global music distribution for independent artists. Keep your rights, keep your royalties.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Basic Plan */}
          <div className="bg-[#1E1412] p-8 rounded-2xl border border-[#C5A059]/30 hover:border-[#C5A059] transition-all">
            <h3 className="text-2xl font-bold mb-2">Distribution Basic</h3>
            <p className="text-4xl font-black text-[#C5A059] mb-6">R420<span className="text-sm text-gray-400">/year</span></p>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-2"><Check className="text-[#C5A059] w-5 h-5" /> 1 Artist Profile</li>
              <li className="flex items-center gap-2"><Check className="text-[#C5A059] w-5 h-5" /> Unlimited Uploads</li>
              <li className="flex items-center gap-2"><Check className="text-[#C5A059] w-5 h-5" /> 100% Royalties</li>
            </ul>
            <button className="w-full bg-[#C5A059] text-black font-bold py-3 rounded-lg hover:bg-white transition">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#1E1412] p-8 rounded-2xl border-2 border-[#C5A059] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#C5A059] text-black text-[10px] font-bold px-3 py-1">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Distribution Pro</h3>
            <p className="text-4xl font-black text-[#C5A059] mb-6">R859<span className="text-sm text-gray-400">/year</span></p>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-2"><Check className="text-[#C5A059] w-5 h-5" /> Up to 5 Artist Profiles</li>
              <li className="flex items-center gap-2"><Check className="text-[#C5A059] w-5 h-5" /> Priority DDEX Delivery</li>
              <li className="flex items-center gap-2"><Check className="text-[#C5A059] w-5 h-5" /> Advanced Analytics</li>
            </ul>
            <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-[#C5A059] transition">Upgrade to Pro</button>
          </div>
        </div>
      </main>
    </div>
  );
}
