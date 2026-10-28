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
          <div className="hero__title-wrap">
            <h1 id="hero-title" className="hero__title">
              <span className="hero__title-line">The</span>
              <span className="hero__title-line">Epilogue</span>
            </h1>
            <a
              className="hero__insta"
              href="https://www.instagram.com/explore/tags/paradigm-meet2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram: #paradigm-meet2"
            >
              <svg className="hero__insta-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
              </svg>
              #paradigm-meet2
            </a>
          </div>
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
