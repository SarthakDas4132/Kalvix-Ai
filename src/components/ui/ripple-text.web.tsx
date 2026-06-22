import React, { useId } from 'react';

interface RippleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Intensity of the distortion. Higher means more jagged/wavy edges. Default: 4 */
  intensity?: number;
  /** Speed of the ripple animation in seconds. Default: 4 */
  speed?: number;
}

/**
 * RippleText component
 * Recreates the A-Genius water ripple / ink bleed distortion effect
 * using SVG feTurbulence and feDisplacementMap.
 */
export function RippleText({
  text,
  className = '',
  style = {},
  intensity = 5,
  speed = 4,
}: RippleTextProps) {
  // Use a unique ID so multiple RippleTexts don't conflict with each other's filters
  const filterId = useId().replace(/:/g, '');

  return (
    <span className={className} style={{ display: 'inline-block', position: 'relative', ...style }}>
      {/* Hidden SVG defining the ripple filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <filter id={`ripple-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            {/* The noise generation that creates the water ripple texture */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.03" 
              numOctaves="2" 
              result="noise"
            >
              {/* Animating the baseFrequency creates a continuous flowing/rippling effect */}
              <animate 
                attributeName="baseFrequency" 
                values="0.01 0.03; 0.02 0.05; 0.01 0.03" 
                dur={`${speed}s`} 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            
            {/* Maps the noise onto the text, causing the distortion */}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale={intensity} 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>
      
      {/* The Text with the filter applied */}
      <span style={{ 
        display: 'inline-block', 
        filter: `url(#ripple-${filterId})`,
        WebkitFilter: `url(#ripple-${filterId})`,
        whiteSpace: 'pre-wrap'
      }}>
        {text}
      </span>
    </span>
  );
}
