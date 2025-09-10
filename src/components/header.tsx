"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Github, Linkedin, Mail, Menu, Home, User, Code, Briefcase, Trophy, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: Code },
  { href: '#awards', label: 'Awards', icon: Trophy },
  { href: '#contact', label: 'Contact', icon: Send },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
            'text-foreground/70 hover:text-foreground',
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
      "fixed bottom-4 left-0 right-0 z-50 transition-all duration-300",
      "md:top-0 md:bottom-auto"
    )}>
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-bold text-primary">
            Paul Isaiah
          </a>
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
            <Dock>
              {navLinks.map((link) => (
                <TooltipProvider key={link.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DockIcon>
                        <a href={link.href}>
                          <link.icon className="h-6 w-6" />
                        </a>
                      </DockIcon>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </Dock>
        </div>
       </div>
    </header>
  );
};

export default Header;
