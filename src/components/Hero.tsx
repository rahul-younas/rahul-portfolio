import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Rahul-Younas.pdf";
    link.download = "Rahul-Younas.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent p-4 rounded-full shadow-lg animate-bounce">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 md:order-2 text-center md:text-left animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">👋 Hello, I'm a Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">
              MERN Stack, Next Js & AI Engineer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Building intelligent, scalable, and user-friendly web and AI applications 
              that merge creativity with cutting-edge technology
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" onClick={scrollToProjects} className="group shadow-lg hover:shadow-xl">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={downloadResume} className="group shadow-lg hover:shadow-xl">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Resume
              </Button>
              
              <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <Button variant="outline" size="icon" asChild className="hover:text-white hover:scale-110 transition-all shadow-md">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:text-white hover:scale-110 transition-all shadow-md">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:text-white hover:scale-110 transition-all shadow-md">
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
