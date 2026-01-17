import {
  Globe,
  Database,
  ShoppingCart,
  AppWindow,
  MousePointerClick,
  Smartphone,
  Layers,
  Palette,
  Search,
  Wrench,
  Server,
  Code,
} from 'lucide-react';
import { services, formatPrice, calculateDiscount } from '@/config/services';

const iconMap: { [key: string]: React.ElementType } = {
  Globe,
  Database,
  ShoppingCart,
  AppWindow,
  MousePointerClick,
  Smartphone,
  Apple: Smartphone, // Using Smartphone as fallback for Apple
  Layers,
  Palette,
  Search,
  Wrench,
  Server,
  Code,
};

const ServicesSection = () => {
  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            All Development Services
            <span className="text-gradient"> Under One Roof</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From websites to mobile apps, we deliver comprehensive digital solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid by Category */}
        {Object.entries(groupedServices).map(([category, categoryServices]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground/90">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {categoryServices.map((service) => {
                const Icon = iconMap[service.icon] || Code;
                const discountedPrice = calculateDiscount(service.price);

                return (
                  <div
                    key={service.id}
                    className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-success">
                          {formatPrice(discountedPrice)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(service.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
