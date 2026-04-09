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
    role: 'The Soul of the Terrain · On the Ridge Every Morning',
    name: 'Pushkar Singh Negi',
    subtitle: 'Born in Almora. These mountains are home.',
    bio: [
      'Pushkar began his hospitality career at The Manor New Delhi, one of the properties that defined what considered boutique hospitality could mean in India. He then became the founding General Manager of The Kumaon, Kasar Devi — taking it from a piece of land to a completed property. The Kumaon was subsequently recognised in Forbes, Architectural Digest, and awarded a Michelin Key.',
      'He left to build something of his own. Kot Kailash Kumaon is what he built. He is on the property every day. He knows every family in the village of Kunja Gunth, every trail in the forest, every window that catches the first light of Nanda Devi.',
      'He is the reason guests write after they leave — not to praise the room, but to say they miss the conversation.',
    ],
    image: '/images/founder-pushkar.webp',
    imageAlt: 'Pushkar Singh Negi, Co-Founder and GM of Kot Kailash',
    review: {
      text: '"I was born in this village and have lived here most of my life. That was my first meeting with Pushkar Singh Negi. I have been impressed with his passion and drive ever since."',
      attribution: '— Ellias Thomas, Acton, Maine, USA · TripAdvisor',
    },
  },
];

export const foundersCoda =
  'Pushkar is on the ridge every morning. Sayed is the reason the world will find it.';
