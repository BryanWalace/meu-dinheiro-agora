import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import './App.css';
import CtaSection from './components/CtaSection/CtaSection';
import ExploreSection from './components/ExploreSection/ExploreSection';
import AsvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import FinalCtaSection from './components/FinalCtaSection/FinalCtaSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CtaSection />
        <ExploreSection />
        <AsvantagesSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App;