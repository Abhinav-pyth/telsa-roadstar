import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemoTimeline from './components/DemoTimeline';
import TechnologySection from './components/TechnologySection';
import Specifications from './components/Specifications';
import VariantComparison from './components/VariantComparison';
import PricingSection from './components/PricingSection';
import VideoGallery from './components/VideoGallery';
import ProductionTimeline from './components/ProductionTimeline';
import SourcesSection from './components/SourcesSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <DemoTimeline />
        <TechnologySection />
        <Specifications />
        <VariantComparison />
        <PricingSection />
        <VideoGallery />
        <ProductionTimeline />
        <SourcesSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
