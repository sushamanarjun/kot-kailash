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
    route: 'Haldwani / Kathgodam → Shaukiyathal',
    detail: '4–5 hours. Ranikhet Express from Anand Vihar, Delhi dep. 22:20. The nearest railway head to the mountain world. Shaukiyathal is 90 kms (56 miles) from the station.',
  },
  {
    icon: '✈️',
    time: 'By Air · Pantnagar',
    route: 'Pantnagar Airport → Shaukiyathal',
    detail: '3.5–4 hours from Pantnagar, the nearest commercial airport.',
  },
  {
    icon: '✈️',
    time: 'By Air · Bareilly',
    route: 'Bareilly Airport → Shaukiyathal',
    detail: '5.5–6 hours from Bareilly Airport. Daily direct flights from Mumbai and Bengaluru.',
  },
  {
    icon: '🚗',
    time: 'By Road',
    route: 'Delhi → Shaukiyathal',
    detail: '9–10 hours from Delhi NCR. Approximately 400 km. The mountain section begins after Haldwani.',
  },
];

export const transferPolicy = {
  label: 'Transfer Policy',
  text: 'We arrange private airport and railway station transfers to the property. We have trusted cab suppliers, cab drivers who ferry our guests to Kot Kailash and around the Kumaon Hills safely in neat and clean cabs that are insured for passenger safety.',
};

export const journeyNarrative = {
  label: 'The Drive',
  text: 'Guests who have driven themselves frequently comment on the transition that happens somewhere between Bhimtal and the ridge: the phone signal fades, the road narrows, the air changes. By the time you arrive at Kot Kailash, you have already begun to decompress.',
};
