
import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

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
    }
];

interface ServicesSectionProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  showAll = false,
  title = "Services",
  subtitle = "What I Do"
}) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">{title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
