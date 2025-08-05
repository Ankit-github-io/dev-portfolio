"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * About Page Component
 * 
 * Professional about page showcasing skills, experience, and background
 */
export default function AboutPage() {
  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Docker", level: 65 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications using Next.js and React."
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLabs",
      period: "2020 - 2022",
      description: "Developed scalable web applications with modern technologies and best practices."
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Started career with focus on React and modern web development practices."
    }
  ];

  return (
    <div className="min-h-screen bg-surface-0">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-copy mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              Passionate software developer with expertise in modern web technologies. 
              I create exceptional digital experiences that combine innovation with functionality.
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2 className="text-2xl font-bold text-copy mb-6">Background</h2>
              <p className="text-copy-light leading-relaxed mb-4">
                I'm a dedicated software developer with over 4 years of experience in building 
                modern web applications. My journey started with a passion for creating 
                user-friendly interfaces and has evolved into expertise in full-stack development.
              </p>
              <p className="text-copy-light leading-relaxed mb-4">
                I specialize in React, Next.js, and TypeScript, creating scalable solutions 
                that deliver exceptional user experiences. My approach combines technical 
                excellence with creative problem-solving.
              </p>
              <p className="text-copy-light leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-copy mb-6">Core Values</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-copy">Innovation</h3>
                    <p className="text-copy-light text-sm">Always exploring new technologies and approaches</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-copy">Quality</h3>
                    <p className="text-copy-light text-sm">Delivering robust, maintainable code</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-copy">User-Centric</h3>
                    <p className="text-copy-light text-sm">Focusing on exceptional user experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-chart-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-copy">Collaboration</h3>
                    <p className="text-copy-light text-sm">Working effectively in team environments</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 md:px-8 bg-surface-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Technical Skills</h2>
            <p className="text-copy-light">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-surface-0 p-6 rounded-xl border border-borderColor"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-copy">{skill.name}</span>
                  <span className="text-sm text-copy-light">{skill.level}%</span>
                </div>
                <div className="w-full bg-surface-40 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Experience</h2>
            <p className="text-copy-light">My professional journey</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-surface-20 p-6 md:p-8 rounded-xl border border-borderColor"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-copy">{exp.title}</h3>
                  <span className="text-copy-light text-sm md:text-base">{exp.period}</span>
                </div>
                <p className="text-primary font-semibold mb-3">{exp.company}</p>
                <p className="text-copy-light leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8 bg-surface-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-6">
              Let's Work Together
            </h2>
            <p className="text-copy-light mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 