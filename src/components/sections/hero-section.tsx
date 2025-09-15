import { Button } from "@/components/ui/button";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Trophy, Sparkles } from "lucide-react";

const MongoDbIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    fill="currentColor"
  >
    <title>MongoDB</title>
    <path d="M15.125 12.213c-.31-.056-.474-.14-.474-.281 0-.17.252-.28.528-.28.277 0 .526.11.526.28 0 .14-.13.28-.42.28h-.164zm-1.071-5.14c0-.392-.393-.56-1.01-.56-1.248 0-1.794.616-1.794 1.373 0 .756.547 1.372 1.793 1.372.618 0 1.01-.168 1.01-.56V6.99c0-.028.001-.056.001-.083zm.167.925c0 .617-.589 1.093-1.626 1.093-1.57 0-2.695-.728-2.695-2.298 0-1.542 1.154-2.298 2.723-2.298 1.037 0 1.598.476 1.598 1.148v2.355h.001zm-1.127-3.922c-.673 0-1.22.252-1.22.673 0 .42.547.672 1.22.672.673 0 1.22-.252 1.22-.672.001-.421-.547-.673-1.22-.673zm1.07 11.834c.224 0 .393.112.393.28 0 .169-.168.281-.393.281-.223 0-.392-.112-.392-.281.001-.168.17-.28.392-.28zm-.056-1.037c-.309-.056-.474-.14-.474-.28 0-.17.252-.28.528-.28.277 0 .526.11.526.28 0 .14-.13.28-.42.28h-.16zM12.025.291c-6.474 0-11.734 5.259-11.734 11.734 0 6.474 5.26 11.734 11.734 11.734 6.474 0 11.734-5.26 11.734-11.734C23.759 5.55 18.5 0.29 12.025.291zm-2.018 17.653c-.337.336-.84.448-1.402.448-.56 0-1.065-.112-1.402-.448-.336-.337-.476-.84-.476-1.402 0-.56.14-1.066.476-1.402.337-.336.84-.476 1.402-.476.56 0 1.065.14 1.402.476.337.336.476.84.476 1.402.001.562-.139 1.065-.476 1.402zm2.018-3.083c-.336.337-.84.448-1.402.448-.56 0-1.065-.112-1.402-.448-.337-.337-.476-.84-.476-1.402 0-.56.14-1.066.476-1.402.336-.336.84-.476 1.402-.476.56 0 1.065.14 1.402.476.336.336.476.84.476 1.402.001.562-.14 1.065-.476 1.402zm.532-6.615c-.448.84-1.205 1.4-2.214 1.4-1.01 0-1.766-.56-2.214-1.4-.448-.84-.533-1.878-.252-3.083l.252-1.12c.057-.224.28-.336.449-.224l.84.56c.168.112.224.336.168.504l-.252 1.12c-.168.756-.112 1.372.112 1.794.168.336.448.56.84.56.393 0 .673-.224.84-.56.224-.422.28-1.038.112-1.794l-.252-1.12c-.056-.168.001-.392.168-.504l.84-.56c.225-.112.449-.001.449.224l.253 1.12c.28 1.205.195 2.243-.253 3.083z" />
  </svg>
);

const ExpressIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    fill="currentColor"
  >
    <title>Express</title>
    <path d="M24 17.572c0 .48-.22.934-.613 1.23l-3.323 2.52c-.412.313-.974.313-1.386 0l-3.323-2.52c-.393-.298-.613-.75-.613-1.23V6.428c0-.48.22-.934.613-1.23l3.323-2.52c.412-.313.974-.313 1.386 0l3.323 2.52c.393.298.613.75.613 1.23v11.144zm-4.322-9.873a.08.08 0 00-.075.04l-1.75 3.513a.08.08 0 00.071.116h1.332a.08.08 0 00.075-.04l.417-.838a.08.08 0 00-.071-.116h-1.03zm-2.33 6.64c.264.44.757.712 1.284.712.56 0 1.07-.294 1.332-.782.163-.306.257-.65.257-1.01 0-.36-.094-.704-.257-1.01-.263-.488-.772-.782-1.332-.782-.527 0-1.02.27-1.284.71l-1.92-3.483c.87-.58 1.95-.91 3.102-.91 2.89 0 5.074 2.152 5.074 4.965 0 2.812-2.185 4.964-5.075 4.964-1.15 0-2.23-.33-3.1-.91l1.91-3.484zm-6.22-3.82L9.42 2.76a.08.08 0 00-.142 0L7.57 10.52c0 .044.032.08.075.08h2.82c.044 0 .075-.036.075-.08zm-1.699-5.417c-1.339.46-2.288 1.63-2.288 3.01v.054c0 .044.032.08.075.08h2.09c.044 0 .075-.036.075-.08V8.11c0-.58.472-1.053 1.053-1.053.58 0 1.053.472 1.053 1.053v2.41c0 .044.032.08.075.08h2.09c.044 0 .075-.036.075-.08v-.055c0-1.38-1.02-2.55-2.36-3.01L11.127.01a.08.08 0 00-.075 0L9.43 2.52zM.001 6.428c0-.48.22-.934.613-1.23l3.323-2.52c.412-.313.974-.313 1.386 0l3.323 2.52c.393.298.613.75.613 1.23v11.144c0 .48-.22.934-.613 1.23l-3.323 2.52c-.412-.313-.974-.313-1.386 0l-3.323-2.52c-.393-.298-.613-.75-.613-1.23V6.428z" />
  </svg>
);

const NodeIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    fill="currentColor"
  >
    <title>Node.js</title>
    <path d="M11.75 1.25v21.5L22.25 18V6.5zM1.25 6.5v11.5L11.75 22.75V1.25z" />
  </svg>
);

const ReactIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="-11.5 -10.23174 23 20.46348"
        className="size-5"
    >
        <title>React</title>
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
