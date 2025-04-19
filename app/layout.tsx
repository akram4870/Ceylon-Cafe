import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ceylon Cafe Vending',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  description: 'Premium Beverage Solutions',
  keywords: 'vending, coffee, tea, beverage, solutions',
  authors: [{ name: 'Ceylon Cafe Vending' }],
  creator: 'Ceylon Cafe Vending',
  publisher: 'Ceylon Cafe Vending',
  generator: 'v0.dev',
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