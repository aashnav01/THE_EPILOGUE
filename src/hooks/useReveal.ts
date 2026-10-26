import { useEffect, useMemo, useState } from 'react';
import { SITE } from '../data/site';

const TARGET = Date.parse(SITE.posterReveal);

/** Set SITE.previewNow or pass ?now=<ISO timestamp> to preview a reveal state. */
function clockOffset(): number {
  try {
    const q = new URLSearchParams(window.location.search).get('now') ?? SITE.previewNow;
    const t = q ? Date.parse(q) : NaN;
    return Number.isFinite(t) ? t - Date.now() : 0;
  } catch {
    return 0;
  }
}

/** Single centralized reveal state — every section reads this, not its own clock. */
export function useReveal() {
  const offset = useMemo(clockOffset, []);
  const [now, setNow] = useState(() => Date.now() + offset);

  useEffect(() => {
    let id: number;
    const tick = () => {
      setNow(Date.now() + offset);
      id = window.setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
    };
    tick();
    const onVis = () => document.visibilityState === 'visible' && setNow(Date.now() + offset);
    document.addEventListener('visibilitychange', onVis);
    return () => { clearTimeout(id); document.removeEventListener('visibilitychange', onVis); };
  }, [offset]);

  return { now, revealed: now >= TARGET, target: TARGET };
}
