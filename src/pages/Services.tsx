
import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';

import CustomButton from '../components/ui/CustomButton';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Backend Development with Spring Boot',
      description: 'Build robust and scalable backend applications with modern Java frameworks.',
      features: [
        'Build secure, scalable RESTful APIs',
        'Integrate and manage relational databases (MySQL, PostgreSQL, Oracle)',
        'Implement authentication, business logic, and automated testing'
      ]
    },
    {
      icon: Smartphone,
      title: 'Generative AI Application Development',
      description: 'Create intelligent applications powered by cutting-edge AI technologies.',
      features: [
        'Use Amazon Bedrock and SageMaker to build AI-powered tools',
        'Integrate foundation models for content generation, summarization, and intelligent automation',
        'Apply GenAI to enhance user experiences and internal operations'
      ]
    },
    {
      icon: Database,
      title: 'Full Stack Web Development',
      description: 'Develop complete web applications with modern frontend and backend technologies.',
      features: [
        'Develop responsive frontend interfaces with Angular and Bootstrap',
        'Connect frontends to powerful, secure Java backends',
        'Database Design',
        'Improve performance, streamline deployment, and fix critical bugs'
      ]
    },
    {
      icon: Palette,
      title: 'Process Optimization & Agile Operations',
      description: 'Streamline development workflows and enhance team productivity.',
      features: [
        'Facilitate Agile ceremonies and improve delivery workflows',
        'Identify and eliminate bottlenecks to boost productivity',
        'Apply DevOps tools like Git, Jenkins, and CI/CD pipelines'
      ]
    },
    {
      icon: Globe,
      title: 'Technical Documentation & Requirement Gathering',
      description: 'Bridge the gap between business requirements and technical implementation.',
      features: [
        'Translate business requirements into developer-ready documentation',
        'Act as a technical liaison between clients and engineering teams',
        'Maintain Confluence knowledge bases and system specs'
      ]
    },
    {
      icon: Zap,
      title: 'Business Development & Client Relations',
      description: 'Connect technical solutions with business objectives.',
      features: [
        'Represent technical solutions to non-technical stakeholders',
        'Engage clients at expos and meetings, turning conversations into leads',
        'Bridge the gap between client needs and product delivery teams'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200 animate-fade-in">
            My Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors duration-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I offer a comprehensive range of development services to help bring your digital ideas to life
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CustomButton className="hover-scale">
              Get Started
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-colors duration-200" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 transition-colors duration-200"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 transition-colors duration-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 transition-colors duration-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CustomButton to="/contact" variant="secondary" className="hover-scale">
              Get In Touch
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
