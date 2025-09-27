import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Sc. in Computer Science & Mathematics from Tel Hai College with GPA: 86"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Completed Excellenteam Bootcamp by Start-Up Nation Central - intensive 5-week program"
    },
    {
      icon: Code,
      title: "Full-Stack",
      description: "Proficient in Java, Python, JavaScript, C#, with experience in modern frameworks"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about AI/ML integration, game development, and solving complex problems"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated Computer Science graduate with a passion for continuous learning and innovation. 
              My journey in software development has been driven by curiosity and a dedication to creating 
              meaningful solutions that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through intensive training programs and hands-on projects, I've developed expertise in 
              full-stack development, AI/ML integration, and game development. I thrive in collaborative 
              environments and enjoy tackling complex challenges with clean, efficient code.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or working on indie game development in Unity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover bg-card border-border">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;