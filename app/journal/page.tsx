import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import Reserve from '@/components/sections/Reserve';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = buildMetadata({
  title: 'Journal | Kot Kailash — Kumaon, Seasons, and the Ridge',
  description:
    'Notes from the Shaukiyathal ridge — on Kumaoni seasons, the Shauk community, Jageshwar, and the rhythms of life at 7,800 feet.',
  path: '/journal',
  keywords: [
    'Kumaon travel writing',
    'Shaukiyathal ridge notes',
    'Jageshwar temple guide',
    'Kumaoni seasons',
    'Uttarakhand travel blog',
  ],
});

const placeholderPosts = [
  {
    id: 1,
    category: 'The Seasons',
    title: 'Why October is the month the ridge makes its argument.',
    date: 'October 2024',
    excerpt:
      'The monsoon pulls back. The Himalayan panorama clears. The temperature sits between 14 and 22 degrees. Every morning, the same conversation about whether to leave.',
    readTime: '4 min read',
  },
  {
    id: 2,
    category: 'The Community',
    title: 'What the Shauk traders knew that the plains have forgotten.',
    date: 'September 2024',
    excerpt:
      'The routes between the Gangetic plains and Tibet were not trade routes in the modern sense. They were relationships. The Shauk community was built around the patience to maintain them.',
    readTime: '6 min read',
  },
  {
    id: 3,
    category: 'Jageshwar',
    title: 'A hundred and twenty-four temples. Two kilometres from the bedroom.',
    date: 'August 2024',
    excerpt:
      'Jageshwar Dham is not a pilgrimage site the way Haridwar is. It does not ask for urgency. The stone has been here for over a thousand years. It has learned how to wait.',
    readTime: '5 min read',
  },
  {
    id: 4,
    category: 'Tehni',
    title: 'On bhatt, mandua, and the crops that survived because no one marketed them.',
    date: 'July 2024',
    excerpt:
      'Black soybeans. Finger millet. Wild herbs that grow on the edges of the terraced fields. These ingredients survived precisely because they were too local, too specific, too Kumaoni to export.',
    readTime: '5 min read',
  },
  {
    id: 5,
    category: 'The Restoration',
    title: 'Mud plaster and the craftsmen who still know how to press it.',
    date: 'June 2024',
    excerpt:
      'The old technique uses red clay, rice husk, and cow dung — pressed in layers with the flat of the palm. Two craftsmen in the village still know how. One of them is seventy-three.',
    readTime: '7 min read',
  },
  {
    id: 6,
    category: 'The Seasons',
    title: 'The buransh blooms for three weeks. Most people miss it.',
    date: 'March 2024',
    excerpt:
      'Rhododendron arboreum. The Uttarakhand state tree. At Shaukiyathal it flowers in late March, when the night temperature is still below 10 degrees. The flowers become sherbet the same day they are picked.',
    readTime: '3 min read',
  },
];

const JOURNAL_IMAGES = [
  '/images/shaukiyathal-ridge-kot-kailash.jpg',        // featured post
  '/images/tehni-kitchen-interior-kot-kailash.jpg',  // grid post 1
  '/images/kot-kailash-ridge-shaukiyathal.jpg',       // grid post 2
  '/images/kumaon-vann-room-kot-kailash.jpeg',         // grid post 3
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--ink)',
          padding: '160px 64px 80px',
        }}
      >
        <h1 className="sr-only">
          Journal — Notes from Kot Kailash, Shaukiyathal, Kumaon
        </h1>
        <div style={{ maxWidth: '640px' }}>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '11px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Journal
          </span>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Notes from the ridge.
            <br />
            <em style={{ fontStyle: 'normal', color: 'var(--gold-pale)' }}>
              Written in season.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              maxWidth: '480px',
            }}
          >
            On Kumaon, the Shauk community, the temples, the crops, and the
            conditions that make Shaukiyathal worth writing about.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section
        style={{
          background: 'var(--forest)',
          padding: '80px 64px',
        }}
      >
        <RevealWrapper>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
            className="featured-grid"
          >
            <style>{`
              @media (max-width: 900px) { .featured-grid { grid-template-columns: 1fr !important; } }
            `}</style>

            <div>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Latest · {placeholderPosts[0].category}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {placeholderPosts[0].title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.85,
                  marginBottom: '24px',
                }}
              >
                {placeholderPosts[0].excerpt}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  {placeholderPosts[0].date} · {placeholderPosts[0].readTime}
                </span>
              </div>
            </div>

            {/* Featured post image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/3',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                src={JOURNAL_IMAGES[0]}
                alt="Journal — Kot Kailash"
                fill
                loading="lazy"
                sizes="(max-width:680px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* Posts grid */}
      <section
        style={{
          background: 'var(--parchment)',
          padding: '100px 64px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
          }}
          className="posts-grid"
        >
          <style>{`
            @media (max-width: 1100px) { .posts-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 640px)  { .posts-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {placeholderPosts.slice(1).map((post, i) => (
            <RevealWrapper key={post.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article
                style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--fog)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Post image */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '3/2',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={JOURNAL_IMAGES[(i + 1) % JOURNAL_IMAGES.length]}
                    alt={post.category}
                    fill
                    loading="lazy"
                    sizes="(max-width:640px) 100vw, (max-width:1100px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Post content */}
                <div
                  style={{
                    padding: '28px 28px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--ink)',
                      lineHeight: 1.35,
                      marginBottom: '14px',
                      flex: 1,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.75,
                      marginBottom: '20px',
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--mist)',
                      borderTop: '1px solid var(--fog)',
                      paddingTop: '14px',
                      display: 'block',
                    }}
                  >
                    {post.date} · {post.readTime}
                  </span>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>

        {/* Coming soon note */}
        <RevealWrapper>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: 'var(--mist)',
              textAlign: 'center',
              marginTop: '64px',
            }}
          >
            New notes from the ridge, written in each season.
          </p>
        </RevealWrapper>
      </section>

      <Reserve />
    </>
  );
}
