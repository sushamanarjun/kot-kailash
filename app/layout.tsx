import type { Metadata } from 'next';
import { cormorant, jost } from '@/lib/fonts';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kotkailash.com'),
  title: {
    default: 'Kot Kailash Kumaon — A Heritage Ridge Sanctuary at 7,800 Feet',
    template: '%s · Kot Kailash Kumaon',
  },
  description:
    'A century-old Kumaoni house on a ridge at 7,800 feet. Shaukiyathal, Almora, Uttarakhand. Eight keys. Founded by two veterans of India\'s finest hospitality.',
  keywords: [
    'heritage hotel Almora',
    'boutique hotel Kumaon',
    'luxury stay Uttarakhand',
    'Shaukiyathal resort',
    'Kumaoni homestay',
    'mountain retreat India',
    'Kot Kailash',
    'heritage property Almora',
    'clean air hotel India',
    'Jageshwar dham accommodation',
  ],
  authors: [{ name: 'Kot Kailash Kumaon' }],
  creator: 'Kot Kailash Kumaon',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kot Kailash Kumaon',
    title: 'Kot Kailash Kumaon — A Heritage Ridge Sanctuary at 7,800 Feet',
    description:
      'A century-old Kumaoni house on a ridge at 7,800 feet. Eight keys. Professionalized Intimacy.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Kot Kailash — the Shaukiyathal ridge at 7,800 feet, Almora, Uttarakhand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kot Kailash Kumaon — A Heritage Ridge Sanctuary',
    description:
      'A century-old Kumaoni house on a ridge at 7,800 feet. Eight keys. Professionalized Intimacy.',
    images: ['/og-default.jpg'],
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
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <CustomCursor />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
