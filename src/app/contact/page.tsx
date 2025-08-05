"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

/**
 * Contact Page Component
 * 
 * Contact form and information for professional inquiries
 */
export default function ContactPage() {
  const contactInfo = [
    {
      icon: <IconMail className="w-6 h-6" />,
      title: "Email",
      value: "ankit.maurya@gmail.com",
      link: "mailto:ankit.maurya@gmail.com"
    },
    {
      icon: <IconPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <IconMapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mumbai, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <IconBrandGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/ankitmaurya",
      color: "hover:text-gray-800"
    },
    {
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ankitmaurya",
      color: "hover:text-blue-600"
    },
    {
      icon: <IconBrandTwitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/ankitmaurya",
      color: "hover:text-blue-400"
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
              Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-copy mb-4">Send a Message</h2>
                <p className="text-copy-light">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-copy mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-borderColor bg-surface-20 text-copy placeholder-copy-light focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-copy mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-borderColor bg-surface-20 text-copy placeholder-copy-light focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-copy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-borderColor bg-surface-20 text-copy placeholder-copy-light focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-copy mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-borderColor bg-surface-20 text-copy placeholder-copy-light focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-copy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-borderColor bg-surface-20 text-copy placeholder-copy-light focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-copy mb-4">Contact Information</h2>
                <p className="text-copy-light">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-surface-20 rounded-lg border border-borderColor"
                  >
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-copy">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-copy-light hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-copy mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className={`p-3 bg-surface-20 rounded-full border border-borderColor text-copy-light ${social.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="p-6 bg-gradient-to-r from-primary to-secondary rounded-lg text-white"
              >
                <h3 className="text-xl font-bold mb-2">Current Availability</h3>
                <p className="text-white/90 mb-4">
                  I'm currently available for new projects and opportunities.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for work</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-surface-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Frequently Asked Questions</h2>
            <p className="text-copy-light">Common questions about working together</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of projects do you work on?",
                answer: "I specialize in modern web applications using React, Next.js, and TypeScript. This includes e-commerce platforms, SaaS applications, portfolio websites, and custom business solutions."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity. Small projects (1-2 weeks), medium projects (1-2 months), and large projects (2-6 months). I always provide detailed timelines during project planning."
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes, I offer various support packages including bug fixes, feature updates, and maintenance. We can discuss the level of support that best fits your needs."
              },
              {
                question: "What's your communication process like?",
                answer: "I maintain regular communication throughout the project with weekly updates, milestone reviews, and quick response times. I use tools like Slack, email, and video calls to stay connected."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-surface-0 p-6 rounded-lg border border-borderColor"
              >
                <h3 className="text-lg font-bold text-copy mb-2">{faq.question}</h3>
                <p className="text-copy-light leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 