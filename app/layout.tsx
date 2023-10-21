import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/molecules/Nav/Navbar'
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';


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
       {/* <ColorSchemeScript /> */}
     
      <body className={inter.className}>

        <MantineProvider >
          <Navbar/>
          {children}
        </MantineProvider>
        
        </body>

    </html>
  )
}
