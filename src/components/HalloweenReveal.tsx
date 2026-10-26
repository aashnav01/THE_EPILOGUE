import { useEffect, useRef, useState } from 'react';
import { SITE } from '../data/site';

export function HalloweenReveal() {
  const [posterOpen, setPosterOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (posterOpen && !dialog.open) dialog.showModal();
    if (!posterOpen && dialog.open) dialog.close();
  }, [posterOpen]);

  return (
    <section className="halloween-reveal" aria-labelledby="halloween-reveal-title">
      <div className="wrap halloween-reveal__inner">
        <header className="halloween-reveal__heading">
          <p className="eyebrow">THE EPILOGUE</p>
          <h2 id="halloween-reveal-title" className="section__title">The official poster</h2>
          <p className="halloween-reveal__intro">Join us for a day of games, music, and treats.</p>
          <dl className="halloween-reveal__details">
            <div><dt>Event date</dt><dd>{SITE.eventDateLong}</dd></div>
            <div><dt>Venue</dt><dd>NGIT AUDITORIUM</dd></div>
          </dl>
        </header>

        <div className="halloween-poster">
          <svg className="halloween-poster__arrow" viewBox="0 0 180 100" aria-hidden="true">
            <path d="M6 12c20 57 80 82 145 55" />
            <path d="m135 55 18 12-19 10" />
          </svg>
          <svg className="halloween-poster__bat halloween-poster__bat--one" viewBox="0 0 120 60" aria-hidden="true">
            <path d="M60 25c-5-9-13-14-22-15l4 12C32 12 21 9 11 11l13 18C14 26 6 29 2 35c13-4 24-2 34 8 7 7 16 9 24 2 8 7 17 5 24-2 10-10 21-12 34-8-4-6-12-9-22-6l13-18c-10-2-21 1-31 11l4-12c-9 1-17 6-22 15z" />
          </svg>
          <svg className="halloween-poster__bat halloween-poster__bat--two" viewBox="0 0 120 60" aria-hidden="true">
            <path d="M60 25c-5-9-13-14-22-15l4 12C32 12 21 9 11 11l13 18C14 26 6 29 2 35c13-4 24-2 34 8 7 7 16 9 24 2 8 7 17 5 24-2 10-10 21-12 34-8-4-6-12-9-22-6l13-18c-10-2-21 1-31 11l4-12c-9 1-17 6-22 15z" />
          </svg>
          <button
            className="halloween-poster__trigger"
            type="button"
            aria-label="View the official poster full size"
            onClick={() => setPosterOpen(true)}
          >
            <span className="halloween-poster__frame">
              <img className="halloween-poster__image" src="./poster.jpeg" alt={`${SITE.name} official event poster`} />
            </span>
            <span className="halloween-poster__hint">Tap or click to enlarge</span>
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="poster-dialog"
        aria-label={`${SITE.name} official poster`}
        onClose={() => setPosterOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          className="poster-dialog__close"
          type="button"
          aria-label="Close enlarged poster"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
        <img src="./poster.jpeg" alt={`${SITE.name} official event poster, enlarged`} />
      </dialog>
    </section>
  );
}
