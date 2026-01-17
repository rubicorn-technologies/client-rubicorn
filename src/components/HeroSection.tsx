import { ArrowRight, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustBadges = [
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Shield, label: 'Affordable Pricing' },
  { icon: Clock, label: '24/7 Support' },
];

const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4 text-offer" />
            <span className="text-sm font-medium text-offer">
              New Year Special — 40% OFF All Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-slide-up">
            Transform Your Ideas Into
            <span className="block text-gradient glow-text">Digital Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
            Your trusted partner for Web Development, App Development, and Custom
            Software Solutions. Delivering excellence at affordable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Button
              variant="hero"
              size="xl"
              onClick={() => handleNavClick('#contact')}
              className="w-full sm:w-auto"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => handleNavClick('#services')}
              className="w-full sm:w-auto"
            >
              View Services
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-slide-up">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 float hidden lg:block" />
        <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-accent/20 rounded-xl -rotate-12 float hidden lg:block" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary/10 rounded-lg rotate-45 float hidden lg:block" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
