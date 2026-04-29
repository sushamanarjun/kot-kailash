import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import FaqPageClient from './FaqPageClient';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ | Kot Kailash — Heritage Retreat, Kumaon',
  description:
    'Frequently asked questions about Kot Kailash — property details, rooms, dining, amenities, nearby temples, policies, and how to reach us in Kumaon, Uttarakhand.',
  path: '/faq',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kot Kailash is a heritage retreat set at 7,800 feet in the Kumaon Himalayas — a restored estate of three structures, and centuries of mountain quiet. It is a place to slow down: to eat from the land, walk the ridge, and wake to unobstructed views of the Nanda Devi range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are situated in Shaukiyathal, in the Almora district of Uttarakhand — approximately 117 kms from Kathgodam railhead, 150 kms from Pantnagar Airport and 223 kms from Bareilly Airport. Detailed arrival guidance and transfer coordination are provided at the time of booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many rooms do you have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kot Kailash has eight keys across three distinct structures: the Kumaoni Suites, the Kutir Suites with their machan lofts, a two-bedroom Family Suite, and Kumaon Vann — a standalone forest cottage with a freestanding bathtub looking out toward Nanda Devi.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages does the team speak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our team speaks Kumaoni, Hindi, and English.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is housekeeping provided, and what bathroom amenities can guests expect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rooms are serviced daily, and the bathrooms are stocked with curated amenities. We also provide daily turndown service. If there is anything specific you require, our team is happy to arrange it in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there internet access at the property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer complimentary Wi-Fi throughout the property. We do, however, gently encourage guests to treat connectivity as optional — the ridge has a way of making the outside world feel quite distant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is car parking available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, complimentary parking is available on the estate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can accommodation be arranged for guests\' chauffeurs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Driver accommodation can be arranged on a chargeable basis. Please inform us at the time of booking so that we may prepare accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve non-vegetarian food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our kitchen — rooted in the Tehni philosophy of zero-kilometre, harvest-led cooking — works with seasonal proteins sourced with care. We do not serve beef or pork. All non-vegetarian proteins served at Kot Kailash are halal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a doctor accessible if needed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Medical consultation is available around the clock. The wellbeing of our guests is something we take seriously, and our team is equipped to assist in coordinating care promptly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there electric vehicle charging points at the property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide plug points suitable for charging both electric cars and electric bikes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are the nearest fuel stations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two petrol stations within easy reach: Garudabaanj at approximately 7 kilometres (20 minutes), and Barechhina at approximately 18 kilometres (30 minutes).',
      },
    },
    {
      '@type': 'Question',
      name: 'What conveniences are available nearby?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A small provisions shop sits just across the road from the property. For broader needs — an ATM, bank, pharmacy, cab services, bus connections, and a hospital — Panuwanaula is approximately 7 kilometres away, or about 20 minutes by road.',
      },
    },
    {
      '@type': 'Question',
      name: 'What temples and places of interest are in the area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kumaon foothills hold some of the most quietly extraordinary heritage in the Himalayan region. Nearby landmarks include: Vridh Jageshwar Temple (2 kms, 5 mins); Jageshwar Temple complex (10 kms, 15 mins); Vimal Kot Devi Temple (5 kms, 12 mins); Chitai Golu Devta Temple (25 kms, 45 mins); Nanda Devi Temple Almora (33 kms, 1 hour); Lakhudiyar Rock Art Caves (20 kms, 35 mins); Almora Zoo (25 kms, 45 mins); Katarmal Sun Temple (50 kms, 2 hours). Our team is happy to assist with guided excursions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kot Kailash pet-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Well-behaved pets are welcome at Kot Kailash. The property has its own resident dog, so guests travelling with animals should be comfortable in the company of other four-legged guests. A nominal housekeeping fee applies for guests arriving with pets. We ask that animals be kept on a lead in communal areas, and request that you inform us at the time of booking so that we may prepare your accommodation accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the property wheelchair accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We regret that the terrain and historic structure of Kot Kailash do not permit full wheelchair accessibility at this time. We are happy to discuss the specific requirements of any guest in advance to ensure the best possible experience within the property\'s constraints.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there age restrictions for guests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary guest must be 18 years of age or older to check in. Guests under 18 are warmly welcome when accompanied by an adult guardian.',
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageClient />
    </>
  );
}
