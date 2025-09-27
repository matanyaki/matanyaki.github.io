import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot, Database, Gamepad2, Search, Shield, Presentation } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "OpenAI Explainer",
      description: "Python-based application using Flask and OpenAI's GPT-3.5 Turbo API to automate PowerPoint presentation summarization. Features backend processing, API integration, and CLI interface.",
      icon: Presentation,
      technologies: ["Python", "Flask", "OpenAI API", "CLI"],
      category: "AI/ML"
    },
    {
      title: "Color Management Store",
      description: "Full-stack web application built with MVC architecture. Features AJAX-based dynamic UI, secure SQL Server database, and interactive color selection interface.",
      icon: Database,
      technologies: ["JavaScript", "AJAX", "SQL Server", "MVC"],
      category: "Full-Stack"
    },
    {
      title: "Google Autocomplete Algorithm",
      description: "Advanced autocomplete system in Python with spell error correction. Implemented Trie data structures and Levenshtein distance for optimized memory and runtime performance.",
      icon: Search,
      technologies: ["Python", "Trie Structures", "Algorithms"],
      category: "Algorithms"
    },
    {
      title: "Kaleidoo.ai ETL Pipeline",
      description: "AI-powered data processing application using Hugging Face models. Manages structured and unstructured data with SQLite optimization for enhanced query performance.",
      icon: Bot,
      technologies: ["Python", "Hugging Face", "SQLite", "ETL"],
      category: "AI/ML"
    },
    {
      title: "CheckPoint Firewall",
      description: "Basic firewall implementation on Linux using network and kernel module knowledge. Utilized profiling tools for debugging and memory management optimization.",
      icon: Shield,
      technologies: ["Linux", "Network Programming", "Kernel Modules"],
      category: "Security"
    },
    {
      title: "Unity Indie Game",
      description: "Indie game development project exploring game design fundamentals. Gained experience with physics, graphics, and user interface development in Unity engine.",
      icon: Gamepad2,
      technologies: ["Unity", "C#", "Game Design"],
      category: "Game Dev"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "bg-purple-500/10 text-purple-300 border-purple-500/20",
      "Full-Stack": "bg-blue-500/10 text-blue-300 border-blue-500/20",
      "Algorithms": "bg-green-500/10 text-green-300 border-green-500/20",
      "Security": "bg-red-500/10 text-red-300 border-red-500/20",
      "Game Dev": "bg-orange-500/10 text-orange-300 border-orange-500/20"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-300 border-gray-500/20";
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <project.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Each project represents a unique challenge and learning opportunity. 
            I focus on writing clean, efficient code while exploring innovative solutions 
            to complex problems.
          </p>
          
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 card-hover"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;