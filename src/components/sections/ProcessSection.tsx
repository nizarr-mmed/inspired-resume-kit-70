
import React from 'react';
import { Search, Calendar, Palette, Code, TestTube, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                My Development Process
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
                A systematic approach to delivering exceptional results
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {processes.map((process, index) => (
              <React.Fragment key={process.title}>
                <div className="flex flex-col items-center group animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 ${process.bgColor} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700`}>
                    <process.icon className={`w-8 h-8 ${process.iconColor} transition-colors duration-200`} />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center transition-colors duration-200">
                    {process.title}
                  </span>
                </div>
                {index < processes.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600 hidden md:block animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.05}s` }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200 ${className}`}>
      <div className="container mx-auto px-6">
        {showTitle && (
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              My Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
              A proven methodology that ensures successful project delivery from concept to deployment
            </p>
          </div>
        )}

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 via-indigo-500 to-rose-500 opacity-20 hidden lg:block"></div>
          
          <div className="space-y-16">
            {processes.map((process, index) => (
              <div key={process.title} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover-scale">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${process.bgColor} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <process.icon className={`w-8 h-8 ${process.iconColor} transition-colors duration-200`} />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Step {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                          {process.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                      {process.description}
                    </p>
                    <div className="mt-6">
                      <CheckCircle className="w-5 h-5 text-green-500 inline-flex items-center" />
                      <span className="ml-2 text-sm text-green-600 dark:text-green-400 font-medium">
                        Proven & Reliable
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0 lg:block hidden">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${process.color} opacity-20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${process.color} opacity-60 flex items-center justify-center`}>
                      <process.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600 dark:text-gray-400">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
