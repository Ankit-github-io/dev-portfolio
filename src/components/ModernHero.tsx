"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientBackground } from "./ui/ParallaxSection";
import { FloatingElement } from "./ui/ParallaxSection";
import { TextGenerateEffect } from "./ui/textGenratorEffect";

/**
 * ModernHero Component
 * 
 * Advanced hero section with 3D parallax effects
 * Features floating elements, gradient backgrounds, and smooth animations
 */
const ModernHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <GradientBackground />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-24 h-24 border border-purple-400/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: 180,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 border border-blue-400/20 rounded-lg"
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Floating name section */}
          <FloatingElement delay={0.2}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                Ankit Maurya
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wider">
                SOFTWARE DEVELOPER
              </p>
            </motion.div>
          </FloatingElement>

          {/* Floating description */}
          <FloatingElement delay={0.4}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-relaxed">
                Crafting{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Experiences
                </span>{" "}
                with Modern Technology
              </h2>
            </motion.div>
          </FloatingElement>

          {/* Animated text effect */}
          <FloatingElement delay={0.6}>
            <div className="mb-12">
              <TextGenerateEffect
                className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto"
                words="Passionate about creating innovative web solutions that combine cutting-edge technology with exceptional user experiences. Specializing in Next.js, TypeScript, and modern web development."
              />
            </div>
          </FloatingElement>

          {/* Floating CTA buttons */}
          <FloatingElement delay={0.8}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </FloatingElement>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default ModernHero; 