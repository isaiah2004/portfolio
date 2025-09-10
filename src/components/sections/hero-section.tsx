import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Trophy, Sparkles } from "lucide-react";

const MongoDbIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
  >
    <path
      d="M16.2002 12.45C16.0502 10.125 14.4002 8.25 12.3002 7.8L11.5502 7.65C8.55019 7.05 5.70019 8.4 4.35019 10.95L4.05019 11.55C2.85019 13.95 3.45019 16.95 5.25019 18.9L5.55019 19.2C6.75019 20.4 8.10019 21.6 8.85019 22.95L9.15019 23.55C10.3502 25.8 12.3002 27 14.5502 27.15L15.0002 27.15C17.8502 27.6 20.7002 26.1 21.9002 23.55L22.0502 23.1C23.2502 20.7 22.6502 17.7 20.8502 15.75L20.5502 15.45C19.5002 14.4 18.1502 13.2 17.2502 11.85L16.2002 12.45Z"
      fill="#47A248"
    />
    <path
      d="M18.0002 19.5C18.0002 23.4 15.6002 26.1 12.3002 27.15L11.8502 27.15C9.75019 26.85 8.25019 25.5 7.35019 23.55L7.05019 23.1C6.90019 22.8 7.05019 22.35 7.35019 22.2C7.65019 22.05 8.10019 22.2 8.25019 22.5L8.70019 23.4C9.45019 24.9 10.6502 25.8 12.1502 25.5C13.6502 25.2 14.8502 23.7 14.4002 22.05C13.3502 17.55 10.3502 14.4 10.3502 14.4C10.0502 14.1 10.0502 13.65 10.3502 13.5C10.5002 13.2 10.9502 13.2 11.2502 13.5C11.2502 13.5 14.7002 16.5 15.7502 21.45C15.9002 22.95 15.0002 24.45 13.5002 24.6C12.7502 24.75 12.0002 24.45 11.4002 23.85L11.1002 23.4C10.9502 23.1 10.5002 23.1 10.2002 23.25C9.90019 23.4 9.75019 23.85 9.90019 24.15L10.3502 24.9C10.9502 25.95 11.8502 26.55 13.2002 26.7C15.4502 26.85 17.4002 25.05 17.2502 22.8C16.3502 15.45 11.4002 11.7 11.4002 11.7C11.1002 11.4 11.2502 10.95 11.5502 10.8C11.8502 10.65 12.3002 10.8 12.6002 11.1C12.6002 11.1 17.8502 14.7 18.0002 19.5Z"
      fill="white"
    />
  </svg>
);
const ExpressIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
  >
    <path d="M2.16016 13.3198L2.52016 12.5998L7.68016 13.3198L7.56016 13.8L2.16016 13.3198ZM11.6402 14.16L12.0002 13.44L12.2402 13.56L12.3602 13.8L11.6402 14.16ZM16.3202 16.0798L16.6802 15.3598L16.5602 15.2398L16.3202 15.1198L16.3202 16.0798ZM3.60016 10.68L11.0402 4.07983L10.0802 3.11983L2.64016 9.71983L3.60016 10.68ZM11.0402 4.07983C13.2002 2.39983 16.2002 3.11983 17.6402 5.03983C19.0802 6.95983 18.8402 9.71983 17.0402 11.16L18.0002 12.12C20.2802 10.2 20.5202 6.83983 18.8402 4.43983C17.1602 2.03983 13.6802 1.19983 11.0402 3.11983L11.0402 4.07983ZM2.64016 9.71983C1.08016 10.8 1.08016 12.8398 2.52016 13.8L3.48016 12.8398C2.76016 12.3598 2.76016 11.28 3.60016 10.68L2.64016 9.71983ZM7.56016 13.8L11.2802 14.52L12.0002 13.56L8.28016 12.8398L7.56016 13.8ZM12.3602 13.8L16.6802 16.0798L15.9602 17.0398L11.6402 14.88L12.3602 13.8ZM17.0402 11.16L16.3202 15.1198L18.2402 15.4798L18.9602 11.52L17.0402 11.16Z" />
  </svg>
);
const NodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
  >
    <path
      d="M11.365 1.514a.75.75 0 011.27 0l9.333 16.164a.75.75 0 01-.635 1.122H2.667a.75.75 0 01-.635-1.122L11.365 1.514z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 18a1 1 0 100-2 1 1 0 000 2zM11.182 8.425a.75.75 0 011.455-.2l.818 4.5a.75.75 0 01-1.455.2l-.818-4.5z"
      fill="currentColor"
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
                  <div className="flex items-center gap-1.5">
                    <MongoDbIcon />
                    <ExpressIcon />
                    <ReactIcon />
                    <NodeIcon />
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
