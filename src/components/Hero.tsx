import { SITE } from '../data/site';
import { Star } from './Star';

/** A poster-shaped placeholder: the real poster stays hidden until the reveal. */
function PosterTease() {
  return (
    <div
      className="tease"
      role="img"
      aria-label={`The poster is a secret until the reveal on ${SITE.revealDateLong}.`}
    >
      <div className="tease__inner" aria-hidden="true">
        <Star className="tease__star tease__star--1 twinkle" />
        <Star className="tease__star tease__star--2 twinkle" />
        <span className="tease__q">?</span>
        <p className="tease__label">Poster reveal</p>
        <p className="tease__date">{SITE.revealDateShort}</p>
      </div>
      <span className="tease__hint" aria-hidden="true">Coming soon</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Star className="deco hero__star hero__star--1 twinkle" />
      <Star className="deco hero__star hero__star--2 twinkle" />

      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="eyebrow">Stay tuned</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">Paradigm</span>
            <span className="hero__title-line">Meet 2.0</span>
          </h1>

          <dl className="hero__facts">
            <div>
              <dt>Poster reveal</dt>
              <dd>{SITE.revealDateShort}</dd>
            </div>
            <div>
              <dt>Event details</dt>
              <dd>Coming soon</dd>
            </div>
          </dl>

          <p className="hero__tagline">Big news is on the way</p>
        </div>

        <div className="hero__poster">
          <PosterTease />
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
