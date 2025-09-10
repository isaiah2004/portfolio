import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Trophy, Sparkles } from "lucide-react";

const MernIcons = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 96 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
  >
    {/* MongoDB */}
    <path
      d="M10.8 7.2C10.5 5.7 9.3 4.5 7.8 4.2L7.2 4.1C5.2 3.7 3.3 4.6 2.4 6.3L2.2 6.7C1.5 8.3 1.9 10.3 3.1 11.6L3.3 11.8C4.1 12.6 4.9 13.5 5.5 14.5L5.7 14.9C6.5 16.3 7.8 17.3 9.3 17.5L9.6 17.5C11.5 17.8 13.4 16.8 14.2 15.1L14.3 14.8C15 13.2 14.6 11.2 13.4 9.9L13.2 9.7C12.5 9 11.7 8.1 11.1 7.1L10.8 7.2Z"
      fill="#47A248"
    />
    <path
      d="M12 12C12 14.6 10.2 16.8 7.8 17.5L7.5 17.5C6.1 17.3 5.1 16.4 4.5 15.1L4.3 14.8C4.2 14.5 4.3 14.2 4.5 14.1C4.7 13.9 5 14 5.2 14.2L5.4 14.6C5.9 15.6 6.7 16.2 7.7 16C8.7 15.8 9.5 14.9 9.2 13.8C8.5 10.8 6.5 8.7 6.5 8.7C6.3 8.5 6.3 8.2 6.5 8C6.6 7.8 6.9 7.8 7.1 8C7.1 8 9.4 10.1 10.1 13.4C10.3 14.4 9.6 15.4 8.6 15.5C8.1 15.6 7.6 15.4 7.2 15L7 14.6C6.9 14.4 6.6 14.3 6.4 14.5C6.2 14.6 6.1 14.9 6.2 15.1L6.5 15.6C6.9 16.3 7.6 16.7 8.4 16.8C9.9 16.9 11.2 15.8 11.1 14.3C10.5 9.4 7.2 6.9 7.2 6.9C7 6.7 7.1 6.4 7.3 6.3C7.5 6.1 7.8 6.2 8 6.4C8 6.4 11.5 8.9 12 12Z"
      fill="#fff"
    />
    {/* Express */}
    <text x="24" y="16" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="currentColor">E</text>
    {/* React */}
    <g transform="translate(48 12)">
      <circle cx="0" cy="0" r="2.8" fill="currentColor" />
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120)" />
    </g>
    {/* Node.js */}
    <path
      d="M84,4.5l-6.9,4V15L84,19.5l6.9-4.5V8.5L84,4.5z M84,18.2l-5.6-3.6V9.8l5.6-3.6l5.6,3.6v4.8L84,18.2z M82.1,12.5h3.9V14h-3.9 V12.5z"
      fill="#8CC84B"
    />
  </svg>
);

const ReactIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="-11.5 -10.23174 23 20.46348"
        className="size-5"
    >
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);


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
                  <ReactIcon />
                  <span>React</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1">
                  <MernIcons />
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
