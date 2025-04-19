
import { Award, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const certificates: Certificate[] = [
  {
    title: "CTF Participation Certificate",
    issuer: "CyberSecurity Events",
    date: "2023",
    description: "Participated in multiple Capture The Flag events, enhancing problem-solving and security skills.",
    icon: <Award className="h-8 w-8 text-purple-default" />,
  },
  {
    title: "Cisco Networking Badge",
    issuer: "Cisco",
    date: "2022",
    description: "Earned recognition for networking fundamentals and configuration skills on Cisco platforms.",
    icon: <Award className="h-8 w-8 text-purple-default" />,
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Google Labs",
    date: "2023",
    description: "Completed hands-on labs covering security fundamentals, threat detection, and incident response.",
    icon: <Award className="h-8 w-8 text-purple-default" />,
  },
  {
    title: "Ethical Hacking Certificate (Basic)",
    issuer: "Cybersecurity Institute",
    date: "2022",
    description: "Certified in ethical hacking fundamentals, including reconnaissance, scanning, and vulnerability assessment.",
    icon: <Award className="h-8 w-8 text-purple-default" />,
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-default">Certificates</span> & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Credentials and recognitions that validate my expertise and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 card-hover">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-full p-2 bg-secondary/50 backdrop-blur-sm">
                  {cert.icon}
                </div>
                <div className="space-y-1">
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Additional Skills & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Advanced Python Programming",
              "Basic Java Development",
              "Currently Learning AI & Machine Learning",
              "Currently Learning Advanced Cybersecurity",
              "Network Security Fundamentals",
              "Web Application Security"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-purple-default h-5 w-5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
