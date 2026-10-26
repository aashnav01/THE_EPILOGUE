import { useEffect, useState } from 'react';
import { SITE } from '../data/site';
import { NAV_LINKS } from './Navigation';
import { Star } from './Star';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <Star className="footer__star" />
          <div>
            <p className="footer__name">{SITE.name}</p>
            <p className="footer__series">Stay tuned</p>
          </div>
        </div>
        <p className="footer__meta">Event date · {SITE.eventDateLong}</p>
        <nav aria-label="Footer">
          <ul className="footer__nav">
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#home" className="to-top" data-show={show} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <span aria-hidden="true">↑</span>
    </a>
  );
}
