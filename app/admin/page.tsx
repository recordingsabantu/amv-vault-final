'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import { createClient } from '@supabase/supabase-js'
import { Shield, Users, Disc, AlertCircle, CheckCircle2 } from 'lucide-react'

// Initialize Supabase safely
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function SuperAdmin() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      // Replace this email with your actual admin email
      if (user?.email === 'management@abanturecordings.com') {
        setIsAdmin(true)
      } else {
        // Redirect non-admins to profile
        router.push('/profile')
      }
      setLoading(false)
    }
    checkUser()
  }, [router])

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#C5A059] font-black italic">VERIFYING AUTHORITY...</div>

  if (!isAdmin) return null

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      
      <main className="flex-1 p-8 md:p-20 relative z-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto text-left">
          
          {/* HEADER */}
          <header className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Shield size={10} className="text-red-500" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500">Root Level Access</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none">
              Control <span className="text-[#C5A059]">Center</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AdminStat icon={Users} label="Total Artists" value="12" />
            <AdminStat icon={Disc} label="Pending ISRC" value="05" color="text-[#C5A059]" />
            <AdminStat icon={AlertCircle} label="System Alerts" value="00" />
          </div>

          {/* ADMIN TOOLS SECTION */}
          <section className="bg-white/[0.02] border border-white/5 rounded-[50px] p-12 backdrop-blur-3xl">
            <h3 className="text-xl font-black italic uppercase tracking-widest mb-10 flex items-center gap-3">
              <CheckCircle2 className="text-[#C5A059]" size={20} />
              Vault Health Monitor
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex justify-between items-center">
                <span className="text-[11px] font-black uppercase tracking-widest">Global Distribution Feed</span>
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1 rounded-full">Optimal</span>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex justify-between items-center">
                <span className="text-[11px] font-black uppercase tracking-widest">Metadata Sync (DDEX)</span>
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest bg-green-500/10 px-4 py-1 rounded-full">Active</span>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

function AdminStat({ icon: Icon, label, value, color = "text-white" }: any) {
  return (
    <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] text-left">
      <Icon size={20} className="text-[#C5A059] mb-4" />
      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">{label}</p>
      <p className={`text-5xl font-[1000] italic uppercase mt-2 tracking-tighter ${color}`}>{value}</p>
    </div>
  )
}
