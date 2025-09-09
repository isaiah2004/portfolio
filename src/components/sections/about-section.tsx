"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from 'lucide-react';
import { getInteractiveBio } from '@/ai/flows/interactive-bio';
import { useToast } from '@/hooks/use-toast';

const AboutSection = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleQuestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    try {
      const result = await getInteractiveBio({ question });
      setAnswer(result.answer);
    } catch (error) {
      console.error("Error getting interactive bio:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not get an answer. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="about">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-lg text-foreground/80">
          <p>
            I am a final-year Computer Science and Engineering student at Karunya Institute of Technology and Sciences, set to graduate in June 2025. My journey in technology is driven by a deep fascination with artificial intelligence, machine learning, and robotics.
          </p>
          <p>
            My experience includes an AI/ML internship at Odyssey Therapeia, where I built a Generative AI-powered RAG system, and leading the IoT and Robotics Club at my university, where I mentored over 150 students. I thrive on challenges, whether it&apos;s winning a national hackathon or developing a custom terminal-based IDE from scratch just to improve my workflow.
          </p>
          <p>
            I am proficient in Python, JavaScript, and various AI frameworks like LangChain and TensorFlow. I&apos;m always eager to learn and apply new technologies to solve complex problems.
          </p>
        </div>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-accent h-6 w-6" />
              Interactive Bio
            </CardTitle>
            <p className="text-muted-foreground">Ask a question about me and get an answer from my AI assistant.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleQuestionSubmit} className="flex gap-2 mb-4">
              <Input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., What was your role at the hackathon?"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Ask"}
              </Button>
            </form>
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
            {answer && (
              <div className="prose prose-sm max-w-none text-foreground/90 rounded-md border bg-background p-4">
                {answer}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
