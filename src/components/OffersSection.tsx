import { Sparkles, Clock, Percent, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OffersSection = () => {
  const handleGetOffer = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-offer/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-offer/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <div className="relative rounded-3xl border border-offer/30 bg-gradient-to-br from-card via-card to-offer/5 p-8 md:p-12 overflow-hidden shine">
            {/* Corner Badge */}
            <div className="absolute -top-2 -right-2 md:top-4 md:right-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-offer text-offer-foreground font-bold text-sm shadow-lg">
                <Clock className="w-4 h-4" />
                Limited Time
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-offer/20 mb-6">
                <Sparkles className="w-10 h-10 text-offer" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                🎉 New Year Special Offer
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Kickstart your digital journey with our biggest discount of the year.
                Get premium development services at unbeatable prices!
              </p>

              {/* Discount Display */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                {/* Before */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Actual Price</p>
                  <p className="text-3xl font-bold text-muted-foreground line-through">
                    Regular Rates
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-success/20">
                  <Percent className="w-6 h-6 text-success" />
                </div>

                {/* After */}
                <div className="text-center">
                  <p className="text-sm text-success mb-1">New Year Price</p>
                  <p className="text-4xl md:text-5xl font-display font-bold text-gradient">
                    40% OFF
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {[
                  'All Services Included',
                  'No Hidden Charges',
                  'Free Consultation',
                  'Priority Support',
                ].map((benefit, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground"
                  >
                    <Gift className="w-4 h-4 text-offer" />
                    {benefit}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="offer"
                size="xl"
                onClick={handleGetOffer}
                className="min-w-[200px]"
              >
                Claim Your Discount
                <Sparkles className="w-5 h-5" />
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                *Offer valid for a limited time. Terms & conditions apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
