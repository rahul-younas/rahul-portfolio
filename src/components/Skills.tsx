import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "text-primary",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "text-primary",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "scikit-learn", "OpenAI API"]
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    color: "text-accent",
    skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "VS Code", "Postman"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            My technical toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover:shadow-xl transition-all hover:scale-105 animate-fade-up group border-l-4 border-l-primary/50 hover:border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-110 shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
