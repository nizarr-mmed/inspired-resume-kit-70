import React from 'react';

interface TechnologyBadgeProps {
  tech: string;
  index: number;
  variant?: 'default' | 'large';
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ 
  tech, 
  index, 
  variant = 'default' 
}) => {
  const baseClasses = variant === 'large' 
    ? 'bg-card text-card-foreground rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border animate-fade-in hover-scale'
    : 'text-sm bg-muted text-muted-foreground px-2 py-1 rounded transition-colors duration-200';

  const content = variant === 'large' 
    ? <div className="text-2xl font-bold text-foreground mb-2 transition-colors duration-200">{tech}</div>
    : tech;

  const style = variant === 'large' 
    ? { animationDelay: `${1 + index * 0.1}s` }
    : undefined;

  return (
    <div className={baseClasses} style={style}>
      {content}
    </div>
  );
};

export default TechnologyBadge;