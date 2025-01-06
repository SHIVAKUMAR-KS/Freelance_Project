import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Register Karo App',
  description: 'Created by Shiva',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
