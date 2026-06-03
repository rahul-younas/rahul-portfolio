import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Development Intern",
    company: "ARFA Tower Incubator - DHA Phase 2 Campus",
    period: "2024 - 2025 (4 Months)",
    description: "Gained hands-on experience in building full-stack web applications using MERN stack. Collaborated with a team of developers on various projects and learned industry best practices."
  },
  {
    title: "Self-Learning & Personal Projects",
    company: "Self-Taught Developer",
    period: "2023 - Present",
    description: "Created multiple projects independently (including AI-powered applications) by learning from online resources, tutorials and experimenting with new technologies. Gained expertise in Next.js, AI/ML integration, and modern web development practices."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            My professional journey and self-learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative animate-fade-up ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 z-10" />

                <Card className="ml-16 md:ml-0 hover:shadow-lg transition-all">
                  <div className="p-3">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-semibold text-lg">{exp.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
