import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "B.Sc. Computer Science & Mathematics",
      organization: "Tel Hai College",
      period: "2022 - 2025",
      gpa: "GPA: 86",
      description: "Comprehensive computer science education covering algorithms, data structures, software engineering principles, and mathematical foundations.",
      icon: GraduationCap,
      type: "Education"
    },
    {
      title: "Excellenteam Software Development Bootcamp",
      organization: "Start-Up Nation Central",
      period: "2024",
      description: "Intensive 5-week full-day hackathon bootcamp focused on industry-level programming proficiency. Worked in teams of 3-4, mentored by experienced developers from Israeli high-tech companies.",
      highlights: [
        "Google Project: Autocomplete algorithm with Trie structures and Levenshtein distance",
        "Check Point Project: Basic firewall implementation on Linux",
        "Kaleidoo.ai Project: AI-powered ETL pipeline with Hugging Face integration"
      ],
      icon: Award,
      type: "Training"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Education & Training</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-card-foreground">
                        {exp.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge className="bg-secondary text-secondary-foreground mb-2">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    {exp.gpa && (
                      <div className="text-sm font-medium text-primary mt-1">
                        {exp.gpa}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.highlights && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Key Projects:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li 
                          key={highlightIndex}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;