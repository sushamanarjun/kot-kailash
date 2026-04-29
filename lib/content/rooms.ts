export type Room = {
  id: string;
  type: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  inclusions: string;
  capacity: string;
  featured: boolean;
  isSmall?: boolean;
  exploreLabel: string;
};

export type Buyout = {
  title: string;
  description: string;
  note: string;
};

export const rooms: Room[] = [
  {
    id: 'kumaon-vann',
    type: 'Forest Cottage · Standalone · King Bedroom · The Signature Accommodation',
    name: 'Kumaon Vann',
    description: `Across the road from the main house, set into the rhododendron and oak forest, there is a cottage that does not announce itself. You find it rather than arrive at it. The forest closes behind you.

Kumaon Vann is the only accommodation at Kot Kailash that sits entirely within the forest. A private courtyard. A king bedroom. A wood-burning stove. A coffee machine for the hour before the world begins. And a freestanding bathtub positioned with a deliberateness that becomes apparent the first time you lie back in it: what you see, looking up, is snow on the Nanda Devi range.

There is no comparable view from a bathtub in the Kumaon Hills. There may not be one anywhere.

The cottage is designed for two people who want the forest entirely to themselves. No shared walls. No common corridors. The only schedule is the one the trees set; which is to say, the light, the birds, and the particular quality of silence at 7,800 feet that takes a day to recognise as the absence of everything you did not realise you were carrying.

Everyone who has stayed at Kumaon Vann says the same thing, in different words. It is worth the journey on its own.`,
    shortDescription: 'Set into the rhododendron and oak forest, Kumaon Vann is the only accommodation at Kot Kailash that sits entirely within the forest. It features a private courtyard, a king bedroom, a wood-burning stove, and a freestanding bathtub with a deliberate view of snow on the Nanda Devi range. Designed for two people who want the forest entirely to themselves, the only schedule here is the one the trees set.',
    image: '/images/kumaon-vann-room-kot-kailash.webp',
    imageAlt: 'Kumaon Vann — the signature forest cottage at Kot Kailash',
    gallery: [
      { src: '/images/kumaon-vann-room-kot-kailash.webp', alt: 'Kumaon Vann — forest cottage exterior' },
      { src: '/images/kumaon-vann-gallery-2.webp', alt: 'Kumaon Vann — king bedroom interior' },
      { src: '/images/kumaon-vann-gallery-3.webp', alt: 'Kumaon Vann — freestanding bathtub with Nanda Devi views' },
      { src: '/images/kumaon-vann-gallery-4.webp', alt: 'Kumaon Vann — private courtyard' },
    ],
    inclusions: 'All meals · Double occupancy',
    capacity: '2 guests',
    featured: true,
    exploreLabel: 'EXPLORE KUMAON VANN →',
  },
  {
    id: 'family-suite',
    type: 'Main House · First Floor · Two Bedrooms · A Complete Residence',
    name: 'The Family Suite',
    description: `The Family Suite does not perform heritage. It simply has it.

The entire upper floor of the main house is yours. Two bedrooms, each with its own ensuite shower room, each entered through a cobalt blue doorway; the Kumaoni colour that appears throughout, on the beams, the window frames, the doors, as though the house chose it once and has never reconsidered. The walls are plastered in the old method: mud, cow dung, a century of craft. They warm slowly and hold that warmth long after the fire has quieted. There is no system that replicates this. Guests invariably remark on how they sleep here, and they are not wrong to remark on it.

The common living room is arranged around a wood-burning stove and opens, in late afternoon, into one of the most particular qualities of this house: golden light entering through the blue double doors, moving across the jute floor and up the ochre walls, lighting the hanging plants from below. It is the kind of light that makes people put down their phones. On certain evenings, this room has held music; tabla, harmonium, candlelight, a singing bowl at the centre; and it is suited to that, too.

The observatory is glass on all sides. The valley falls away below it through successive ranges of blue-hazed hills. At night, and this is not a soft claim, the Milky Way is visible from the terrace. 

The private dining room has its own fireplace. The Library is directly accessible from the suite. A few steps up the ridge behind the house, the Himalayas appeared; unhurried, enormous, on the other side of everything.

The Family Suite is the right accommodation for people who want to be entirely private and entirely together. For a family who travels with intention. For friends who have been meaning to take a particular kind of trip for years. For the writer who requires a desk, a view, and a door that closes; but also company at dinner.

This is a Kumaoni home, restored without reinvention. It will not surprise you with novelty. It will do something less common: it will feel, within a day, as though you have always known it.

The Family Suite is adequate for larger groups or extended stays.`,
    shortDescription: 'The entire upper floor of the main house is yours. This complete residence features two bedrooms with ensuite shower rooms, a common living room arranged around a wood-burning stove, and a private dining room with its own fireplace. The suite also offers an all-glass observatory with views of successive ranges of blue-hazed hills, and direct access to the Kot Kailash Library. It is the right accommodation for people who want to be entirely private and entirely together.',
    image: '/images/family-suite-room-kot-kailash.webp',
    imageAlt: 'The Family Suite at Kot Kailash — private residence for families',
    gallery: [
      { src: '/images/family-suite-room-kot-kailash.webp', alt: 'The Family Suite — main house first floor' },
      { src: '/images/family-suite-gallery-2.webp', alt: 'The Family Suite — living room with wood-burning stove' },
      { src: '/images/family-suite-gallery-3.webp', alt: 'The Family Suite — glass observatory with valley views' },
      { src: '/images/family-suite-gallery-4.webp', alt: 'The Family Suite — private dining room with fireplace' },
    ],
    inclusions: 'All meals · Up to 4 guests',
    capacity: 'Up to 5 guests',
    featured: true,
    exploreLabel: 'EXPLORE SUITE →',
  },
  {
    id: 'kutir-suites',
    type: 'The Annexe · Four Suites · King Bedroom with Machan Loft · Himalayan Views',
    name: 'Kutir Suites',
    description: `The Kumaonis have always read the landscape from height. The watchtower; the machan; was how a community understood its valley: what was moving in the forest, where the weather was turning, what the mountains were doing before the clouds came in. The Kutir Suites are built around that instinct.

Each of the four suites in the Annexe, set approximately fifty metres from the main house; contains a king bedroom below and, above it, a sleeping loft built in the tradition of the machan: a platform that puts you above the room, above the ordinary sightlines, with the Himalayas framed in the window beyond. Children invariably claim it. So, often, do adults.

The suites are multi-level by design. A private living and dining area sits separately from the bedroom, which means a family or a group of close friends can be genuinely together and genuinely apart within the same accommodation. Togetherness that has architecture behind it is a different thing from togetherness by proximity.

The Himalayan views from the living room are not incidental. They are the orientation of the room; the reason the windows are where they are and the furniture faces the direction it does.`,
    shortDescription: 'Built around the Kumaoni instinct to read the landscape from height, these multi-level suites contain a king bedroom below and a sleeping loft above it, built in the tradition of the machan. A private living and dining area sits separately from the bedroom, offering families or groups a chance to be genuinely together and apart. The Himalayan views from the living room dictate the very orientation of the space.',
    image: '/images/kutir-suites-room-kot-kailash.webp',
    imageAlt: 'Kutir Suites — the annexe at Kot Kailash',
    gallery: [
      { src: '/images/kutir-suites-room-kot-kailash.webp', alt: 'Kutir Suites — annexe exterior' },
      { src: '/images/kutir-suites-gallery-2.webp', alt: 'Kutir Suites — machan sleeping loft' },
      { src: '/images/kutir-suites-gallery-3.webp', alt: 'Kutir Suites — king bedroom below the loft' },
      { src: '/images/kutir-suites-gallery-4.webp', alt: 'Kutir Suites — Himalayan views from living area' },
    ],
    inclusions: 'All meals · Double occupancy',
    capacity: 'Up to 3 guests',
    featured: false,
    isSmall: true,
    exploreLabel: 'EXPLORE SUITE →',
  },
  {
    id: 'kumaoni-suites',
    type: 'Main House · Ground Floor · Two Suites · Century-Old Stone Construction',
    name: 'Kumaoni Suites',
    description: `The first thing that happens in the morning, before anything else, is the light.

It enters through the carved wooden windows and lands on the red wall; not diffused, not ambient, but precise: the exact shape of the frame, the decorative arch, the shadow of whatever is growing on the sill, all of it projected onto the timber and plaster as though the room itself were being slowly read. This is dhoop senkna at 7,800 feet — the Kumaoni ritual of sitting in the morning sun — except here it finds you in bed before you have decided to be awake.

The Kumaoni Suites occupy the ground floor of the main house; the century-old stone building whose walls have been hand-pressed with red clay and whose ceiling beams, painted deep crimson, have been doing their work across a hundred Himalayan winters. The flooring is new wide-plank wood, laid with care. The bathrooms have been rebuilt to a high standard. What has not been touched is the structure itself, the proportion of the rooms, the orientation of the windows, or the colour the building chose for itself long before we arrived.

Each suite has a living area and an ensuite bathroom. The verandah; shared between them, opening onto the stone courtyard; faces the valley and the sunset. There is a wooden chair there, and a stool the right height for a book, and in the evening the light arrives horizontally through the trees and makes reading feel like the only reasonable thing.

The courtyard itself is where the bonfire is lit. Where people sit at the edge and look out over the forest without saying very much.

These are heritage rooms, restored without apology to their origins. The new is in service of the old. That is the only principle the restoration followed.`,
    shortDescription: 'Occupying the ground floor of the century-old main house, these suites feature hand-pressed red clay walls and deep crimson ceiling beams that have survived a hundred Himalayan winters. Each suite has a living area and an ensuite bathroom, opening onto a shared stone courtyard that faces the valley and the sunset. These are true heritage rooms, restored without apology to their origins, where the new is strictly in service of the old.',
    image: '/images/kumaoni-suites-room-kot-kailash.webp',
    imageAlt: 'Kumaoni Suites — the original main house at Kot Kailash',
    gallery: [
      { src: '/images/kumaoni-suites-room-kot-kailash.webp', alt: 'Kumaoni Suites — century-old stone main house' },
      { src: '/images/kumaoni-suites-gallery-2.webp', alt: 'Kumaoni Suites — red clay walls and carved wooden windows' },
      { src: '/images/kumaoni-suites-gallery-3.webp', alt: 'Kumaoni Suites — shared verandah facing the valley' },
      { src: '/images/kumaoni-suites-gallery-4.webp', alt: 'Kumaoni Suites — stone courtyard with bonfire setting' },
    ],
    inclusions: 'All meals · Double occupancy',
    capacity: '2 guests per suite',
    featured: false,
    isSmall: true,
    exploreLabel: 'EXPLORE SUITE →',
  },
];

export const buyout: Buyout = {
  title: 'Full Property Buyout',
  description:
    'Take all eight keys across three houses. Ideal for intimate weddings, corporate retreats, and family reunions that deserve an entire ridge.',
  note: 'Enquire for availability and custom programming.',
};
