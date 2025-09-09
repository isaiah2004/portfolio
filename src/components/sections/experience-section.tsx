import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Intern",
    company: "Odyssey Therapeia",
    location: "Remote",
    dates: "Feb 2024 – April 2024",
    description: [
      "Successfully developed and implemented a RAG (Retrieval-Augmented Generation) system to power an intelligent auto-complete feature for the company's platform.",
      "Conducted in-depth research on cutting-edge AI/ML papers, including Microsoft's work on interactive agents and Google's MuZero, to inform development strategies.",
    ],
  },
  {
    title: "President of IoT and Robotics Club",
    company: "Karunya Hacks (NPO)",
    location: "On-site",
    dates: "July 2023 – July 2024",
    description: [
      "Organized and led technical workshops on topics like Linux, Arduino, and IoT, successfully training and mentoring over 150 university students.",
      "Provided technical guidance and project management for complex member projects, including a Hexapod robot, computer vision applications, and NVIDIA Jetbot development.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground">My journey in the tech world so far.</p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  {/* Empty for spacing on one side */}
                </div>
                <div className="md:w-1/2 md:pl-8">
                  {/* Empty for spacing on other side */}
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:flex">
                <div className={index % 2 === 0 ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:pl-8 md:order-2"}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.location}
                        <br />
                        {exp.dates}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
