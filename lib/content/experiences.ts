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
    description: 'The temple that preceded Jageshwar. Two kilometres into the forest.',
    longDescription: `Before Lord Shiva descended to Jageshwar, he rested here. Vriddh Jageshwar — the Elder Jageshwar — predates the great temple complex below it by five centuries, and remains entirely uncommercialized. The trail begins at the edge of Kot Kailash's grounds and enters the oak and rhododendron forest within minutes.

At dawn, the path belongs entirely to you. At dusk, the light through the trees holds briefly before it goes. Choose your hour with intention.`,
    duration: '45–60 mins · Dawn or Dusk · On Foot',
    price: '₹250',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Guided · Both timings available',
  },
  {
    numeral: '02',
    name: 'Jageshwar Dham',
    description: 'One of the twelve Jyotirlingas. 124 temples in an ancient deodar grove.',
    longDescription: `The walk descends through oak and rhododendron forest — birdsong overhead, the air noticeably different at every turn. At the valley floor, the Jageshwar Dham complex emerges: 124 temples spanning centuries of devotion, set within a grove of ancient deodars along the Jata Ganga river. Dating from the 7th to the 12th century, this is one of the most important Shaivite temple clusters in India.

This is not a guided tour. It is a walk through living history, at the pace the forest sets.`,
    duration: 'Half Day · Walk & Drive · Guided',
    price: '₹1,000',
    priceNote: 'Per guest · Taxes inclusive',
  },
  {
    numeral: '03',
    name: 'Trek to Bimalkot',
    description: 'A Durga shrine at the summit. The Himalayan panorama, unobstructed.',
    longDescription: `The trail to Bimalkot rewards effort with proportion. As you ascend through wildflowers and rock, the landscape opens gradually until the temple reveals itself and the Nanda Devi range spreads across the horizon without interruption. Trishul. Panchachuli. The full massif.

The return by vehicle allows you to absorb what you have seen in quiet. Some walks are for the body. This one is for both.`,
    duration: '4–6 Hours · On Foot · Return by Vehicle',
    price: '₹750',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Guided · Return transfer included',
  },
  {
    numeral: '04',
    name: 'Bird Watching at Dawn',
    description: 'Pushkar has been watching the birds on this ridge since long before Kot Kailash existed.',
    longDescription: `He goes out at dawn. The Shaukiyathal ridge sits within one of the richest avian corridors in the Kumaon Himalayas — the Black-headed Jay, the Himalayan Woodpecker, the White-throated Laughingthrush, the Ferruginous Flycatcher on passage. The forest at first light, before the day begins, is its own argument for being here.

On request, subject to Pushkar's availability.

A telescope, subject to availability, can be rented for guests who wish to watch the peaks after dark.`,
    duration: 'Dawn · With Pushkar · On the Ridge',
    price: 'By request',
    priceNote: 'Subject to availability',
  },
  {
    numeral: '05',
    name: 'Morning Yoga',
    description: 'The first fifteen minutes are our invitation. The rest is yours to keep.',
    longDescription: `Our in-house yoga practitioners open each session with a fifteen-minute orientation — posture, breath, and the particular quiet that altitude brings to practice. The full session continues with individual guidance, offered without performance.

On the ridge terrace when the weather allows. The Nanda Devi range at that hour requires no explanation. Subject to availability of our Yoga master.`,
    duration: '45 Minutes · On request · Ridge Terrace or Indoors',
    price: '₹1,500',
    priceNote: 'Per guest · Full session',
    priceExtra: 'First 15 minutes complimentary',
  },
  {
    numeral: '06',
    name: 'Kumaoni Culinary Class',
    description: 'The spices of this ridge. The hands that have always known them.',
    longDescription: `Authentic Kumaoni cooking does not begin with a recipe. It begins with understanding the spice — where it came from, what it does slowly, how it changes when the altitude is this high and the air this clean. Our chef leads a ninety-minute class grounded in the traditions of Kunja Gunth. You will cook. You will eat what you cooked. You will take the knowledge home — and it will taste different there, because you will remember where you learned it.`,
    duration: '90 Minutes · With Our In-House Chef',
    price: '₹850',
    priceNote: 'Per person · Per session',
  },
  {
    numeral: '07',
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
    numeral: '08',
    name: 'Basu Udiyar Caves',
    description: 'The cave where a sage chose stillness over everything else.',
    longDescription: `The trail descends through oak and rhododendron until the trees give way to a sprawling grass meadow — and at its edge, a small cave known as Basu Udiyar. Sitaram Baba called this place home, spending his days in quiet contemplation and communion with the natural world.

The grass fields surrounding it are some of the most beautiful in the Kumaon. Bring nothing. Leave nothing. The place asks only that you notice it.`,
    duration: '2 Hours · On Foot · Guided',
    price: '₹250',
    priceNote: 'Per guest · Taxes inclusive',
  },
  {
    numeral: '09',
    name: 'Village Picnic',
    description: 'The finest vantage point on the Shaukiyathal ridge. Nothing required of you.',
    longDescription: `Not every experience needs a destination. The Village Picnic takes you to the highest open point on the ridge — a private afternoon, with the valley stretched below and the forest around you. For two guests seeking quiet together, or a family who simply want to be held by the landscape for a few hours.

Nature provides the entertainment. We provide the rest.`,
    duration: 'Afternoon · Private · The Ridge',
    price: '₹1,000',
    priceNote: 'Per guest · Taxes inclusive',
    priceExtra: 'Snacks & refreshments included',
  },
  {
    numeral: '10',
    name: 'A Meal at the Source',
    description: "Pushkar's family home. Coal fire. Garden harvest. The kitchen that preceded this one.",
    longDescription: `In the village of Artola — the hamlet where Pushkar's family still farms — there is a kitchen where the food is cooked on coal, and everything on the table was growing in the garden that morning. This is where Kot Kailash's philosophy of zero-kilometre, harvest-led hospitality began, before it had a name.

This is offered quietly, for guests who understand what they are being invited into. It is not an experience that can be booked. It is an invitation that can be extended. Ask us.`,
    duration: 'By Arrangement · On Request Only',
    price: 'By invitation',
    priceNote: 'Ask us',
  },
];
