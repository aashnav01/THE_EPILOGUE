import { REGISTRATIONS } from '../data/site';
import { Star } from './Star';

export function Registrations() {
  return (
    <section id="registrations" className="section section--orange" aria-labelledby="registrations-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="registrations-title" className="section__title">Registrations</h2>
        </header>

        <div className="reg-grid">
          {REGISTRATIONS.map((r) => (
            <article className={`reg-card reg-card--${r.id}`} key={r.id}>
              <Star className="reg-card__star twinkle" />
              <h3 className="reg-card__name">{r.name}</h3>
              <p className="reg-card__desc">{r.description}</p>
              <a className="reg-card__btn" href={r.url} target="_blank" rel="noopener noreferrer">
                Register now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
