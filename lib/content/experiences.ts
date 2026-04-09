export type Experience = {
  numeral: string;
  name: string;
  description: string;
  duration: string;
};

export const experiences: Experience[] = [
  {
    numeral: 'I',
    name: 'Walk to Vriddh Jageshwar',
    description:
      'A forest trail through deodar and oak to one of the oldest Shiva temples in the Kumaon Himalayas. The trail has no signboards. Your host walks with you.',
    duration: 'On foot · Dawn or dusk · 45–60 min',
  },
  {
    numeral: 'II',
    name: 'Jageshwar Dham',
    description:
      'A cluster of 124 ancient temples in a deodar forest, 8km from the property. One of the twelve jyotirlingas. Morning puja is a different kind of silence.',
    duration: 'By vehicle · Morning · 30 min drive',
  },
  {
    numeral: 'III',
    name: 'Bread in a Kumaoni Home',
    description:
      'A village family bakes bhatt ki churkani, aloo gutuk, and mandua rotis for you on a wood fire. Not a demonstration. An invitation.',
    duration: 'Village walk · Afternoon · 2–3 hours',
  },
  {
    numeral: 'IV',
    name: 'Ridge Picnic',
    description:
      'A woven basket, a wool blanket, the ridge at your back, and Nanda Devi on a clear day. Lunch prepared from whatever the kitchen grew that morning.',
    duration: 'On the ridge · Midday · 2 hours',
  },
  {
    numeral: 'V',
    name: 'Kasar Devi & Binsar',
    description:
      'The hill that drew D.H. Lawrence, Bob Dylan, and Cat Stevens. Then the Binsar Wildlife Sanctuary, 2,420 metres, Himalayan views without interruption.',
    duration: 'By vehicle · Full day · 60 min drive',
  },
  {
    numeral: 'VI',
    name: 'Forest Walks',
    description:
      'The cedar and oak forests behind the property have trails that exist because animals made them. No circuit, no destination. Walk until the forest ends.',
    duration: 'On foot · Any time · Self-guided',
  },
];
