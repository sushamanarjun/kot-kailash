import type { Metadata } from 'next';

const BASE_URL = 'https://kotkailash.com';

export function buildMetadata(overrides: Partial<Metadata> & {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const { title, description, path = '/', ogImage = '/og-default.jpg', ...rest } = overrides;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_IN',
      siteName: 'Kot Kailash Kumaon',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...rest,
  };
}

export const hotelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Kot Kailash',
  url: BASE_URL,
  description:
    'A century-old Kumaoni heritage home restored as an experiential retreat at 7,800 ft, 2 km from Vriddh Jageshwar, Almora.',
  image: [
    `${BASE_URL}/images/kot-kailash-ridge-shaukiyathal.jpg`,
    `${BASE_URL}/og-default.jpg`,
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Village Kunja Gunth, Shaukiyathal',
    addressLocality: 'Almora',
    addressRegion: 'Uttarakhand',
    postalCode: '263623',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.6555',
    longitude: '79.8410',
  },
  telephone: '+919650264905',
  email: 'info@kotkailash.com',
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '61',
    bestRating: '5',
    worstRating: '1',
  },
  numberOfRooms: '8',
  checkinTime: '14:00',
  checkoutTime: '11:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Mountain View', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Heritage Property', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Forest Setting', value: true },
  ],
  sameAs: [
    'https://www.tripadvisor.in/Hotel_Review-g679053-d25168310-Reviews-Kot_Kailash',
    'https://g.page/r/Cb3YvvO1nV6fEB0/review',
  ],
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ellias Thomas' },
      reviewBody:
        'In the morning, climbing the stairs and looking off in the darkness — awaiting the first glimpse of sun bathing the slope of Nanda Devi — this is, indeed, a magical experience every traveller should put on their bucket list.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: 'TripAdvisor' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mitali' },
      reviewBody:
        "The scenery is something you can't capture fully in photos — it's calm, expansive, and almost therapeutic. We ended up extending our trip.",
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: 'Booking.com' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Abhimanyu Nayyar' },
      reviewBody:
        'The food — simply outstanding. The Kumaoni meals here are hands down some of the best we have ever had.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: 'TripAdvisor' },
    },
  ],
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kot Kailash',
  description: 'Heritage boutique property at 7,800 feet in Shaukiyathal, near Jageshwar, Almora, Uttarakhand.',
  url: BASE_URL,
  telephone: '+919650264905',
  email: 'info@kotkailash.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Village Kunja Gunth, Shaukiyathal',
    addressLocality: 'Almora',
    addressRegion: 'Uttarakhand',
    postalCode: '263623',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.6555',
    longitude: '79.8410',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
};
