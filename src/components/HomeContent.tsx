"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconCode, IconPalette, IconRocket, IconStar, IconQuote } from "@tabler/icons-react";

/**
 * HomeContent Component
 * 
 * Client-side component containing all the home page content with animations
 */
export default function HomeContent() {
  const services = [
    {
      icon: <IconCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Building modern, responsive web applications using React, Next.js, and TypeScript.",
      features: ["Frontend Development", "Backend Integration", "API Development", "Performance Optimization"]
    },
    {
      icon: <IconPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces with modern design principles.",
      features: ["User Interface Design", "User Experience", "Prototyping", "Design Systems"]
    },
    {
      icon: <IconRocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and user experience.",
      features: ["Core Web Vitals", "Code Splitting", "Lazy Loading", "Caching Strategies"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      content: "Ankit delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      content: "Working with Ankit was a game-changer for our startup. He built a scalable solution that grew with our business needs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "DigitalFlow",
      content: "The portfolio website Ankit created for us perfectly captures our brand identity and has significantly improved our online presence.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-surface-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-copy mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              I&apos;m a passionate software developer with expertise in modern web technologies. 
              I create exceptional digital experiences that combine innovation with functionality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-copy mb-6">My Journey</h3>
              <p className="text-copy-light leading-relaxed mb-4">
                With over 4 years of experience in web development, I&apos;ve had the privilege of working 
                on diverse projects that have shaped my expertise in React, Next.js, and TypeScript.
              </p>
              <p className="text-copy-light leading-relaxed mb-6">
                I believe in creating solutions that not only meet technical requirements but also 
                deliver exceptional user experiences. Every project is an opportunity to innovate 
                and push the boundaries of what&apos;s possible on the web.
              </p>
              <a
                href="/about"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Learn More About Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-surface-0 rounded-xl border border-borderColor"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-primary mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-copy-light text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-copy mb-6">
              What I <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              Comprehensive web development services tailored to your specific needs and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-20 p-8 rounded-xl border border-borderColor hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-copy mb-4">{service.title}</h3>
                <p className="text-copy-light mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-copy-light text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-surface-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-copy mb-6">
              Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              Don&apos;t just take my word for it. Here&apos;s what my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-0 p-8 rounded-xl border border-borderColor relative"
              >
                <div className="text-primary mb-4">
                  <IconQuote className="w-8 h-8" />
                </div>
                <p className="text-copy-light mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-copy">{testimonial.name}</h4>
                    <p className="text-copy-light text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-copy mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-copy-light mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your ideas to life. I&apos;m here to help you create 
              something amazing that will make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/work"
                className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 