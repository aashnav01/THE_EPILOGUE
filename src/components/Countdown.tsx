import { useEffect, useMemo, useState } from 'react';
import { SITE } from '../data/site';
import { Star } from './Star';

const TARGET = Date.parse(SITE.posterReveal); // poster reveal (absolute instant)

/**
 * Testing aid: add ?now=2026-10-26T00:00:00+05:30 to the URL to preview the
 * "reveal is here" state. Without it, the real clock is used.
 */
function clockOffset(): number {
  try {
    const q = new URLSearchParams(window.location.search).get('now');
    const t = q ? Date.parse(q) : NaN;
    return Number.isFinite(t) ? t - Date.now() : 0;
  } catch {
    return 0;
  }
}

function useNow() {
  const offset = useMemo(clockOffset, []);
  const [now, setNow] = useState(() => Date.now() + offset);
  useEffect(() => {
    let id: number;
    const tick = () => {
      setNow(Date.now() + offset);
      // re-align to the next whole second so the display never drifts
      id = window.setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
    };
    tick();
    const onVis = () => document.visibilityState === 'visible' && setNow(Date.now() + offset);
    document.addEventListener('visibilitychange', onVis);
    return () => { clearTimeout(id); document.removeEventListener('visibilitychange', onVis); };
  }, [offset]);
  return now;
}

const pad = (n: number) => String(n).padStart(2, '0');
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? '' : 's'}`;

export function Countdown() {
  const now = useNow();
  const revealed = now >= TARGET;

  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  // Screen-reader text changes at most once a minute and is not a live region,
  // so assistive tech reads the current value on demand without per-second chatter.
  const srText = useMemo(
    () => `${plural(days, 'day')}, ${plural(hours, 'hour')} and ${plural(minutes, 'minute')} until the ${SITE.name} poster reveal on ${SITE.revealDateLong}.`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [days, hours, minutes],
  );

  const units = [
    { v: days, l: days === 1 ? 'Day' : 'Days' },
    { v: hours, l: hours === 1 ? 'Hour' : 'Hours' },
    { v: minutes, l: minutes === 1 ? 'Minute' : 'Minutes' },
    { v: seconds, l: seconds === 1 ? 'Second' : 'Seconds' },
  ];

  return (
    <section id="countdown" className="countdown" aria-labelledby="countdown-title">
      <div className="wrap countdown__inner">
        <h2 id="countdown-title" className="countdown__title">
          {revealed ? <>The wait is over!</> : <>Poster reveal in</>}
        </h2>

        {!revealed ? (
          <>
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
          </>
        ) : (
          <p className="countdown__msg">
            The poster reveal is here. Event details are coming soon, so keep an eye on this page.
          </p>
        )}
      </div>
    </section>
  );
}
