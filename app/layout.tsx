import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DiscountModal from '@/components/DiscountModal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The City Laundry – Manhattan Laundry Pickup & Delivery',
  description:
    'Professional laundry pickup and delivery for Manhattan and the Bronx. Wash & Fold starting at $1.25/lb. Free pickup included.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <div style={{ marginTop: '72px' }}>
          {children}
          <Footer />
        </div>
        <DiscountModal />
      </body>
    </html>
  )
}
