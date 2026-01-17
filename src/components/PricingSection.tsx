import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { packages, formatPrice } from '@/config/services';

const PricingSection = () => {
  const handleSelectPlan = (packageId: string) => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-offer/10 text-offer text-sm font-medium mb-4">
            💰 Special Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Choose Your Perfect
            <span className="text-gradient"> Package</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pre-designed packages with everything you need to get started.
            All packages include New Year Special discount!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                pkg.popular
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-card shadow-lg shadow-primary/10'
                  : 'border-border/50 bg-card hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(pkg.originalPrice)}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-success/20 text-success text-sm font-semibold">
                      {pkg.discountPercent}% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-display font-bold text-gradient">
                      {formatPrice(pkg.discountedPrice)}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pkg.popular ? 'hero' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={() => handleSelectPlan(pkg.id)}
                >
                  Select This Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
