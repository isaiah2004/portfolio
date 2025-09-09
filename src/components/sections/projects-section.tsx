import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Simulated Hexapod Robot with Multi-modal AI",
    description: "A six-legged robot featuring a 3D-printed body and 18 degrees of freedom. Developed custom kinematics and integrated multi-modal capabilities by combining computer vision with Large Language Models (LLMs).",
    technologies: ["Python", "Embedded C", "Computer Vision", "LLMs"],
    link: "https://github.com/isaiah2004",
    image: "https://picsum.photos/600/400",
    imageHint: "robot hexapod",
  },
  {
    title: "Custom Terminal-Based IDE",
    description: "Designed and built a personal IDE using the Textual framework in Python to enhance productivity on the Linux terminal. The IDE features built-in syntax highlighting, cloud drive synchronization, and an integrated file explorer.",
    technologies: ["Python", "Textual"],
    link: "https://github.com/isaiah2004",
    image: "https://picsum.photos/600/400",
    imageHint: "code terminal",
  },
  {
    title: "3D Rubik's Cube Game",
    description: "A fully interactive Rubik's Cube simulation built with the Ursina game engine. The game includes auto-scramble and auto-solve functions and supports both mouse-click and keyboard controls for an intuitive user experience.",
    technologies: ["Python", "Ursina Engine"],
    link: "https://github.com/isaiah2004",
    image: "https://picsum.photos/600/400",
    imageHint: "rubiks cube",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">A selection of my work. See more on my GitHub.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="aspect-video relative mb-4">
                 <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint={project.imageHint}
                  />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
