import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Paul Isaiah
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground">
          Software Development Engineer | AI & Robotics Enthusiast
        </p>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          A passionate and driven developer specializing in building intelligent systems. From developing custom AI-powered tools to leading robotics projects, I love bringing innovative ideas to life through code.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
