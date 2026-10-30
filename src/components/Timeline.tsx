import { useEffect, useMemo, useState } from 'react';
import { SITE, TIMELINE } from '../data/site';
import { Star } from './Star';

const BREAK_ACTIVITIES = ['Lunch for everyone; stalls closed'];
const HIGHLIGHT_ACTIVITIES = ['Talent show'];

/* ---------------------------------------------------------------------------
   Time-range parser
   Handles formats like "10:00–10:30 AM", "11:15 AM–12:15 PM", "3:00–4:30 PM"
   Returns [startMinutes, endMinutes] from midnight on event day.
   --------------------------------------------------------------------------- */
function parseTimeRange(time: string): [number, number] {
  // Split on en-dash or hyphen
  const parts = time.split(/\s*[–-]\s*/);
  if (parts.length !== 2) return [0, 0];

  const [rawStart, rawEnd] = parts;

  // Extract period (AM/PM) from end — it always has one
  const endMatch = rawEnd.match(/(\d{1,2}:\d{2})\s*(AM|PM)/i);
  if (!endMatch) return [0, 0];
  const endTime = endMatch[1];
  const endPeriod = endMatch[2].toUpperCase();

  // Start may or may not have its own AM/PM
  const startMatch = rawStart.match(/(\d{1,2}:\d{2})\s*(AM|PM)?/i);
  if (!startMatch) return [0, 0];
  const startTime = startMatch[1];
  const startPeriod = startMatch[2]?.toUpperCase() ?? endPeriod; // inherit from end if missing

  const toMinutes = (t: string, p: string) => {
    let [h, m] = t.split(':').map(Number);
    if (p === 'AM' && h === 12) h = 0;
    else if (p === 'PM' && h !== 12) h += 12;
    return h * 60 + m;
  };

  return [toMinutes(startTime, startPeriod), toMinutes(endTime, endPeriod)];
}

type Status = 'upcoming' | 'live' | 'done';

/** Determine each timeline entry's status based on current time. */
function getStatuses(now: number): Status[] {
  // Build a Date on the event day to compare
  const eventDate = new Date(SITE.eventDateLong + ' 00:00:00');
  const nowDate = new Date(now);

  // If not event day, everything is upcoming or done
  const isEventDay =
    nowDate.getFullYear() === eventDate.getFullYear() &&
    nowDate.getMonth() === eventDate.getMonth() &&
    nowDate.getDate() === eventDate.getDate();

  if (!isEventDay) {
    const isPast = now > eventDate.getTime() + 24 * 60 * 60 * 1000;
    return TIMELINE.map(() => (isPast ? 'done' : 'upcoming'));
  }

  const currentMinutes = nowDate.getHours() * 60 + nowDate.getMinutes();

  return TIMELINE.map((entry) => {
    const [start, end] = parseTimeRange(entry.time);
    if (currentMinutes >= end) return 'done';
    if (currentMinutes >= start) return 'live';
    return 'upcoming';
  });
}

/** Hook: re-evaluates timeline statuses every 30 s. */
function useTimelineStatuses(): Status[] {
  // Respect the same preview clock as useReveal
  const offset = useMemo(() => {
    try {
      const q = new URLSearchParams(window.location.search).get('now') ?? SITE.previewNow;
      const t = q ? Date.parse(q) : NaN;
      return Number.isFinite(t) ? t - Date.now() : 0;
    } catch {
      return 0;
    }
  }, []);

  const [statuses, setStatuses] = useState(() => getStatuses(Date.now() + offset));

  useEffect(() => {
    const tick = () => setStatuses(getStatuses(Date.now() + offset));
    tick();
    const id = setInterval(tick, 30_000);
    const onVis = () => document.visibilityState === 'visible' && tick();
    document.addEventListener('visibilitychange', onVis);
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', onVis); };
  }, [offset]);

  return statuses;
}

/** Projector-friendly schedule: high contrast, large text, lunch break called out. */
export function Timeline() {
  const statuses = useTimelineStatuses();

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
            const status = statuses[i];
            const statusClass =
              status === 'live' ? ' timeline__row--live' :
                status === 'done' ? ' timeline__row--done' : '';
            return (
                <li key={i} className={`timeline__row${isBreak ? ' timeline__row--break' : ''}${isHighlight && status !== 'done' ? ' timeline__row--highlight' : ''}${statusClass}`}>
                  <Star className="timeline__star" />
                  {isHighlight && status !== 'done' && <span className="timeline__badge">✦ NEW</span>}
                  {status === 'live' && <span className="timeline__badge timeline__badge--live">● LIVE</span>}
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
