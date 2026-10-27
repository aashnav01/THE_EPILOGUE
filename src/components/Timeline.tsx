import { TIMELINE } from '../data/site';
import { Star } from './Star';

const BREAK_ACTIVITIES = ['Lunch for everyone; stalls closed'];
const HIGHLIGHT_ACTIVITIES = ['Talent show'];

/** Projector-friendly schedule: high contrast, large text, lunch break called out. */
export function Timeline() {
  return (
    <section id="schedule" className="section section--dark" aria-labelledby="schedule-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="schedule-title" className="section__title section__title--light">The Day at a Glance</h2>
          <p className="timeline__sub">Event Timeline </p>
        </header>

        <ol className="timeline">
          {TIMELINE.map((entry, i) => {
            const isBreak = BREAK_ACTIVITIES.includes(entry.activity);
            const isHighlight = HIGHLIGHT_ACTIVITIES.includes(entry.activity);
            return (
              <li key={i} className={`timeline__row${isBreak ? ' timeline__row--break' : ''}${isHighlight ? ' timeline__row--highlight' : ''}`}>
                <Star className="timeline__star" />
                {isHighlight && <span className="timeline__badge">✦ NEW</span>}
                <span className="timeline__time">{entry.time}</span>
                <span className="timeline__activity">{entry.activity}</span>
                <span className="timeline__location">{entry.location}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
