import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-in-up">
          <h1 className="hero-title mb-6">
            Matan Yakir
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            Software Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through full-stack development, 
            AI/ML integration, and game development. Computer Science graduate with expertise 
            in modern technologies and clean code practices.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium card-hover"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium card-hover"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/matanyaki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 card-hover group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/matan-yakir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 card-hover group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="mailto:yakirmatan1@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 card-hover group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-32 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;