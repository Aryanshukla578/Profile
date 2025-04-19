
import { GraduationCap, BookOpen, Code, Shield } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/30 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-default">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, education, and passion for technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Hi, I'm Aryan Shukla</h3>
            <p className="mb-4 text-muted-foreground">
              I'm a student at the United Institute of Technology in Nani Prayagraj, passionate about cybersecurity, 
              programming, and emerging technologies.
            </p>
            <p className="mb-4 text-muted-foreground">
              My journey in tech began with learning Python, which I've now advanced in, and has expanded to include 
              Java, cybersecurity, and more recently, artificial intelligence and machine learning.
            </p>
            <p className="mb-4 text-muted-foreground">
              I enjoy participating in CTF competitions, which has strengthened my problem-solving skills and 
              deepened my understanding of security vulnerabilities.
            </p>
            <p className="text-muted-foreground">
              Currently, I'm focusing on enhancing my skills in AI & ML while continuing to explore advanced 
              concepts in cybersecurity.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-default/20">
                  <GraduationCap className="h-5 w-5 text-purple-default" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">United Institute of Technology</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-default/20">
                  <Code className="h-5 w-5 text-purple-default" />
                </div>
                <div>
                  <h4 className="font-semibold">Programming</h4>
                  <p className="text-sm text-muted-foreground">Python, Java, Web Dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-default/20">
                  <Shield className="h-5 w-5 text-purple-default" />
                </div>
                <div>
                  <h4 className="font-semibold">Cybersecurity</h4>
                  <p className="text-sm text-muted-foreground">Ethical Hacking, CTF</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-purple-default/20">
                  <BookOpen className="h-5 w-5 text-purple-default" />
                </div>
                <div>
                  <h4 className="font-semibold">Current Focus</h4>
                  <p className="text-sm text-muted-foreground">AI/ML, Advanced Security</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="h-80 w-80 md:h-96 md:w-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-default to-purple-dark p-1">
              <div className="h-full w-full rounded-full overflow-hidden bg-tech-dark">
                {/* Replace with actual image if available */}
                <div className="h-full w-full flex items-center justify-center text-6xl">AS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
