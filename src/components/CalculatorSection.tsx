import { useMemo } from 'react';
import { Calculator, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { services, formatPrice, NEW_YEAR_DISCOUNT } from '@/config/services';
import { useSelectedServices } from '@/context/SelectedServicesContext';

const CalculatorSection = () => {
  const { selectedServices, toggleService } = useSelectedServices();

  const { originalTotal, discountedTotal, savingsPercent } = useMemo(() => {
    const original = selectedServices.reduce((sum, serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);

    const discounted = Math.round(original * (1 - NEW_YEAR_DISCOUNT));
    const savings = original > 0 ? Math.round(NEW_YEAR_DISCOUNT * 100) : 0;

    return {
      originalTotal: original,
      discountedTotal: discounted,
      savingsPercent: savings,
    };
  }, [selectedServices]);

  const handleGetQuote = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <section id="calculator" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Build Your Own Plan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Customize Your
            <span className="text-gradient"> Perfect Solution</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Select the services you need and get an instant quote with our
            New Year Special discount applied automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Services Selection */}
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(groupedServices).map(([category, categoryServices]) => (
              <div key={category} className="rounded-2xl bg-card border border-border/50 p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categoryServices.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <label
                        key={service.id}
                        className={`relative flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-border/50 hover:border-primary/50 hover:bg-card'
                        }`}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleService(service.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-foreground text-sm">
                              {service.name}
                            </span>
                            <span className="text-sm font-semibold text-primary whitespace-nowrap">
                              {formatPrice(service.price)}
                            </span>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-card border border-border/50 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      Your Quote
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedServices.length} service(s) selected
                    </p>
                  </div>
                </div>
              </div>

              {/* Selected Services */}
              <div className="p-6 border-b border-border/50 max-h-[200px] overflow-y-auto">
                {selectedServices.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Select services to see your quote
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {selectedServices.map((serviceId) => {
                      const service = services.find((s) => s.id === serviceId);
                      if (!service) return null;
                      return (
                        <li
                          key={serviceId}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-success" />
                            <span className="text-muted-foreground">
                              {service.name}
                            </span>
                          </div>
                          <span className="text-foreground font-medium">
                            {formatPrice(service.price)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="p-6 space-y-4">
                {/* Original Price */}
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Original Price</span>
                  <span className={`font-medium ${originalTotal > 0 ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {formatPrice(originalTotal)}
                  </span>
                </div>

                {/* Discount */}
                {originalTotal > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-success">New Year Discount</span>
                    <span className="text-success font-semibold">
                      -{savingsPercent}%
                    </span>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-foreground">
                      Final Price
                    </span>
                    <span
                      className={`text-2xl font-display font-bold text-gradient ${
                        discountedTotal !== originalTotal ? 'price-update' : ''
                      }`}
                    >
                      {formatPrice(discountedTotal)}
                    </span>
                  </div>
                  {originalTotal > 0 && (
                    <p className="text-sm text-success mt-1 text-right">
                      You save {formatPrice(originalTotal - discountedTotal)}!
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-4"
                  onClick={handleGetQuote}
                  disabled={selectedServices.length === 0}
                >
                  Get This Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
