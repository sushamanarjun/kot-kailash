export type Founder = {
  id: string;
  role: string;
  name: string;
  subtitle: string;
  bio: string[];
  image: string;
  imageAlt: string;
  review?: {
    text: string;
    attribution: string;
  };
};

export const founders: Founder[] = [
  {
    id: 'pushkar',
    role: 'Soul of Kot Kailash',
    name: 'Pushkar Singh Negi',
    subtitle: 'Soul of Kot Kailash',
    bio: [
      'Pushkar was born in Almora. These mountains are not a setting for him — they are home in the most literal and irreducible sense. A 2011 graduate of hotel management, he began his career at The Manor, New Delhi, one of the properties that defined what considered boutique hospitality could mean in India. He then became the founding General Manager of The Kumaon, Kasar Devi — building it from an empty hillside, assembling and training a team from scratch, and leading it to the international recognition it came to receive in Forbes, Architectural Digest, and publications across Europe and North America. He was handed a piece of land and made it a destination the world sought out.',
      'He left to build something of his own.',
      'Pushkar is on the property every day. He knows every family in Kunja Gunth, every trail through the forest, every window that catches the first light on the Nanda Devi range. The reason guests write after they leave — not to praise the room, but to say they miss the conversation — is him.',
    ],
    image: '/images/founder-pushkar-kot-kailash.webp',
    imageAlt: 'Pushkar Singh Negi, Co-Founder of Kot Kailash',
    review: {
      text: '"I was born in this village and have lived here most of my life. That was my first meeting with Pushkar Singh Negi. I have been impressed with his passion and drive ever since."',
      attribution: '— Ellias Thomas, Acton, Maine, USA · TripAdvisor',
    },
  },
  {
    id: 'sayed',
    role: 'Strategic Architect of the Vision',
    name: 'Sayed Aziz',
    subtitle: 'Strategic Architect of the Vision',
    bio: [
      'A 2001 graduate of hotel management, Sayed\'s formative career unfolded across the centre of Indian luxury hospitality: The Taj Mahal Palace & Tower Mumbai, The Oberoi Mumbai, The Taj Mahal Hotel New Delhi, The Park Kolkata. At The Manor, New Delhi — where he and Pushkar first crossed paths — he served as General Manager with additional responsibility for Revenue Management, developing the commercial intelligence that underpins any property serious about its future.',
      'He subsequently joined Royal Enfield in 2015 — building the company\'s global travel, corporate administration, facilities management and global events infrastructure, contributing in representing the brand at international motorcycle launches across multiple continents, and working alongside design and architecture teams on the greenfield development of the company\'s global headquarters in Chennai. He later moved to London, where he manages executive operations and private estates at the most senior level of the organisation.',
      'Sayed oversees Kot Kailash\'s strategic direction, international positioning, and brand architecture from London — with the particular understanding of what world-class private hospitality looks and feels like, not from the outside, but from deep within it.',
    ],
    image: '/images/founder-sayed-placeholder.webp',
    imageAlt: 'Sayed Aziz, Co-Founder of Kot Kailash',
  },
];

export const foundersCoda =
  'Pushkar is on the ridge every morning. Sayed is the reason the world will find it.';
