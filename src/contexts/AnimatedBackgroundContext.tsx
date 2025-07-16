
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimatedBackgroundContextType {
  isEnabled: boolean;
  toggleBackground: () => void;
}

const AnimatedBackgroundContext = createContext<AnimatedBackgroundContextType | undefined>(undefined);

export const useAnimatedBackground = () => {
  const context = useContext(AnimatedBackgroundContext);
  if (context === undefined) {
    throw new Error('useAnimatedBackground must be used within an AnimatedBackgroundProvider');
  }
  return context;
};

interface AnimatedBackgroundProviderProps {
  children: React.ReactNode;
}

export const AnimatedBackgroundProvider: React.FC<AnimatedBackgroundProviderProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('animated-background');
      console.log('Initial load from localStorage:', saved);
      return saved ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    console.log('Saving to localStorage:', isEnabled);
    localStorage.setItem('animated-background', JSON.stringify(isEnabled));
  }, [isEnabled]);

  const toggleBackground = () => {
    console.log('toggleBackground called, current state:', isEnabled);
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    console.log('New state will be:', newValue);
  };

  const value = {
    isEnabled,
    toggleBackground,
  };

  console.log('AnimatedBackgroundProvider rendering with isEnabled:', isEnabled);

  return (
    <AnimatedBackgroundContext.Provider value={value}>
      {children}
    </AnimatedBackgroundContext.Provider>
  );
};
