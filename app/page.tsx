import type { Metadata } from 'next';
import { buildMetadata, hotelJsonLd, localBusinessJsonLd } from '@/lib/seo';
import JsonLd from '@/components/ui/JsonLd';
import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import FullBleedImage from '@/components/sections/FullBleedImage';
import Rooms from '@/components/sections/Rooms';
import Experiences from '@/components/sections/Experiences';
import Tehni from '@/components/sections/Tehni';
import Seasons from '@/components/sections/Seasons';
import TwoUp from '@/components/sections/TwoUp';
import SacredArc from '@/components/sections/SacredArc';
import Founders from '@/components/sections/Founders';
import Testimonials from '@/components/sections/Testimonials';
import PressBar from '@/components/sections/PressBar';
import Reserve from '@/components/sections/Reserve';

export const metadata: Metadata = buildMetadata({
  title: 'Kot Kailash | Heritage Retreat near Jageshwar, Almora',
  description:
    'A century-old Kumaoni home at 7,800 ft. 8 suites, Himalayan views, and hyperlocal dining at Tehni. 2 km from Jageshwar. Direct bookings get the best rate.',
  path: '/',
  ogImage: '/og-default.jpg',
  keywords: [
    'heritage hotel Almora',
    'boutique hotel Kumaon',
    'Shaukiyathal',
    'luxury stay Uttarakhand',
    'Kot Kailash',
    'heritage property Almora',
    'Kumaoni house',
    'mountain retreat 7800 feet',
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={hotelJsonLd} />
      <JsonLd data={localBusinessJsonLd} />

      <h1 className="sr-only">Kumaoni Heritage Retreat near Jageshwar, Almora</h1>
      <Hero />
      <Manifesto compact />
      <FullBleedImage
        src="/images/ridge-fullbleed.jpg"
        alt="The Shaukiyathal ridge at dawn — Kot Kailash, Almora, Uttarakhand"
        caption="The Shaukiyathal Ridge · 7,800 Feet"
      />
      <Rooms compact />
      <Experiences preview />
      <Tehni compact />
      <Seasons />
      <TwoUp />
      <SacredArc compact />
      <Testimonials />
      <PressBar />
      <Founders compact />
      <Reserve />
    </>
  );
}
