const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript (ES6)", "C#", "C++", "C"]
    },
    {
      category: "Frameworks & Libraries",
      skills: [".NET", "Flask", "React", "Unity", "Hugging Face"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "SQLite", "SQL Server", "AJAX", "API Integration"]
    },
    {
      category: "Specializations",
      skills: ["Full-Stack Development", "AI/ML", "Game Development", "Data Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gradient mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-tag text-center"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Always eager to learn new technologies and stay current with industry trends. 
            I believe in writing clean, maintainable code and following best practices 
            in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;