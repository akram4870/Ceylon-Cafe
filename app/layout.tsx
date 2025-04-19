import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ceylon Cafe Vending',
    template: '%s | Ceylon Cafe Vending'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  description: 'Premium office coffee vending solutions with free machine offers',
  keywords: [
    'coffee vending',
    'free coffee machine',
    'office coffee',
    'NESCAFÉ solutions',
    'Ceylon vending'
  ],
  authors: [{ 
    name: 'Ceylon Cafe Vending', 
    url: 'https://ceyloncafe.online' 
  }],
  openGraph: {
    title: 'Ceylon Cafe Vending',
    description: 'Get a free coffee machine for your office - no hidden fees',
    url: 'https://ceyloncafe.online',
    siteName: 'Ceylon Cafe Vending',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceylon Cafe Vending',
    description: 'Premium office coffee solutions',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}