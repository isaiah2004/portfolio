import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          Paul Isaiah
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
          Software Development Engineer
        </h2>
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
