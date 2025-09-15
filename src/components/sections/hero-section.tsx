import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Trophy, Sparkles } from "lucide-react";
import { SiMongodb } from "react-icons/si";

import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className={cn("relative flex flex-col items-center justify-center w-[100%] h-[75vh] bg-card/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg ring-1 ring-black/10 overflow-hidden")}>
        <div className="absolute inset-0 w-full h-full bg-card/80 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative z-20 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
            Paul Isaiah
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
            FullStack Developer
          </h2>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1">
              <Trophy className="text-accent size-4" />
              <span>SIH 2024 Winner</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1">
              <Sparkles className="text-accent size-4" />
              <span>Generative AI</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1">
              <FaReact size={16} />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1">
              <div className="flex items-center gap-1.5">
                <SiMongodb size={16} className="text-green-500" />
                <div className="bg-white p-1 rounded-full">
                  <SiExpress size={16} className="text-black" />
                </div>
                <FaReact size={16} className="text-blue-400" />
                <FaNodeJs size={16} className="text-green-400" />
              </div>
              <span>MERN Stack</span>
            </div>
          </div>


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
