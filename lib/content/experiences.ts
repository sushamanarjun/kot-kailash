export type Experience = {
  numeral: string;
  name: string;
  description: string;       // short tagline shown beneath name
  longDescription: string;   // body copy — split on '\n\n' for paragraphs
  duration: string;
  price: string;
  priceNote: string;
  priceExtra?: string;
};

export const experiences: Experience[] = [
  {
    numeral: '01',
    name: 'Walk to Vriddh Jageshwar',
    description: 'The oldest Shiva temple in the Kumaon. Two kilometres from our grounds.',
    longDescription: `Before Lord Shiva descended to Jageshwar, he rested here. Vriddh Jageshwar — the Elder Jageshwar — predates the great temple complex below it, and remains entirely uncommercialized. The trail begins at the edge of Kot Kailash's grounds and enters the oak and rhododendron forest within minutes.

At dawn, the path belongs entirely to you. At dusk, the light through the trees is something the forest holds only briefly. Choose your hour with intention. The temple asks nothing of you but your presence.`,
    duration: '45–60 mins · Dawn or Dusk · Walking',
    price: '₹250',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Guided · Both timings available',
  },
  {
    numeral: '02',
    name: 'Jageshwar Temple Experience',
    description: 'One of the twelve Jyotirlingas. 121 temples in an ancient deodar grove.',
    longDescription: `The walk descends through oak and rhododendron forest — birdsong overhead, the occasional bark of a barking deer in the undergrowth, the air noticeably different at every turn of the trail. At the valley floor, the Jageshwar Dham complex emerges: 121 temples spanning centuries of devotion, set within a grove of ancient deodars.

This is not a guided tour. It is a walk through living history, at a pace the forest sets.`,
    duration: 'Half Day · Guided Walk & Drive',
    price: '₹1,000',
    priceNote: 'Per guest · Taxes inclusive',
  },
  {
    numeral: '03',
    name: 'Trek to Bimalkot Temple',
    description: 'A hilltop Durga shrine. The Himalayan horizon, unobstructed.',
    longDescription: `The trail to Bimalkot rewards effort with proportion. As you ascend through wildflowers pressing against rugged rock — a chorus of birds marking your progress — the landscape opens gradually until the temple of Bimal Kot reveals itself and the Nanda Devi range spreads across the horizon without interruption.

The return journey by vehicle allows you to absorb what you have seen in quiet. Some walks are for the body. This one is for both.`,
    duration: '4–6 Hours · On Foot · Return by Vehicle',
    price: '₹750',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Guided · Return transfer included',
  },
  {
    numeral: '04',
    name: 'Morning Yoga',
    description: 'First fifteen minutes, our invitation. The rest, yours to keep.',
    longDescription: `Our in-house yoga master opens each session with fifteen complimentary minutes — an orientation to posture, breath, and the particular quiet that altitude brings to practice. The full forty-five minute session continues with individual guidance: corrections offered without instruction, tips for carrying stillness back into daily life.

Practice on the ridge terrace when the weather allows. The Nanda Devi range at that hour is its own teacher.`,
    duration: '45 Minutes · Daily · Indoor or Ridge Terrace',
    price: '₹1,500',
    priceNote: 'Per guest · Full session',
    priceExtra: 'First 15 minutes complimentary',
  },
  {
    numeral: '05',
    name: 'Kumaoni Culinary Class',
    description: 'The spices of this ridge. The hands that have always known them.',
    longDescription: `Authentic Kumaoni cooking does not begin with a recipe. It begins with understanding the spice — where it came from, what it does slowly, how it changes when the altitude is this high and the air this clean.

Our chef leads a ninety-minute class grounded in the traditions of Kunja Gunth. You will cook. You will eat what you cooked. You will take the knowledge home — and it will taste different there, because you will remember where you learned it.`,
    duration: '90 Minutes · With Our In-House Chef',
    price: '₹850',
    priceNote: 'Per person · Per session',
  },
  {
    numeral: '06',
    name: 'Jata Ganga Waterfall',
    description: 'Water falling from the roots of a tree. The dreadlocks of Lord Shiva.',
    longDescription: `The descent to Jata Ganga follows a winding forest path to a waterfall of unusual character — its waters cascade from the exposed roots of a towering tree, and local belief holds this as an echo of Lord Shiva's matted locks releasing the sacred Ganges.

The waterfall changes with the season: full-throated in the monsoon, intimate and contemplative in the cold months. Our guide will tell you which version awaits on the day you go.`,
    duration: '2 Hours · On Foot · Guided',
    price: '₹250',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Character varies by season',
  },
  {
    numeral: '07',
    name: 'Basu Udiyar Caves',
    description: 'The cave where a sage chose stillness over everything else.',
    longDescription: `The walk descends through oak and rhododendron forest until the trees give way to a sprawling grass meadow — and at its edge, a small cave known as Basu Udiyar. Sitaram Baba called this place home, spending his days in quiet contemplation and communion with the natural world.

The cave is dimly lit, the silence inside it particular. The grass fields surrounding it are some of the most beautiful in the Kumaon. Bring nothing. Leave nothing. The place asks only that you notice it.`,
    duration: '2 Hours · On Foot · Guided',
    price: '₹250',
    priceNote: 'Per guest · Taxes inclusive',
  },
  {
    numeral: '08',
    name: 'Kumaoni Food Trail',
    description: 'A local kitchen. A traditional hearth. A meal unchanged for a century.',
    longDescription: `The Food Trail takes you to a village home in the Kumaon — not as an observer, but as a guest at the table. You will see how traditional methods of preparation have remained unchanged across generations, cook alongside the family if you wish, and share a meal that exists only here, only in this way.

Farm-to-table is not a phrase here. It is the only arrangement anyone has ever known.`,
    duration: 'Half Day · Village Visit · Guided',
    price: '₹1,000',
    priceNote: 'Per guest · Taxes inclusive',
  },
  {
    numeral: '09',
    name: 'Village Picnic',
    description: 'The vantage point. The valley below. Nothing required of you.',
    longDescription: `Not every experience needs a destination. The Village Picnic takes you to the finest vantage point on the Shaukiyathal ridge — a private afternoon, with the valley stretched below and the forest around you, for two guests seeking quiet together or a family who simply want to be held by the landscape for a few hours.

Nature's carnival, as we call it, provides the entertainment. We provide the rest.`,
    duration: 'Afternoon · Private · The Ridge',
    price: '₹1,000',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Snacks & refreshments included',
  },
];
