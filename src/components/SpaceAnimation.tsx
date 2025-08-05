"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

/**
 * SpaceAnimation Component
 * 
 * Creates a space-themed animation with:
 * - Animated beam from center (using BackgroundBeamsWithCollision)
 * - Earth globe with sun glow
 * - Particle effects with tails
 * - Glass morphism content sections
 * - Theme-aware colors using custom CSS classes
 */
const SpaceAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for different scroll stages
  const earthScale = useTransform(scrollYProgress, [0.3, 0.6], [0.3, 1]);
  const earthOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const particlesOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-surface-0 overflow-hidden">
      
      {/* Background Beams with Collision for Earth */}
      <BackgroundBeamsWithCollision className="h-screen bg-surface-0">
        {/* Earth globe */}
        <motion.div
          style={{
            scale: earthScale,
            opacity: earthOpacity,
          }}
          className="absolute left-1/2 top-1/2 w-80 h-80 md:w-96 md:h-96 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          {/* Earth sphere with gradient */}
          <div className="w-full h-full rounded-full shadow-2xl relative overflow-hidden bg-gradient-to-br from-chart-5 via-chart-2 to-chart-5">
            {/* Earth continents pattern */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-chart-2 to-transparent" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-chart-5 to-transparent" />
            
            {/* Earth glow effect */}
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-chart-5 to-transparent" />
          </div>
          
          {/* Sun glow around earth */}
          <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-warning via-chart-3 to-transparent" style={{ transform: 'scale(1.2)' }} />
        </motion.div>

        {/* Particle effects with tails */}
        <motion.div
          style={{ opacity: particlesOpacity }}
          className="absolute inset-0 z-30"
        >
          {/* Left side particles */}
          <div className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`left-${i}`}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 bg-copy rounded-full"
                style={{
                  left: `${i * 15}px`,
                  top: `${i * 20}px`,
                }}
              >
                {/* Particle tail */}
                <div className="absolute w-6 h-0.5 bg-gradient-to-r from-copy to-transparent transform -translate-x-full top-1/2 -translate-y-1/2" />
              </motion.div>
            ))}
          </div>

          {/* Right side particles */}
          <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`right-${i}`}
                animate={{
                  x: [0, -50, 0],
                  y: [0, 30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 bg-copy rounded-full"
                style={{
                  right: `${i * 15}px`,
                  top: `${i * 20}px`,
                }}
              >
                {/* Particle tail */}
                <div className="absolute w-6 h-0.5 bg-gradient-to-l from-copy to-transparent transform translate-x-full top-1/2 -translate-y-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Glass morphism content sections */}
        <div className="absolute inset-0 z-40 px-4">
          {/* Left glass panel */}
          <div className="absolute left-4 md:left-10 top-1/4 w-64 md:w-80 h-64 md:h-96 bg-surface-20 backdrop-blur-xl rounded-2xl border border-borderColor p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-copy">Innovation</h3>
            <p className="text-sm md:text-base text-copy-light">
              Pushing boundaries with cutting-edge technology and creative solutions.
            </p>
          </div>

          {/* Right glass panel */}
          <div className="absolute right-4 md:right-10 top-1/4 w-64 md:w-80 h-64 md:h-96 bg-surface-20 backdrop-blur-xl rounded-2xl border border-borderColor p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-copy">Excellence</h3>
            <p className="text-sm md:text-base text-copy-light">
              Delivering exceptional results with attention to detail and quality.
            </p>
          </div>
        </div>

        {/* Test text to see if component is loading */}
        <div className="absolute top-10 left-4 md:left-10 text-lg md:text-2xl font-bold z-50 text-copy">
          Space Animation with Beams
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default SpaceAnimation; 