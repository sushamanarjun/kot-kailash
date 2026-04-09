export type TransportStat = {
  icon: string;
  time: string;
  route: string;
  detail: string;
};

export const transportStats: TransportStat[] = [
  {
    icon: '🚂',
    time: 'By Rail',
    route: 'Kathgodam → Shaukiyathal',
    detail: '4–5 . hours Ranikhet Express from Anand Vihar, Delhi dep. 22:20. The nearest railway head to the mountain world. The drive from Kathgodam begins the altitude climb.',
  },
  {
    icon: '✈️',
    time: 'By Air',
    route: 'Pantnagar Airport → Shaukiyathal',
    detail: '3.5–4 hours from Pantnagar, the nearest commercial airport. Direct taxis available.',
  },
  {
    icon: '🚗',
    time: 'By Road',
    route: 'Delhi → Shaukiyathal',
    detail: '8–9 hours from Delhi NCR. The mountain section begins after Haldwani.',
  },
];

export const transferPolicy = {
  label: 'Transfer Policy',
  text: 'We arrange private transfers from Kathgodam, Pantnagar, and Haldwani. The drive from Haldwani takes approximately three hours on mountain roads. We consider the journey to be the beginning of your stay, not a preamble to it.',
};

export const journeyNarrative = {
  label: 'The Drive',
  text: 'Guests who have driven themselves frequently comment on the transition that happens somewhere between Almora town and the ridge: the phone signal fades, the road narrows, the air changes. By the time you arrive at Kot Kailash, you have already begun to decompress.',
};
