
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Hi, I'm <span className="text-purple-default">Aryan Shukla</span>
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground max-w-2xl">
              Student at United Institute of Technology Nani Prayagraj, specializing in <span className="text-purple-light">Cybersecurity</span> and <span className="text-purple-light">AI/ML</span>
            </h2>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="bg-purple-default hover:bg-purple-dark text-white px-8">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-default text-purple-default hover:bg-purple-default/10">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-muted-foreground hover:text-purple-default transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}
