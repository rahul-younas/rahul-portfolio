import { Code2, Sparkles, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer and AI Engineer specializing in the MERN stack 
              and Next.js. With a strong foundation in both frontend and backend development, I create 
              seamless, high-performance web applications that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My expertise extends to artificial intelligence and machine learning, where I build 
              intelligent systems that enhance user experiences and drive innovation. I'm constantly 
              exploring new technologies and best practices to deliver cutting-edge solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing 
              technical articles, or exploring the latest trends in web development and AI.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Full Stack Development</h3>
                  <p className="text-muted-foreground">
                    Expert in MERN stack, Next.js, and modern JavaScript frameworks
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI Engineering</h3>
                  <p className="text-muted-foreground">
                    Building intelligent systems with machine learning and deep learning
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Focused</h3>
                  <p className="text-muted-foreground">
                    Constantly learning and implementing cutting-edge technologies
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
