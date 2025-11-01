import Footer from '@/components/Footer/Footer'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

// Inter → for headings
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Montserrat → for everything else
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'AppScrip Shop',
  description:
    'App Scrip Shop is an E-commerce platform where you can buy various products based on your preference.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} `}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
