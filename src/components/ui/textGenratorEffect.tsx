"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

/**
 * TextGenerateEffect Component
 * 
 * Creates a typewriter-like effect where text appears word by word with blur animation
 * Handles hydration properly to prevent SSR/CSR mismatches
 * 
 * @param words - The text to animate
 * @param className - Additional CSS classes
 * @param filter - Whether to apply blur filter effect
 * @param duration - Animation duration in seconds
 */
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  // Framer Motion animation scope
  const [scope, animate] = useAnimate();
  
  // Track if component is mounted on client side
  const [isMounted, setIsMounted] = useState(false);
  
  // Split words for individual animation
  const wordsArray = words.split(" ");

  // Set mounted state after component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animate words when component is mounted
  useEffect(() => {
    if (isMounted && scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isMounted, scope.current, animate, filter, duration]);

  /**
   * Render individual words with animation
   * Each word starts blurred and becomes clear during animation
   */
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className="text-copy-light"
            style={{
              // Start with blur effect, clear after animation
              filter: filter ? "blur(10px)" : "none",
              opacity: 1, // Always visible, animation handles the effect
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-copy-light leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
