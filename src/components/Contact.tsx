import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yakirmatan1@gmail.com",
      href: "mailto:yakirmatan1@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "050-2299826",
      href: "tel:+972502299826"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/matan-yakir",
      href: "https://www.linkedin.com/in/matan-yakir"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/matanyaki",
      href: "https://github.com/matanyaki"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations. Whether you're looking for a dedicated developer or 
              have an exciting project in mind, I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`card-hover bg-card border-border group ${method.primary ? 'ring-2 ring-primary/20' : ''}`}
              >
                <CardContent className="p-6">
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group-hover:text-primary transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">{method.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-5 h-5" />
              <span>Based in Israel • Available for Remote Work</span>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 card-hover"
                onClick={() => window.open('mailto:yakirmatan1@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 card-hover"
                onClick={() => window.open('https://www.linkedin.com/in/matan-yakir', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;