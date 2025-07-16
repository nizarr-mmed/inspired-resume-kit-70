import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  process: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    iconColor: string;
  };
  index: number;
  variant: 'full' | 'compact';
  showArrow?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  process, 
  index, 
  variant, 
  showArrow = false 
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex items-center">
        <div className="flex flex-col items-center group animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className={cn(
            'w-16 h-16 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 border border-border',
            process.bgColor
          )}>
            <process.icon className={cn('w-8 h-8 transition-colors duration-200', process.iconColor)} />
          </div>
          <span className="text-sm font-medium text-foreground text-center transition-colors duration-200">
            {process.title}
          </span>
        </div>
        {showArrow && (
          <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block animate-fade-in ml-6" style={{ animationDelay: `${index * 0.1 + 0.05}s` }} />
        )}
      </div>
    );
  }

  return (
    <div className={cn(
      'flex items-center flex-col lg:gap-16 gap-8 animate-fade-in',
      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
    )} style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Content */}
      <div className="flex-1 lg:max-w-md">
        <div className="group bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover-scale">
          <div className="flex items-center mb-6">
            <div className={cn(
              'w-16 h-16 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300',
              process.bgColor
            )}>
              <process.icon className={cn('w-8 h-8 transition-colors duration-200', process.iconColor)} />
            </div>
            <div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Step {index + 1}
              </span>
              <h3 className="text-2xl font-bold text-card-foreground transition-colors duration-200">
                {process.title}
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed transition-colors duration-200">
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
        <div className={cn(
          'w-32 h-32 rounded-full bg-gradient-to-br opacity-20 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300',
          process.color
        )}>
          <div className={cn(
            'w-20 h-20 rounded-full bg-gradient-to-br opacity-60 flex items-center justify-center',
            process.color
          )}>
            <process.icon className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-card rounded-full border-2 border-border flex items-center justify-center">
            <span className="text-xs font-bold text-muted-foreground">{index + 1}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;