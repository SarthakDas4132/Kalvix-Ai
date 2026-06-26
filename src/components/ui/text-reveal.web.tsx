import React, { useRef, CSSProperties } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: CSSProperties;
  className?: string;
  delay?: number;     // initial delay (ms) before animation starts
  stagger?: number;   // stagger duration (ms) between words
}

/**
 * Word-by-Word Heading Reveal animation:
 * Each word is placed inside its own overflow:hidden mask.
 * When in view, words animate up sequentially from y: 125% to 0%
 * with a staggered delay, creating a clean, modern reveal straight up.
 */
export function TextReveal({
  children,
  as: Tag = 'div',
  style,
  className,
  delay = 0,
  stagger = 60, // default 60ms stagger per word for a snappy, premium reveal
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  // Trigger once when it's partially in view (e.g. 60px above viewport bottom)
  const isInView = useInView(ref as any, { once: true, margin: '0px 0px -60px 0px' });

  const Comp = Tag as any;

  // Stagger container animation properties
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger / 1000,
        delayChildren: delay / 1000,
      },
    },
  };

  // Sliding word mask animation properties
  const wordVariants = {
    hidden: { y: '125%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Modern Framer ease-out
      },
    },
  };

  // Support multi-line texts using newline characters
  const lines = children.split('\n');

  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        ...style,
        margin: style?.margin || 0,
      }}
    >
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        style={{ display: 'block' }}
      >
        {lines.map((line, lineIdx) => {
          const words = line.split(' ');
          return (
            <span
              key={lineIdx}
              style={{
                display: 'block',
                whiteSpace: 'normal', // Allow words inside lines to wrap if container bounds shrink
              }}
            >
              {words.map((word, wordIdx) => {
                const chars = word.split('');
                const isLastWord = wordIdx === words.length - 1;
                // Detect '.ai' suffix/part case-insensitively to auto-highlight
                const aiIndex = word.toLowerCase().indexOf('.ai');

                return (
                  <span
                    key={wordIdx}
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      paddingLeft: '0.04em',
                      paddingRight: '0.08em',
                      marginLeft: '-0.04em',
                      marginRight: isLastWord ? '-0.08em' : '0.16em',
                      overflow: 'hidden',
                      verticalAlign: 'bottom',
                      paddingBottom: '0.15em',
                      marginBottom: '-0.15em',
                    }}
                  >
                    <motion.span
                      variants={wordVariants}
                      style={{
                        display: 'inline-block',
                      }}
                    >
                      {chars.map((char, charIdx) => {
                        // Apply pink coloring for '.ai' matches
                        const isPink = aiIndex !== -1 && charIdx >= aiIndex && charIdx < aiIndex + 3;

                        return (
                          <span
                            key={charIdx}
                            style={{
                              display: 'inline-block',
                              color: isPink ? 'var(--color-pink)' : 'inherit',
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Comp>
  );
}

