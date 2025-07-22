import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50/20 to-blue-50/20 dark:from-gray-800/20 dark:to-gray-900/20 min-h-screen flex items-center transition-colors duration-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-200">
              Creatives
              <span className="text-blue-600 dark:text-blue-400 block">Developer</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-200">
              I'm a passionate full-stack developer who creates beautiful, functional, and user-centered digital experiences. Let's bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton className="hover-scale">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
              <CustomButton variant="outline" className="hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </CustomButton>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
