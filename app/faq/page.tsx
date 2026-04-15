import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import FaqPageClient from './FaqPageClient';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ | Kot Kailash — Heritage Retreat, Kumaon',
  description:
    'Frequently asked questions about Kot Kailash — property details, rooms, check-in, dining, amenities, policies, and how to reach us in Kumaon, Uttarakhand.',
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
        text: 'Kot Kailash is a heritage ridge property at 7,800 feet in the Kumaon Himalayas. Set across three heritage farmhouses with 8 guest rooms, the estate sits amid oak and rhododendron forest, terraced farms, and an ancient Shiva temple. It is a family-run retreat, not a hotel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where exactly is Kot Kailash located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Village Kunja Gunth, Shaukiyathal, District Almora, Uttarakhand — approximately 2.5 hours by road from Kathgodam railway station.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many rooms are there at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eight keys across three heritage houses — Ghar, Baithak, and Kothi. Each house has its own character and views; rooms vary in size and outlook.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of property is Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kot Kailash is a heritage farmstead converted into a guest retreat — a personal home, not a commercial hotel. At any given time only a small number of guests are on the property, which shapes the pace and the experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kot Kailash suitable for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The open grounds, forest trails, and nature-based experiences are well-suited to children. There are no dedicated kids' facilities, but the naturalist walks and farmstead activities are naturally engaging for young guests.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the stay at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All meals — breakfast, lunch, and dinner — are included, along with evening tea, evening bonfire, all listed Kot Kailash experiences, and gratuity. The rate is fully inclusive.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the check-in and check-out times at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can sometimes be arranged subject to availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum stay at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two nights is the minimum. We recommend three nights to properly absorb the altitude, the pace, and the experiences the property has to offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I extend my stay at Kot Kailash after arriving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, subject to availability. You are welcome to request an extension at check-in or by contacting the team during your stay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there heating in the rooms at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All rooms have heating arrangements for the winter months. Supplementary heaters are available on request during shoulder months when nights turn cold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Tehni — The Kitchen at Kot Kailash serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tehni serves Kumaoni home cooking — seasonal, local, and prepared fresh each day. There is no printed menu. The kitchen works around what is in season and the preferences guests share on arrival.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can dietary requirements be accommodated at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vegetarian, vegan, gluten-free, and Jain diets can all be accommodated. Please mention your requirements at the time of booking and again on arrival so the kitchen can plan accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alcohol served at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uttarakhand is a restricted state. No alcohol is served or permitted on the property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there Wi-Fi at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic connectivity is available in the common areas. Kot Kailash intentionally limits connectivity — the ridge is best experienced without a screen in hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is mobile network coverage like at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coverage is patchy, as expected at altitude. BSNL has the most consistent signal in the area. Airtel and Jio work intermittently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a doctor or medical facility near Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The nearest hospital is in Almora, approximately 40 km away. A comprehensive first-aid kit and emergency contacts are maintained at the property, and staff are trained in basic first aid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a swimming pool or gym at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The experience at Kot Kailash is centred on the forest, the ridge, the views, and slow living — not amenities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I reach Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The nearest railhead is Kathgodam, served by the Corbett Express and other trains from Delhi. From Kathgodam it is approximately 2.5 hours by road via Almora. Private cabs and shared taxis are available from the station.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an airport near Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pantnagar Airport is the nearest, roughly 3 hours away, with limited connections. Most guests fly into Delhi and travel onward by train or road — the overnight Corbett Express from Delhi makes for a comfortable journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Kot Kailash arrange airport or station transfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can arrange private cab transfers from Kathgodam or Haldwani on request. Transfer charges apply and should be confirmed when making your reservation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the nearest town to Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shaukiyathal is a small village. Almora, approximately 40 km away, is the nearest town with ATMs, pharmacies, a hospital, and shops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there ATMs near Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almora has multiple ATMs. We recommend carrying adequate cash before leaving the main road, as UPI signal can be unreliable en route and at the property.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cancellation policy at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cancellations are free if made more than 15 days before your arrival date. No refund is issued for cancellations within 15 days or for no-shows. The blackout period (20 Dec – 5 Jan) has stricter terms — no cancellation charge only if cancelled more than 90 days before arrival.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is smoking allowed at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smoking is not permitted inside rooms or common areas. A designated outdoor space is available for guests who smoke.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are pets allowed at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pets are not permitted at Kot Kailash at this time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kot Kailash accessible for guests with mobility limitations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The property involves uneven terrain, stone steps, and hillside paths. It is not recommended for guests with significant mobility challenges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make a reservation at Kot Kailash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reservations can be made via the Reserve page on the website at kotkailash.com/reserve, or by writing directly to stay@kotkailash.com. We respond to all enquiries personally.',
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
