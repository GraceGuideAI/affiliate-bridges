import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Exclusive Offers',
  description: 'Limited time exclusive offers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
