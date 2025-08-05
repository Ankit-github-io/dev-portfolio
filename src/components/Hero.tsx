"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/textGenratorEffect";
import { IconArrowDown, IconBrandGithub, IconBrandLinkedin, IconMail, IconDownload, IconCode, IconRocket, IconBolt } from "@tabler/icons-react";

/**
 * Hero Component
 * 
 * Modern hero section with integrated ripple background effects, comprehensive content,
 * and interactive call-to-action elements
 */
const Hero = () => {
  // Track component mounting for hydration safety
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <IconBrandGithub className="w-5 h-5" />,
      href: "https://github.com/ankitmaurya",
      label: "GitHub"
    },
    {
      icon: <IconBrandLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/ankitmaurya",
      label: "LinkedIn"
    },
    {
      icon: <IconMail className="w-5 h-5" />,
      href: "mailto:ankit.maurya@gmail.com",
      label: "Email"
    }
  ];

  // Ripple background configuration
  const mainCircleSize = 400;
  const mainCircleOpacity = 0.24;
  const numCircles = 10;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Integrated Ripple Background */}
      <div className="pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]">
        {Array.from({ length: numCircles }, (_, i) => {
          const size = mainCircleSize + i * 140;
          const opacity = mainCircleOpacity - i * 0.03;
          const animationDelay = `${i * 0.06}s`;
          const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
          const borderOpacity = 5 + i * 5;

          return (
            <div
              key={i}
              className={`absolute animate-rippleBg rounded-full bg-gradient-to-bl from-slate-800 to bg-blue-300 shadow-xl border [--i:${i}]`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              }}
            />
          );
        })}
      </div>
      
      {/* Spotlight effects for visual appeal */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-full md h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight 
          className="top-28 left-80 h-[80vh] w-[50vw]" 
          fill="blue" 
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl sm:px-10 px-5">
        <div className="relative pb-20 pt-36 flex flex-col items-center gap-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-20 rounded-full border border-borderColor"
          >
            <IconBolt className="w-4 h-4 text-primary" />
            <span className="text-sm text-copy-light">Available for new projects</span>
          </motion.div>

          {/* Name and title section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-3 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold drop-shadow-xl relative bg-clip-text text-transparent bg-no-repeat bg-gradiant">
              Hi, I&apos;m{" "}
              <span className="tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                Ankit Maurya
              </span>
            </h2>
            <p className="uppercase text-copy-light text-lg md:text-xl tracking-wider font-medium">Full-Stack Developer & Digital Craftsman</p>
          </motion.div>

          {/* Main description section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center sm:gap-4 gap-8 lg:max-w-7xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold capitalize text-center text-copy leading-tight">
              I Craft{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>{" "}
              That{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>
            
            {/* Animated text effect */}
            <TextGenerateEffect
              className="text-lg md:text-xl text-center w-full lg:max-w-6xl"
              words="Transforming ideas into pixel-perfect, lightning-fast web applications. I blend cutting-edge technology with creative design to build digital solutions that not only work flawlessly but also delight users and drive business growth."
            />
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            {[
              { name: "Next.js", icon: <IconCode className="w-4 h-4" /> },
              { name: "React", icon: <IconCode className="w-4 h-4" /> },
              { name: "TypeScript", icon: <IconCode className="w-4 h-4" /> },
              { name: "Node.js", icon: <IconCode className="w-4 h-4" /> },
              { name: "Tailwind CSS", icon: <IconCode className="w-4 h-4" /> }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-1 bg-surface-20 rounded-full text-copy-light text-sm border border-borderColor"
              >
                {tech.icon}
                {tech.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center mt-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              Let&apos;s Build Something Amazing
              <IconRocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 group"
            >
              Explore My Work
              <IconArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-surface-20 text-copy px-6 py-4 rounded-full font-semibold hover:bg-surface-0 transition-all duration-300 hover:scale-105 border border-borderColor group"
            >
              Download Resume
              <IconDownload className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-surface-20 rounded-full text-copy hover:text-primary transition-all duration-300 border border-borderColor hover:border-primary"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-4xl"
          >
            {[
              { number: "4+", label: "Years of Innovation" },
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Dedicated Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center p-4 bg-surface-20 rounded-xl border border-borderColor hover:bg-surface-0 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-copy-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-copy-light"
            >
              <IconArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
