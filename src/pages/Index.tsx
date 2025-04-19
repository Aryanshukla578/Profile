
import { useRef, useEffect } from 'react';
import Background3D from '@/components/Background3D';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll animation for sections
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            
            // Unobserve after animation is added
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    // Select all sections to observe
    const sections = document.querySelectorAll('section > div.container');
    
    sections.forEach((section) => {
      if (section.id !== 'home') {
        section.classList.add('opacity-0');
        observerRef.current?.observe(section);
      }
    });
    
    return () => observerRef.current?.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Background3D />
      <Navigation />
      
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
