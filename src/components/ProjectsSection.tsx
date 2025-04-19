
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Real-Estate Website",
    description: "A modern real estate platform with property listings, search functionality, and user profiles.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/placeholder.svg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Mindfull-Connect",
    description: "A mindfulness and meditation application helping users track their mental wellness journey.",
    tags: ["React Native", "Firebase", "Redux", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Protectopia Website",
    description: "A cybersecurity education platform with interactive tutorials and security best practices.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    image: "/placeholder.svg",
    github: "https://github.com",
    live: "https://example.com",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-default">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my featured projects showcasing my skills in web development, cybersecurity, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 card-hover">
              <div className="h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-xs rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button className="bg-purple-default hover:bg-purple-dark" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
