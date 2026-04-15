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
      'The pull of home was always stronger. Kot Kailash was once his family\'s ancestral storehouse — farmers from the five-house village of Kailash Kot. He returned, restored the old house, and simply flipped the name of his native village. The childhood friends and cousins who went to the same school and played cricket in the same fields now run it alongside him. He lives on the property himself, moving between rooms as needed. This place is not a project for him — it is home.',
      'He is the reason guests write after they leave — not to praise the room, but to say they miss the conversation.',
    ],
    image: '/images/founder-pushkar-kot-kailash.webp',
    imageAlt: 'Pushkar Singh Negi, Co-Founder and GM of Kot Kailash',
    review: {
      text: '"I was born in this village and have lived here most of my life. That was my first meeting with Pushkar Singh Negi. I have been impressed with his passion and drive ever since."',
      attribution: '— Ellias Thomas, Acton, Maine, USA · TripAdvisor',
    },
  },
];

export const foundersCoda =
  'Pushkar is on the ridge every morning. Sayed is the reason the world will find it.';
