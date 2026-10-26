import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HalloweenReveal } from './components/HalloweenReveal';
import { ComingSoon } from './components/ComingSoon';
import { EventsOverview } from './components/EventDetails';
import { Timeline } from './components/Timeline';
import { Registrations } from './components/Registrations';
import { ContactUs } from './components/ContactUs';
import { BackToTop, Footer } from './components/Footer';
import { COMING_SOON_SECTIONS } from './data/site';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const { revealed } = useReveal();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero revealed={revealed} />
        {revealed && <HalloweenReveal />}
        {revealed ? <EventsOverview /> : <ComingSoon {...COMING_SOON_SECTIONS.events} />}
        {revealed ? <Timeline /> : <ComingSoon {...COMING_SOON_SECTIONS.schedule} />}
        <Registrations />
        <ContactUs />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
