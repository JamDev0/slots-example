import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Slots Examples',
}

export default function RootLayout({
  children,
  petModal,
  clientModal
}: {
  children: React.ReactNode
  petModal: React.ReactNode
  clientModal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {petModal}
        {clientModal}
      </body>
    </html>
  )
}
