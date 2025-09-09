"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = '';

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
          className={cn(
            "rounded-md px-3 py-2 text-sm font-medium transition-colors",
            activeSection === link.href.substring(1)
              ? 'text-primary'
              : 'text-foreground/70 hover:text-foreground',
            isMobile && 'block w-full text-left'
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-lg" : "bg-background/0"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-primary">
              Paul Isaiah
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-1">
              <NavLinkItems />
            </nav>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/isaiah2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/paul-isaiah-ln/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:isaiahpaulapr1994@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="mt-8 flex flex-col space-y-2">
                  <NavLinkItems isMobile />
                  <div className="flex items-center justify-center gap-2 pt-4">
                     <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/isaiah2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://linkedin.com/in/paul-isaiah-ln/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="mailto:isaiahpaulapr1994@gmail.com" aria-label="Email">
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
