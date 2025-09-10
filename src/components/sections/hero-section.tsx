import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className={cn("relative z-20 bg-card/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg ring-1 ring-black/10")}>
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
      </div>
    </section>
  );
};

export default HeroSection;
