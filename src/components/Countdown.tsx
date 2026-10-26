import { useMemo } from 'react';
import { SITE } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import { Star } from './Star';

const pad = (n: number) => String(n).padStart(2, '0');
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? '' : 's'}`;

export function Countdown() {
  const { now, revealed, target } = useReveal();

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  // Screen-reader text changes at most once a minute and is not a live region,
  // so assistive tech reads the current value on demand without per-second chatter.
  const srText = useMemo(
    () => `${plural(days, 'day')}, ${plural(hours, 'hour')} and ${plural(minutes, 'minute')} until the poster reveal on ${SITE.revealDateLong}.`,
    [days, hours, minutes],
  );

  const units = [
    { v: days, l: days === 1 ? 'Day' : 'Days' },
    { v: hours, l: hours === 1 ? 'Hour' : 'Hours' },
    { v: minutes, l: minutes === 1 ? 'Minute' : 'Minutes' },
    { v: seconds, l: seconds === 1 ? 'Second' : 'Seconds' },
  ];

  if (revealed) return null;

  return (
    <section id="countdown" className="countdown" aria-labelledby="countdown-title">
      <div className="wrap countdown__inner">
        <h2 id="countdown-title" className="countdown__title">Poster reveal in</h2>
        <div className="countdown__units" role="timer" aria-live="off" aria-atomic="true">
          <p className="sr-only">{srText}</p>
          {units.map((u, i) => (
            <div className="countdown__unit-wrap" key={u.l} aria-hidden="true">
              <div className="countdown__unit">
                <span className="countdown__num">{i === 0 ? u.v : pad(u.v)}</span>
                <span className="countdown__label">{u.l}</span>
              </div>
              {i < units.length - 1 && <Star className="countdown__sep" />}
            </div>
          ))}
        </div>
        <p className="countdown__note">Until the poster reveal · {SITE.revealDateLong}</p>
      </div>
    </section>
  );
}
