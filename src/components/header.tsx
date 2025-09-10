"use client";

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block")}>
       <div className="container w-3/4 mx-auto rounded-full bg-background/20 backdrop-blur-lg shadow-lg border border-white/10">
        <div className="flex h-16 items-center justify-between px-6">
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
       </div>
    </header>
  );
};

export default Header;
