/* ==========================================================================
   SITE DATA — the only place to edit while the site is in "coming soon" mode.
   ========================================================================== */

export const SITE = {
  name: 'Paradigm Meet 2.0',
  revealDateLong: '26 October 2026',
  revealDateShort: '26 OCT 2026',
  /**
   * Countdown target: the moment the poster is revealed. This is an absolute
   * instant (IST, +05:30), so it is correct on any phone in any timezone.
   * Currently the very start of 26 October — change the time here if the
   * reveal happens later in the day, e.g. '2026-10-26T18:00:00+05:30'.
   */
  posterReveal: '2026-10-26T00:00:00+05:30',
};

export interface ComingSoonSection {
  id: string;
  title: string;
  text: string;
  tone: 'orange' | 'dark' | 'cream';
}

/** Every section below the countdown. Ids match the nav links. */
export const COMING_SOON_SECTIONS: ComingSoonSection[] = [
  { id: 'events', title: 'Events', text: 'The line-up is on its way. Stay tuned!', tone: 'orange' },
  { id: 'schedule', title: 'Schedule', text: 'The full timeline will be shared soon.', tone: 'dark' },
  { id: 'registrations', title: 'Registrations', text: 'Sign-ups will open soon. Keep an eye on this page.', tone: 'orange' },
  { id: 'info', title: 'Event Info', text: 'Date, venue and all the details will be announced soon.', tone: 'cream' },
];
