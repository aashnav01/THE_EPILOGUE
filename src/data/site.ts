/* ==========================================================================
   SITE DATA — the single source of truth for reveal state and event content.
   ========================================================================== */

export const SITE = {
  name: 'Paradigm Meet 2.0',
  eventDateLong: '30 October 2026',
  eventDateShort: '30 OCT 2026',
  revealDateLong: '27 October 2026 at 11:00 AM IST',
  revealDateShort: '27 OCT 2026 · 11:00 AM IST',
  /**
   * Actual reveal instant; event content appears when the visitor's clock
   * reaches this timestamp. Include the correct UTC offset for the event timezone.
   */
  posterReveal: '2026-10-27T11:00:00+05:30',
  /** Testing-only clock override. Set to null to use the visitor's real clock. */
  previewNow: null as string | null,
};

export interface ComingSoonSection {
  id: string;
  title: string;
  text: string;
  tone: 'orange' | 'dark' | 'cream';
}

/** Pre-reveal placeholder shown for each section until the reveal fires. */
export const COMING_SOON_SECTIONS: Record<string, ComingSoonSection> = {
  events: { id: 'events', title: 'Events', text: 'The line-up is on its way. Stay tuned!', tone: 'orange' },
  schedule: { id: 'schedule', title: 'Event Timeline', text: 'The full timeline will be shared soon.', tone: 'dark' },
};

export interface TimelineEntry {
  time: string;
  activity: string;
  location: string;
}

/** The day-of schedule. Times are as supplied — do not reorder or edit silently. */
export const TIMELINE: TimelineEntry[] = [
  { time: '10:00–10:30 AM', activity: 'Inauguration and live prayer song', location: 'Auditorium' },
  { time: '10:30–11:15 AM', activity: 'Trivia competition', location: 'Auditorium' },
  { time: '11:15 AM–12:15 PM', activity: 'Mentor Games', location: 'Designated playing area' },
  { time: '11:15 AM–1:30 PM', activity: 'Stalls open and Sports', location: 'Stall area and Sports ground' },
  { time: '1:30–2:30 PM', activity: 'Lunch for everyone; stalls closed', location: 'Designated dining area' },
  { time: '2:30–3:00 PM', activity: 'Talent show', location: 'Auditorium' },
  { time: '3:00–4:30 PM', activity: 'Epilogue', location: 'Auditorium' },
];

export interface RegistrationEntry {
  id: string;
  name: string;
  description: string;
  url: string;
}

/** Registration forms for the three activities. */
export const REGISTRATIONS: RegistrationEntry[] = [
  {
    id: 'trivia',
    name: 'Trivia',
    description: 'Register your team for the trivia competition.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdlVHcR88VAD2AGzgiyvum2wU5FoWZADl15WRXa3GK3I0QiAw/viewform?usp=publish-editor',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: 'One person from each paradigm should complete this form for their team.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScSqUODCbmbxRRLojE_Xj6mozvzagJACV-M3iLo8F-EDyzERg/viewform?usp=publish-editor',
  },
  {
    id: 'football',
    name: 'Football',
    description: 'One person from each paradigm should complete this form for their team.',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdxpU5odO-hZPMemt9En8k0yS3R9FHzibwGiD8_5Jf4sSXCUQ/viewform?usp=publish-editor',
  },
  {
    id: 'talent-show',
    name: 'Talent Show',
    description: 'Register to showcase your talent on stage! (Duration: 2 mins)',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScyUTdq4ZLuv1UV3vTtRs-3OJULXPw7rn6-fDtv3zrEuS-hEQ/viewform?usp=publish-editor',
  },
];

export interface ContactEntry {
  name: string;
  role?: string;
  phone: string;
  discordProfile: string;
}

export const CONTACTS: ContactEntry[] = [
  {
    name: 'Advait',
    role: 'Event Coordinator',
    phone: '+91 81064 12006',
    discordProfile: 'https://discord.com/users/767606947775643658',
  },
];

