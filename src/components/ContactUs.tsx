import { CONTACTS } from '../data/site';

export function ContactUs() {
  return (
    <section id="contact" className="section section--dark" aria-labelledby="contact-title">
      <div className="wrap">
        <header className="section__head">
          <h2 id="contact-title" className="section__title section__title--light">Contact Us</h2>
        </header>

        <ul className="contact-grid">
          {CONTACTS.map((c) => (
            <li className="contact-card" key={c.name}>
              <p className="contact-card__name">{c.name}</p>
              {c.role && <p className="contact-card__role">{c.role}</p>}
              <p className="contact-card__prompt">Call Advait:</p>
              <a className="contact-card__phone" href={`tel:${c.phone.replace(/[^\d+]/g, '')}`}>
                {c.phone}
              </a>
              <a className="contact-card__link" href={c.discordProfile} target="_blank" rel="noopener noreferrer">
                Message on Discord
              </a>
            </li>
          ))}
          <li className="contact-card">
            <p className="contact-card__name">Official Discord</p>
            <p className="contact-card__role">Join the event community</p>
            <a
              className="contact-card__link"
              href="https://discord.com/invite/NGCdDfgMB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
