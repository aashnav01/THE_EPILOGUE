import type { ComingSoonSection } from '../data/site';
import { Star } from './Star';

export function ComingSoon({ id, title, text, tone }: ComingSoonSection) {
  return (
    <section id={id} className={`section section--${tone} soon`} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className="section__head">
          <h2 id={`${id}-title`} className={`section__title${tone === 'dark' ? ' section__title--light' : ''}`}>
            {title}
          </h2>
        </header>
        <div className="soon__card">
          <Star className="soon__star twinkle" />
          <p className="soon__tag">Coming soon</p>
          <p className="soon__text">{text}</p>
        </div>
      </div>
    </section>
  );
}
