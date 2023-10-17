import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from './components/molecules/Nav/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bless-portfolio',
  description: 'This is a simple portfolio page for Bless Ahadjie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Navbar/>

        {children}
        
        </body>

    </html>
  )
}
