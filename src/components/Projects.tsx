import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "AI Multi-Modal Assistant",
    description:
      "Advanced AI assistant powered by Groq Cloud featuring image understanding, web search, reasoning capabilities, and real-time voice conversations.",
    tech: ["Next.js", "Groq", "React", "Tailwind CSS"],
    github: "https://github.com/rahul-younas/chatbot-ai-assistant",
    demo: "https://rahul-chatbot.vercel.app/",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Catholic Bible Study Platform",
    description:
      "Bilingual Bible application with seamless Urdu and English language switching, responsive design, and optimized scripture navigation.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "No Code",
    demo: "https://catholic-bible-app.vercel.app/",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
  },
  {
    title: "Document Intelligence RAG System",
    description:
      "Retrieval-Augmented Generation platform that analyzes PDF documents and delivers accurate, context-aware answers using AI.",
    tech: ["Python", "LlamaIndex", "Groq", "Vector Database"],
    github: "https://github.com/rahul-younas/rahul-rag-bot",
    demo: "No demo",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    title: "Real-Time Collaboration Platform",
    description:
      "Real-time chat application with Clerk authentication, room management, instant messaging, and scalable communication features.",
    tech: ["Next.js", "Socket.IO", "Clerk", "Supabase"],
    github: "https://github.com/rahul-younas/rahul-chatapp",
    demo: "https://chatappbyrahul.vercel.app",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80"
  },
  {
    title: "Enterprise Asset Management System",
    description:
      "Comprehensive inventory and asset management solution enabling organizations to track, manage, and monitor assets through a centralized dashboard.",
    tech: ["Next.js", "JavaScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/rahul-younas/simple-inventory-management-system",
    demo: "No demo",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {(project.github === "No Code" || project.demo === "No demo") && (
                  <div className="space-y-2">
                    {project.github === "No Code" && (
                      <Alert>
                        <Lock className="h-4 w-4" />
                        <AlertDescription>This project's code is private.</AlertDescription>
                      </Alert>
                    )}
                    {project.demo === "No demo" && (
                      <Alert>
                        <Lock className="h-4 w-4" />
                        <AlertDescription>This project has no public demo available.</AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="gap-2">
                {project.github !== "No Code" ? (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="flex-1" disabled>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
                
                {project.demo !== "No demo" ? (
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" className="flex-1" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
