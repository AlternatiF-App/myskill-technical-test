import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/molecules/header'
import Footer from '@/components/molecules/footer'

const poppins = Poppins({ weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Porto Maker',
  description: 'Create and make your own portofolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
