'use client'
import Sidebar from '@/components/Sidebar' // Use the @ symbol to avoid path errors
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Sidebar from '../../components/Sidebar'

export default function SuperAdmin() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    // 1. Get the current logged-in user
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/login') // No user? Go to login.
      return
    }

    // 2. Check their role in the database
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role === 'admin') {
      setIsAdmin(true)
    } else {
      router.push('/') // Not an admin? Kick them to the Artist Dashboard.
    }
    setLoading(false)
  }

  if (loading) return <div className="bg-black h-screen flex items-center justify-center text-[#C5A059] font-black italic tracking-tighter uppercase animate-pulse">Scanning Vault Access...</div>

  if (!isAdmin) return null // Safety block

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />
      <main className="flex-1 p-10">
         {/* YOUR ADMIN CODE FROM PREVIOUS STEP GOES HERE */}
         <h1 className="text-[#C5A059] text-5xl font-black italic uppercase tracking-tighter">Welcome, CEO</h1>
      </main>
    </div>
  )
}
