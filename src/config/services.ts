// Services configuration with pricing (INR)
// Easy to edit prices later

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  features: string[];
  popular?: boolean;
}

export const NEW_YEAR_DISCOUNT = 0.40; // 40% off

export const services: Service[] = [
  // Web Development
  {
    id: 'static-website',
    name: 'Static Website',
    description: 'Fast, secure, and SEO-friendly static websites',
    price: 15000,
    category: 'Web Development',
    icon: 'Globe',
  },
  {
    id: 'dynamic-website',
    name: 'Dynamic Website',
    description: 'Interactive websites with CMS and databases',
    price: 35000,
    category: 'Web Development',
    icon: 'Database',
  },
  {
    id: 'ecommerce-website',
    name: 'E-commerce Website',
    description: 'Full-featured online stores with payment integration',
    price: 75000,
    category: 'Web Development',
    icon: 'ShoppingCart',
  },
  {
    id: 'web-application',
    name: 'Web Applications',
    description: 'Custom web apps with complex functionality',
    price: 100000,
    category: 'Web Development',
    icon: 'AppWindow',
  },
  {
    id: 'landing-page',
    name: 'Landing Pages',
    description: 'High-converting landing pages for campaigns',
    price: 12000,
    category: 'Web Development',
    icon: 'MousePointerClick',
  },
  // App Development
  {
    id: 'android-app',
    name: 'Android Apps',
    description: 'Native Android applications',
    price: 80000,
    category: 'App Development',
    icon: 'Smartphone',
  },
  {
    id: 'ios-app',
    name: 'iOS Apps',
    description: 'Native iOS applications for iPhone & iPad',
    price: 90000,
    category: 'App Development',
    icon: 'Apple',
  },
  {
    id: 'hybrid-app',
    name: 'Hybrid Apps',
    description: 'Cross-platform apps for Android & iOS',
    price: 120000,
    category: 'App Development',
    icon: 'Layers',
  },
  // Other Services
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'Beautiful and intuitive user interface designs',
    price: 25000,
    category: 'Other Services',
    icon: 'Palette',
  },
  {
    id: 'seo-services',
    name: 'SEO Services',
    description: 'Search engine optimization for better rankings',
    price: 15000,
    category: 'Other Services',
    icon: 'Search',
  },
  {
    id: 'website-maintenance',
    name: 'Website Maintenance',
    description: 'Monthly maintenance and support packages',
    price: 5000,
    category: 'Other Services',
    icon: 'Wrench',
  },
  {
    id: 'hosting-domain',
    name: 'Hosting & Domain',
    description: 'Reliable hosting and domain registration',
    price: 8000,
    category: 'Other Services',
    icon: 'Server',
  },
  {
    id: 'custom-software',
    name: 'Custom Software Development',
    description: 'Tailored software solutions for your business',
    price: 150000,
    category: 'Other Services',
    icon: 'Code',
  },
];

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small businesses getting started online',
    originalPrice: 25000,
    discountedPrice: 15000,
    discountPercent: 40,
    features: [
      'Static Website (5 pages)',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      '1 Month Free Support',
      'Free Domain (1 Year)',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Great for growing businesses with dynamic needs',
    originalPrice: 65000,
    discountedPrice: 39000,
    discountPercent: 40,
    features: [
      'Dynamic Website with CMS',
      'Mobile Responsive Design',
      'Advanced SEO Optimization',
      'Contact & Inquiry Forms',
      'Social Media Integration',
      '3 Months Free Support',
      'Free Domain + Hosting (1 Year)',
      'Analytics Dashboard',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Complete solution for enterprises and e-commerce',
    originalPrice: 150000,
    discountedPrice: 90000,
    discountPercent: 40,
    features: [
      'E-commerce Website',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking System',
      'Advanced SEO & Analytics',
      'Mobile App (Android/iOS)',
      '6 Months Free Support',
      'Free Domain + Hosting (2 Years)',
      'Priority Support',
      'Custom Admin Panel',
    ],
  },
];

export const whyChooseUs = [
  {
    title: 'Affordable Pricing',
    description: 'Get premium quality development at budget-friendly prices without compromising on features.',
    icon: 'IndianRupee',
  },
  {
    title: 'Custom Solutions',
    description: 'Every project is tailored to your specific requirements and business goals.',
    icon: 'Settings',
  },
  {
    title: 'Modern Technology',
    description: 'We use the latest technologies and frameworks to build scalable, future-proof solutions.',
    icon: 'Cpu',
  },
  {
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality or attention to detail.',
    icon: 'Zap',
  },
  {
    title: 'Ongoing Support',
    description: '24/7 support and maintenance to keep your digital assets running smoothly.',
    icon: 'HeadphonesIcon',
  },
  {
    title: 'SEO-Friendly',
    description: 'All our websites are built with SEO best practices for better search rankings.',
    icon: 'TrendingUp',
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscount = (price: number): number => {
  return Math.round(price * (1 - NEW_YEAR_DISCOUNT));
};
