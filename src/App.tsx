import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { ComingSoon } from './components/ComingSoon';
import { BackToTop, Footer } from './components/Footer';
import { COMING_SOON_SECTIONS } from './data/site';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Countdown />
        {COMING_SOON_SECTIONS.map((s) => <ComingSoon key={s.id} {...s} />)}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
