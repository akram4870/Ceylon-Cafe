import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import './globals.css';

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
    'Ceylon vending',
    'Nescafe machine Sri Lanka',
    'coffee machine Sri Lanka',
    'office coffee solutions',
    'coffee machine rental',
    'Beverage solutions'
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
};

const GA_TRACKING_ID = 'G-7MNKBXEQ60';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white">
        {children}
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}