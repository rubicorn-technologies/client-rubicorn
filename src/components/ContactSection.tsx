import { useState, useEffect, useMemo } from 'react';
import { Send, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useSelectedServices } from '@/context/SelectedServicesContext';
import { services, formatPrice, NEW_YEAR_DISCOUNT } from '@/config/services';

const WHATSAPP_NUMBER = '917672010211';
const PHONE_NUMBER = '+91 89789 43122';
const EMAIL = 'contact@rubicorn.in';

const ContactSection = () => {
  const { toast } = useToast();
  const { selectedServices } = useSelectedServices();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Get selected service names
  const selectedServiceNames = useMemo(() => {
    return selectedServices
      .map((id) => services.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  }, [selectedServices]);

  // Calculate total price
  const { originalTotal, discountedTotal } = useMemo(() => {
    const original = selectedServices.reduce((sum, serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);
    const discounted = Math.round(original * (1 - NEW_YEAR_DISCOUNT));
    return { originalTotal: original, discountedTotal: discounted };
  }, [selectedServices]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message with all form data
    let message = `Hi! I'm interested in Rubicorn Technologies services.\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    
    if (selectedServiceNames) {
      message += `\n*Services Interested In:*\n${selectedServiceNames}\n`;
      message += `\n*Quote:*\n`;
      message += `Original Price: ${formatPrice(originalTotal)}\n`;
      message += `New Year Offer Price: ${formatPrice(discountedTotal)}\n`;
      message += `You Save: ${formatPrice(originalTotal - discountedTotal)} (${Math.round(NEW_YEAR_DISCOUNT * 100)}% OFF)\n`;
    }
    
    if (formData.message) {
      message += `\n*Message:*\n${formData.message}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');

    toast({
      title: 'Redirecting to WhatsApp!',
      description: "You'll be connected with our team shortly.",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I am here to know about the latest services by Rubicorn Technologies."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${PHONE_NUMBER.replace(/\s/g, '')}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${EMAIL}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Start Your
            <span className="text-gradient"> Project?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us today for a free consultation and quote.
            We're here to bring your ideas to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Auto-filled Services from Calculator */}
              {selectedServiceNames && (
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Services Interested In
                  </label>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <p className="text-sm text-foreground mb-2">{selectedServiceNames}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground line-through">{formatPrice(originalTotal)}</span>
                      <span className="text-primary font-semibold">{formatPrice(discountedTotal)}</span>
                      <span className="text-success text-xs">Save {Math.round(NEW_YEAR_DISCOUNT * 100)}%</span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Contact Buttons */}
            <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full justify-start gap-3"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="phone"
                  size="lg"
                  className="w-full justify-start gap-3"
                  onClick={handleCall}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {PHONE_NUMBER}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start gap-3"
                  onClick={handleEmail}
                >
                  <Mail className="w-5 h-5" />
                  {EMAIL}
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Address</p>
                    <p className="text-sm text-muted-foreground">
                      Rubicorn Technologies Pvt. Ltd.
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      {EMAIL}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
