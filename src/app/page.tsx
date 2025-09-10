import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import AwardsSection from '@/components/sections/awards-section';
import ContactSection from '@/components/sections/contact-section';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { Home as HomeIcon, User, Code, Briefcase, Trophy, Send, AppWindow } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: AppWindow },
  { href: '#awards', label: 'Awards', icon: Trophy },
  { href: '#contact', label: 'Contact', icon: Send },
];


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <TooltipProvider>
          <Dock>
            {navLinks.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full flex items-center justify-center bg-transparent hover:bg-accent",
                      )}
                    >
                      <item.icon className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
      <Footer />
    </div>
  );
}
