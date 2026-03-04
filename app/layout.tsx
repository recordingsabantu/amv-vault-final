import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AMV VAULT | Abantu Recordings',
  description: 'Proprietary Asset Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}
