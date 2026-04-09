export type Testimonial = {
  text: string;
  author: string;
  initials: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    text: '"In the morning, climbing the stairs and looking off in the darkness — awaiting the first glimpse of sun bathing the slope of Nanda Devi — this is, indeed, a magical experience every traveller should put on their bucket list."',
    author: 'Ellias Thomas · Acton, Maine, USA',
    initials: 'E',
    source: 'TripAdvisor',
  },
  {
    text: '"The scenery is something you can\'t capture fully in photos — it\'s calm, expansive, and almost therapeutic. We ended up extending our trip."',
    author: 'Ms. Mitali',
    initials: 'M',
    source: 'Booking.com',
  },
  {
    text: '"The food — simply outstanding. The Kumaoni meals here are hands down some of the best we\'ve ever had. Every dish felt comforting and special."',
    author: 'Abhimanyu Nayyar · New Delhi',
    initials: 'A',
    source: 'TripAdvisor · Google ★★★★★',
  },
];
