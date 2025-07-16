
import React from 'react';
import { Search, Calendar, Palette, Code, TestTube, Rocket } from 'lucide-react';
import ProcessStep from '../ui/ProcessStep';

interface ProcessSectionProps {
  variant?: 'full' | 'compact';
  showTitle?: boolean;
  className?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ 
  variant = 'full', 
  showTitle = true,
  className = '' 
}) => {
  const processes = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Gather requirements, understand goals, and identify challenges through client discussions and research.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Calendar,
      title: 'Planning',
      description: 'Define scope, set priorities, and create a clear project roadmap with timelines and deliverables.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Design the technical solution, including system architecture, database schema, APIs, and integration workflows.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Implement the solution using clean, maintainable code and best practices in both frontend and backend technologies.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Validate functionality, performance, and security through unit tests, integration tests, and user acceptance testing.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Deploy the application to production with proper configuration, monitoring, and post-launch support.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
      iconColor: 'text-rose-600 dark:text-rose-400'
    }
  ];

  if (variant === 'compact') {
    return (
      <div className={`py-12 ${className}`}>
        <div className="container mx-auto px-6">
        {showTitle && (
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 transition-colors duration-200">
              My Development Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto transition-colors duration-200">
              A systematic approach to delivering exceptional results
            </p>
          </div>
        )}
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {processes.map((process, index) => (
              <ProcessStep
                key={process.title}
                process={process}
                index={index}
                variant="compact"
                showArrow={index < processes.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-20 bg-muted/50 transition-colors duration-200 ${className}`}>
      <div className="container mx-auto px-6">
        {showTitle && (
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 transition-colors duration-200">
              My Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-200">
              A proven methodology that ensures successful project delivery from concept to deployment
            </p>
          </div>
        )}

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 via-indigo-500 to-rose-500 opacity-20 hidden lg:block"></div>
          
          <div className="space-y-16">
            {processes.map((process, index) => (
              <ProcessStep
                key={process.title}
                process={process}
                index={index}
                variant="full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
