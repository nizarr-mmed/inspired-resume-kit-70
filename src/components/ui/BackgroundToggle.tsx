
import React from 'react';
import { Sparkles, SparklesIcon } from 'lucide-react';
import { useAnimatedBackground } from '../../contexts/AnimatedBackgroundContext';

const BackgroundToggle = () => {
  const { isEnabled, toggleBackground } = useAnimatedBackground();

  const handleClick = () => {
    console.log('BackgroundToggle clicked, current state:', isEnabled);
    toggleBackground();
    console.log('Toggle function called');
  };

  console.log('BackgroundToggle rendering, isEnabled:', isEnabled);

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle animated background"
    >
      {isEnabled ? (
        <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      ) : (
        <SparklesIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};

export default BackgroundToggle;
