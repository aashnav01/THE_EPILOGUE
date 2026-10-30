import { Star } from './Star';

interface Activity {
  name: string;
  featured?: boolean;
}

const ACTIVITIES: Activity[] = [
  { name: 'Trivia' },
  { name: 'Mentor Games' },
  { name: 'Sports' },
  { name: 'Talent Show', featured: true },
  { name: 'The Epilogue' },
];

export function EventsOverview() {
  return (
    <section id="events" className="section section--orange" aria-labelledby="events-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="events-title" className="section__title">Events</h2>
        </header>
        <div className="activity-grid">
          {ACTIVITIES.map((a) => (
            <article className={`activity-card${a.featured ? ' activity-card--featured' : ''}`} key={a.name}>
              <Star className="activity-card__star twinkle" />
              {a.featured && <span className="activity-card__badge">✦ NEW</span>}
              <h3 className="activity-card__name">{a.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
