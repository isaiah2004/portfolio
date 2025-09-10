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
import { Home as HomeIcon, User, Code, Briefcase, Trophy, Send } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navLinks = [
  { href: '#home', label: 'Home', icon: HomeIcon },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#projects', label: 'Projects', icon: Code },
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
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <TooltipProvider>
          <Dock>
            {navLinks.map((link) => (
              <DockIcon key={link.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={link.href}>
                      <link.icon className="h-6 w-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
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
