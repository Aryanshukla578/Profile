
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python (Advanced)", "Java (Basic)", "JavaScript", "HTML/CSS", "SQL"],
    icon: "💻"
  },
  {
    title: "Cybersecurity",
    skills: ["Ethical Hacking", "CTF Participation", "Network Security", "Vulnerability Assessment"],
    icon: "🔐"
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning Basics", "Data Analysis", "Neural Networks", "TensorFlow"],
    icon: "🤖"
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "Linux", "AWS", "Wireshark"],
    icon: "🛠️"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-default">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span> 
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="bg-purple-default/80 hover:bg-purple-dark text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
