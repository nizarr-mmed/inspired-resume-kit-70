
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import CustomButton from '../components/ui/CustomButton';

const Home = () => {
  return (
    <div className="pt-20">
      <div className="animate-fade-in">
        <HeroSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <ServicesSection />
      </div>
      
      {/* More Services Button Section */}
      <div className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CustomButton to="/services" variant="outline" className="hover-scale">
              View All Services
            </CustomButton>
          </div>
        </div>
      </div>

      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <ProcessSection variant="compact" />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <ProjectsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Home;
