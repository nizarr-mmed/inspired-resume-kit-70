import React from 'react';
import { cn } from '@/lib/utils';

interface FilterButtonProps {
  filter: string;
  isActive: boolean;
  onClick: () => void;
  animationDelay?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  filter, 
  isActive, 
  onClick, 
  animationDelay = '0s' 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale animate-fade-in',
        isActive
          ? 'bg-primary text-primary-foreground shadow-lg'
          : 'bg-card text-card-foreground hover:bg-muted border border-border'
      )}
      style={{ animationDelay }}
    >
      {filter}
    </button>
  );
};

export default FilterButton;