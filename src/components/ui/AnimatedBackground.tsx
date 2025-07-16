
import React from 'react';
import { useAnimatedBackground } from '../../contexts/AnimatedBackgroundContext';

const AnimatedBackground = () => {
  const { isEnabled } = useAnimatedBackground();

  console.log('AnimatedBackground rendering, isEnabled:', isEnabled);

  if (!isEnabled) {
    console.log('Background is disabled, returning null');
    return null;
  }

  console.log('Background is enabled, rendering background');

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Glowing blue gradient for connections */}
            <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Radial gradient for nodes */}
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
            </radialGradient>

            {/* Glow filter for connections */}
            <filter id="connectionGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Strong glow for nodes */}
            <filter id="nodeGlowFilter">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Network connections */}
          <g className="animate-[float_20s_ease-in-out_infinite]">
            {/* Primary connection lines */}
            <line x1="150" y1="200" x2="300" y2="150" stroke="url(#connectionGrad)" strokeWidth="1.5" opacity="0.7" filter="url(#connectionGlow)" />
            <line x1="300" y1="150" x2="450" y2="220" stroke="url(#connectionGrad)" strokeWidth="1.5" opacity="0.7" filter="url(#connectionGlow)" />
            <line x1="450" y1="220" x2="600" y2="180" stroke="url(#connectionGrad)" strokeWidth="1.5" opacity="0.7" filter="url(#connectionGlow)" />
            <line x1="600" y1="180" x2="750" y2="240" stroke="url(#connectionGrad)" strokeWidth="1.5" opacity="0.7" filter="url(#connectionGlow)" />
            <line x1="750" y1="240" x2="900" y2="200" stroke="url(#connectionGrad)" strokeWidth="1.5" opacity="0.7" filter="url(#connectionGlow)" />
            <line x1="900" y1="200" x2="1050" y2="160" stroke="url(#connectionGrad)" strokeWidth="1.5" opacity="0.7" filter="url(#connectionGlow)" />

            {/* Secondary connections */}
            <line x1="200" y1="350" x2="380" y2="300" stroke="url(#connectionGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#connectionGlow)" />
            <line x1="380" y1="300" x2="520" y2="380" stroke="url(#connectionGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#connectionGlow)" />
            <line x1="520" y1="380" x2="680" y2="320" stroke="url(#connectionGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#connectionGlow)" />
            <line x1="680" y1="320" x2="850" y2="390" stroke="url(#connectionGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#connectionGlow)" />
            <line x1="850" y1="390" x2="1000" y2="340" stroke="url(#connectionGrad)" strokeWidth="1.2" opacity="0.6" filter="url(#connectionGlow)" />

            {/* Tertiary connections */}
            <line x1="250" y1="500" x2="420" y2="460" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" filter="url(#connectionGlow)" />
            <line x1="420" y1="460" x2="580" y2="520" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" filter="url(#connectionGlow)" />
            <line x1="580" y1="520" x2="740" y2="480" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" filter="url(#connectionGlow)" />
            <line x1="740" y1="480" x2="920" y2="540" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" filter="url(#connectionGlow)" />

            {/* Cross connections */}
            <line x1="150" y1="200" x2="200" y2="350" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="300" y1="150" x2="380" y2="300" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="450" y1="220" x2="520" y2="380" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="600" y1="180" x2="680" y2="320" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="750" y1="240" x2="850" y2="390" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />

            <line x1="200" y1="350" x2="250" y2="500" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="380" y1="300" x2="420" y2="460" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="520" y1="380" x2="580" y2="520" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="680" y1="320" x2="740" y2="480" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />
            <line x1="850" y1="390" x2="920" y2="540" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.4" />

            {/* Additional interconnections */}
            <line x1="300" y1="150" x2="520" y2="380" stroke="url(#connectionGrad)" strokeWidth="0.8" opacity="0.3" />
            <line x1="450" y1="220" x2="680" y2="320" stroke="url(#connectionGrad)" strokeWidth="0.8" opacity="0.3" />
            <line x1="600" y1="180" x2="850" y2="390" stroke="url(#connectionGrad)" strokeWidth="0.8" opacity="0.3" />
            <line x1="380" y1="300" x2="740" y2="480" stroke="url(#connectionGrad)" strokeWidth="0.8" opacity="0.3" />
          </g>

          {/* Floating animation layer */}
          <g className="animate-[float_15s_ease-in-out_infinite_reverse]">
            <line x1="180" y1="280" x2="350" y2="230" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" />
            <line x1="480" y1="320" x2="620" y2="280" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" />
            <line x1="720" y1="360" x2="880" y2="320" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" />
            <line x1="320" y1="420" x2="480" y2="380" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" />
            <line x1="640" y1="440" x2="800" y2="400" stroke="url(#connectionGrad)" strokeWidth="1" opacity="0.5" />
          </g>
          
          {/* Network nodes */}
          <g className="animate-[float_12s_ease-in-out_infinite]">
            {/* Primary nodes - large */}
            <circle cx="150" cy="200" r="4" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="150" r="5" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="450" cy="220" r="4.5" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="4.5;6.5;4.5" dur="3.5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="1;0.6;1" dur="3.5s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="600" cy="180" r="5.5" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="5.5;7.5;5.5" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="opacity" values="1;0.6;1" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle cx="750" cy="240" r="4" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="900" cy="200" r="5" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" begin="2.5s" />
              <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" begin="2.5s" />
            </circle>
            <circle cx="1050" cy="160" r="4.5" fill="url(#nodeGlow)" filter="url(#nodeGlowFilter)">
              <animate attributeName="r" values="4.5;6.5;4.5" dur="3.5s" repeatCount="indefinite" begin="3s" />
              <animate attributeName="opacity" values="1;0.6;1" dur="3.5s" repeatCount="indefinite" begin="3s" />
            </circle>

            {/* Secondary nodes - medium */}
            <circle cx="200" cy="350" r="3.5" fill="url(#nodeGlow)" opacity="0.8" />
            <circle cx="380" cy="300" r="4" fill="url(#nodeGlow)" opacity="0.8" />
            <circle cx="520" cy="380" r="3.5" fill="url(#nodeGlow)" opacity="0.8" />
            <circle cx="680" cy="320" r="4" fill="url(#nodeGlow)" opacity="0.8" />
            <circle cx="850" cy="390" r="3.5" fill="url(#nodeGlow)" opacity="0.8" />
            <circle cx="1000" cy="340" r="4" fill="url(#nodeGlow)" opacity="0.8" />

            {/* Tertiary nodes - small */}
            <circle cx="250" cy="500" r="3" fill="url(#nodeGlow)" opacity="0.7" />
            <circle cx="420" cy="460" r="3" fill="url(#nodeGlow)" opacity="0.7" />
            <circle cx="580" cy="520" r="3" fill="url(#nodeGlow)" opacity="0.7" />
            <circle cx="740" cy="480" r="3" fill="url(#nodeGlow)" opacity="0.7" />
            <circle cx="920" cy="540" r="3" fill="url(#nodeGlow)" opacity="0.7" />

            {/* Micro nodes */}
            <circle cx="180" cy="280" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="350" cy="230" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="480" cy="320" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="620" cy="280" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="720" cy="360" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="880" cy="320" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="320" cy="420" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="640" cy="440" r="2" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx="800" cy="400" r="2" fill="url(#nodeGlow)" opacity="0.6" />
          </g>
        </svg>
      </div>
      
      {/* Enhanced blue overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/3 to-blue-600/4 dark:from-blue-400/8 dark:via-cyan-400/6 dark:to-blue-500/7" />
    </div>
  );
};

export default AnimatedBackground;
