"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * ModernCard Component
 * 
 * Creates a modern 3D card with glass morphism effect
 * Features hover animations and interactive elements
 */
interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  gradient?: string;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = "",
  title,
  description,
  icon,
  gradient = "from-purple-500/20 to-blue-500/20",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20" />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {icon && (
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 mb-4 text-white/80"
          >
            {icon}
          </motion.div>
        )}
        
        {title && (
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-white/70 text-sm mb-4">
            {description}
          </p>
        )}
        
        {children}
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
    </motion.div>
  );
};

/**
 * SkillCard Component
 * 
 * Specialized card for displaying skills with progress
 */
interface SkillCardProps {
  skill: string;
  level: number;
  icon?: React.ReactNode;
  color?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  level,
  icon,
  color = "from-purple-500 to-blue-500",
}) => {
  return (
    <ModernCard
      className="h-32"
      icon={icon}
      gradient={`${color}/20`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <h4 className="text-white font-semibold">{skill}</h4>
          <div className="mt-2 w-full bg-white/20 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-2 rounded-full bg-gradient-to-r ${color}`}
            />
          </div>
        </div>
        <span className="text-white/60 text-sm">{level}%</span>
      </div>
    </ModernCard>
  );
}; 