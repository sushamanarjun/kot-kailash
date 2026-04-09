export type Room = {
  id: string;
  type: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  inclusions: string;
  capacity: string;
  featured: boolean;
  isSmall?: boolean;
};

export type Buyout = {
  title: string;
  description: string;
  note: string;
};

export const rooms: Room[] = [
  {
    id: 'kumaon-vann',
    type: 'Signature Forest Cottage · 1 Key · Complete Seclusion',
    name: 'Kumaon Vann',
    description:
      'A freestanding bathtub positioned so that what you see when you look up is the snow peaks of the Himalayas. A wood-fired burner. A private courtyard bonfire. Set into the rhododendron and oak forest. The only schedule is the one the forest sets.',
    image: '/images/room-kumaon-vann.webp',
    imageAlt: 'Kumaon Vann — the signature forest cottage at Kot Kailash',
    inclusions: 'All meals · Double occupancy',
    capacity: '2 guests',
    featured: true,
  },
  {
    id: 'family-suite',
    type: 'Private Residence · 1 Key · Library Access',
    name: 'The Family Suite',
    description:
      'Two bedrooms. A glass observatory constructed almost entirely of light and landscape. A private dining room with its own fireplace, where meals feel like occasions rather than service. Direct access to the Kot Kailash Library.',
    image: '/images/room-family-suite.webp',
    imageAlt: 'The Family Suite at Kot Kailash — private residence for families',
    inclusions: 'All meals · Up to 4 guests',
    capacity: 'Up to 5 guests',
    featured: true,
  },
  {
    id: 'kutir-suites',
    type: 'The Annexe · 4 Keys · Machan Loft',
    name: 'Kutir Suites',
    description:
      'Multi-level family sanctuaries. A Machan loft built in the tradition of Kumaoni watchtowers. Surreal Himalayan views from the living room.',
    image: '/images/room-kutir-suites.webp',
    imageAlt: 'Kutir Suites — the annexe at Kot Kailash',
    inclusions: 'All meals · Double occupancy',
    capacity: '2 guests per suite',
    featured: false,
    isSmall: true,
  },
  {
    id: 'kumaoni-suites',
    type: 'Original Main House · 2 Keys',
    name: 'Kumaoni Suites',
    description:
      'Walls hand-pressed with red clay. Stone that has survived a hundred Himalayan winters. Valley views. Heritage restored without apology to its origins.',
    image: '/images/room-kumaoni-suites.webp',
    imageAlt: 'Kumaoni Suites — the original main house at Kot Kailash',
    inclusions: 'All meals · Double occupancy',
    capacity: '2 guests per suite',
    featured: false,
    isSmall: true,
  },
];

export const buyout: Buyout = {
  title: 'Full Property Buyout',
  description:
    'Take all eight keys across three houses. Ideal for intimate weddings, corporate retreats, and family reunions that deserve an entire ridge.',
  note: 'Enquire for availability and custom programming.',
};
