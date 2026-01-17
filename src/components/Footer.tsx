import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-lg font-display font-bold">
              <span className="text-gradient">Rubicorn</span>
              <span className="text-foreground"> Technologies</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rubicorn Technologies Private Limited. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with{' '}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> in
            India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
