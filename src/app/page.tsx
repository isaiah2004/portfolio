import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import AwardsSection from '@/components/sections/awards-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
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
      <Footer />
    </div>
  );
}
