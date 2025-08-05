"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

/**
 * Work Page Component
 * 
 * Portfolio showcase with featured projects and case studies
 */
export default function WorkPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Framer Motion"],
      github: "https://github.com/username/task-manager",
      live: "https://task-manager-demo.com",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with dark/light theme, animations, and responsive design showcasing professional work.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/username/portfolio",
      live: "https://portfolio-demo.com",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      github: "https://github.com/username/weather-app",
      live: "https://weather-demo.com",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "Content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
      github: "https://github.com/username/blog-platform",
      live: "https://blog-demo.com",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time messaging application with user authentication, file sharing, and group chat functionality.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Firebase", "Socket.io", "Material-UI"],
      github: "https://github.com/username/chat-app",
      live: "https://chat-demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
              My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              A collection of projects that showcase my skills in web development, 
              from full-stack applications to interactive user interfaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Featured Projects</h2>
            <p className="text-copy-light">Highlighted work that demonstrates my expertise</p>
          </motion.div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="w-full h-64 md:h-80 bg-surface-20 rounded-xl border border-borderColor overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-surface-20 to-surface-40 flex items-center justify-center">
                        <span className="text-copy-light text-lg">Project Preview</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <IconBrandGithub className="w-6 h-6 text-black" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <IconExternalLink className="w-6 h-6 text-black" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-copy">{project.title}</h3>
                  <p className="text-copy-light leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-surface-20 text-copy-light text-sm rounded-full border border-borderColor"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-copy hover:text-primary transition-colors"
                    >
                      <IconBrandGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-copy hover:text-primary transition-colors"
                    >
                      <IconExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 px-4 md:px-8 bg-surface-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Other Projects</h2>
            <p className="text-copy-light">More work showcasing various technologies and approaches</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-surface-0 rounded-xl border border-borderColor overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative group h-48">
                  <div className="w-full h-full bg-gradient-to-br from-surface-20 to-surface-40 flex items-center justify-center">
                    <span className="text-copy-light">Project Preview</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <IconBrandGithub className="w-4 h-4 text-black" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <IconExternalLink className="w-4 h-4 text-black" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-copy">{project.title}</h3>
                  <p className="text-copy-light text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface-20 text-copy-light text-xs rounded-full border border-borderColor"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-surface-20 text-copy-light text-xs rounded-full border border-borderColor">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-copy hover:text-primary transition-colors text-sm"
                    >
                      <IconBrandGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-copy hover:text-primary transition-colors text-sm"
                    >
                      <IconExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-copy-light mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 