import { Star } from './Star';

const ACTIVITIES = [
  'Trivia',
  'Mentor Games',
  'Sports',
  'Stalls',
  'Speeches',
];

export function EventsOverview() {
  return (
    <section id="events" className="section section--orange" aria-labelledby="events-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="events-title" className="section__title">Events</h2>
        </header>
        <div className="activity-grid">
          {ACTIVITIES.map((name) => (
            <article className="activity-card" key={name}>
              <Star className="activity-card__star twinkle" />
              <h3 className="activity-card__name">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
