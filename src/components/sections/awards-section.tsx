import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const awards = [
  {
    title: "1st Place - Smart India Hackathon (SIH-2024)",
    description: "Led a team to build a universal programming kit for Police Radios. Our open-source software suite unified over 200 radio models from 12 different manufacturers by enabling the rapid development of custom drivers.",
  },
  {
    title: "Merit Scholarship",
    description: "Awarded by Karunya Institute of Technology and Sciences in May 2021 for academic excellence.",
  },
  {
    title: "First Place - Mignon Memorial Cup",
    description: "Inter-School Football Tournament (Bangalore), September 2018.",
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Honors & Awards</h2>
        <p className="mt-4 text-lg text-muted-foreground">Recognitions and achievements throughout my journey.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 bg-accent/10 rounded-full">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>{award.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
