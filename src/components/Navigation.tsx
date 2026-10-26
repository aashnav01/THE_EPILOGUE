import { useEffect, useRef, useState } from 'react';
import { SITE } from '../data/site';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'registrations', label: 'Register' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Escape closes the mobile menu; close if resized up to desktop
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    const mq = window.matchMedia('(min-width: 860px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => { window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, [open]);

  return (
    <header className="nav" data-open={open}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={() => setOpen(false)}>
          <span className="nav__brand-name">{SITE.name}</span>
          <span className="nav__brand-date">{SITE.eventDateShort}</span>
        </a>
        <button
          ref={toggleRef}
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav__burger" aria-hidden="true"><i /><i /><i /></span>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="nav-menu" className="nav__menu" aria-label="Main">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
