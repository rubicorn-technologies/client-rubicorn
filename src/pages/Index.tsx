import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import CalculatorSection from '@/components/CalculatorSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import OffersSection from '@/components/OffersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <CalculatorSection />
        <WhyChooseUsSection />
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
