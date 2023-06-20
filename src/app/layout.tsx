import Header from '@/components/ui/layout/Header';
import './globals.css'
import { Inter } from 'next/font/google';
import Providers from '@/components/ui/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='p-5'>
        <Providers>
        <Header/>
        {children}
        </Providers>
        </main>

        </body>
    </html>
  )
}
