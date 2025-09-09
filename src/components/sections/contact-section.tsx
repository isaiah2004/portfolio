import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:isaiahpaulapr1994@gmail.com">
              <Mail className="h-5 w-5" />
              <span>Email Me</span>
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="gap-2">
            <a href="https://linkedin.com/in/paul-isaiah-ln/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="gap-2">
            <a href="https://github.com/isaiah2004" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
