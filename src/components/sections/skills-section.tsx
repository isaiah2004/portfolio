import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Cog } from "lucide-react";

const skillsData = {
  languages: {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "SQL", "C"],
  },
  frameworks: {
    icon: <Server className="h-6 w-6 text-primary" />,
    title: "Frameworks & Libraries",
    skills: ["LangChain", "Sci-Kit Learn", "Flask", "Node.js", "MERN Stack", "TensorFlow", "Next.js"],
  },
  tools: {
    icon: <Cog className="h-6 w-6 text-primary" />,
    title: "Tools & Platforms",
    skills: ["Docker", "Git & GitHub", "Linux", "Azure Cloud", "Amazon AWS EC2", "Arduino", "Raspberry Pi"],
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">My technical toolkit for building applications.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(skillsData).map((category, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="p-3 bg-primary/10 rounded-full">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="bg-background border rounded-full px-3 py-1 text-sm text-foreground/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
