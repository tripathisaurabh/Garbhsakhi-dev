import './globals.css'
import { Manrope } from 'next/font/google'
import WhatsAppButton from '@/components/WhatsAppButton'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className} style={{ backgroundImage: 'linear-gradient(135deg, #FFF2F2, #EDF5FF)', minHeight: '100vh' }}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}