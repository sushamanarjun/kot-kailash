export type Season = {
  period: string;
  name: string;
  description: string;
  image: string;
};

export const seasons: Season[] = [
  {
    period: 'Jan – Feb',
    name: 'Winter',
    description:
      'Snow on the oak. Wood fires in Kumaon Vann. The silence deepens to something unreasonable. Leopard tracks on the forest roads.',
    image: '/images/season-winter.webp',
  },
  {
    period: 'Mar – Apr',
    name: 'Buransh',
    description:
      'The rhododendrons turn the forest red. Tehni uses buransh in drinks and syrups. The mountain turns red before it turns green.',
    image: '/images/season-buransh.webp',
  },
  {
    period: 'May – Jun',
    name: 'Clarity',
    description:
      '22 degrees while the plains approach 45. Kaafal and Hisalu in the forest. The valley mist clears by nine.',
    image: '/images/season-clarity.webp',
  },
  {
    period: 'Jul – Aug',
    name: 'Monsoon',
    description:
      'Mist fills the valley from below, leaving the ridge above it. Rain on the stone roof. The clouds arise from below.',
    image: '/images/season-monsoon.webp',
  },
  {
    period: 'Sep – Oct',
    name: 'Harvest',
    description:
      "Tehni's finest produce. Kumaoni festivals. Wildlife active. The air at its very cleanest.",
    image: '/images/season-harvest.webp',
  },
  {
    period: 'Nov – Dec',
    name: 'Deep Winter',
    description:
      'Nanda Devi in full definition. Stars with no humidity. The Geminid meteor shower. The fire comes into its own.',
    image: '/images/season-deep-winter.webp',
  },
];
