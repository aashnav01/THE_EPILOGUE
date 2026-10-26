import { SITE } from '../data/site';
import { Star } from './Star';

interface HeroProps {
  revealed: boolean;
}

export function Hero({ revealed }: HeroProps) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Star className="deco hero__star hero__star--1 twinkle" />
      <Star className="deco hero__star hero__star--2 twinkle" />

      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="eyebrow">{revealed ? 'Welcome to' : 'Coming soon'}</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">Paradigm</span>
            <span className="hero__title-line">Meet 2.0</span>
          </h1>
          <dl className="hero__facts">
            {!revealed && (
              <div>
                <dt>Poster reveal</dt>
                <dd>{SITE.revealDateShort}</dd>
              </div>
            )}
            <div>
              <dt>Event date</dt>
              <dd>{SITE.eventDateShort}</dd>
            </div>
          </dl>

          {revealed && <p className="hero__tagline">The poster is here!</p>}
        </div>
      </div>

      <svg className="hero__drip" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path
          d="M0 90V40c60 0 70 30 120 30s50-44 110-44 60 52 120 52 40-36 100-36 70 44 130 44 50-58 120-58 60 40 120 40 60-30 120-30 50 48 120 48 70-38 130-38 60 28 110 28 70-40 140-40V90z"
          fill="#101014"
        />
      </svg>
    </section>
  );
}
