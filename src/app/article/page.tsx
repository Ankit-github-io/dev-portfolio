"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconCalendar, IconClock } from "@tabler/icons-react";

/**
 * Article Page Component
 * 
 * Blog and article showcase with technical writing and insights
 */
export default function ArticlePage() {
  const articles = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, including best practices for state management, component composition, and performance optimization.",
      content: "In this comprehensive guide, we'll explore how to build scalable React applications using TypeScript. We'll cover everything from project setup to advanced patterns for large-scale applications...",
      category: "React",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true,
      tags: ["React", "TypeScript", "Architecture", "Performance"]
    },
    {
      title: "Next.js 14: What's New and How to Migrate",
      excerpt: "Explore the latest features in Next.js 14, including the new App Router, Server Components, and how to smoothly migrate from older versions.",
      content: "Next.js 14 brings significant improvements to the framework, including the stable App Router, enhanced Server Components, and better performance optimizations...",
      category: "Next.js",
      readTime: "12 min read",
      date: "2024-01-10",
      featured: true,
      tags: ["Next.js", "Migration", "App Router", "Server Components"]
    },
    {
      title: "Mastering Tailwind CSS: Advanced Techniques",
      excerpt: "Discover advanced Tailwind CSS techniques including custom configurations, responsive design patterns, and performance optimization strategies.",
      content: "Tailwind CSS has revolutionized how we approach styling in modern web development. In this article, we'll dive deep into advanced techniques...",
      category: "CSS",
      readTime: "10 min read",
      date: "2024-01-05",
      featured: false,
      tags: ["Tailwind CSS", "Styling", "Responsive Design", "Performance"]
    },
    {
      title: "State Management in Modern React Applications",
      excerpt: "Compare different state management solutions for React applications, from Context API to Redux Toolkit and Zustand.",
      content: "Choosing the right state management solution is crucial for React application success. Let's explore the pros and cons of different approaches...",
      category: "React",
      readTime: "15 min read",
      date: "2023-12-28",
      featured: false,
      tags: ["React", "State Management", "Redux", "Context API"]
    },
    {
      title: "Optimizing Web Performance: A Complete Guide",
      excerpt: "Learn essential techniques for optimizing web performance, including code splitting, lazy loading, and Core Web Vitals optimization.",
      content: "Web performance is crucial for user experience and SEO. In this comprehensive guide, we'll cover all aspects of performance optimization...",
      category: "Performance",
      readTime: "20 min read",
      date: "2023-12-20",
      featured: false,
      tags: ["Performance", "Core Web Vitals", "Optimization", "SEO"]
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to create web applications that are accessible to all users, including those with disabilities.",
      content: "Accessibility is not just a legal requirement but a moral obligation. Let's explore how to build truly accessible web applications...",
      category: "Accessibility",
      readTime: "14 min read",
      date: "2023-12-15",
      featured: false,
      tags: ["Accessibility", "WCAG", "Inclusive Design", "UX"]
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  const categories = ["All", "React", "Next.js", "CSS", "Performance", "Accessibility"];

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
              Articles & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-copy-light max-w-3xl mx-auto">
              Technical articles, tutorials, and insights about modern web development, 
              React, Next.js, and best practices in software engineering.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-borderColor text-copy-light hover:text-copy hover:border-primary transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Featured Articles</h2>
            <p className="text-copy-light">In-depth technical content and tutorials</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="bg-surface-20 rounded-xl border border-borderColor overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Article Image */}
                <div className="h-48 bg-gradient-to-br from-surface-20 to-surface-40 flex items-center justify-center">
                  <span className="text-copy-light text-lg">Article Preview</span>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-copy-light">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <IconCalendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <IconClock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-copy leading-tight">{article.title}</h3>
                  <p className="text-copy-light leading-relaxed">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-surface-0 text-copy-light text-xs rounded-full border border-borderColor"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-primary hover:text-secondary transition-colors font-semibold">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Articles */}
      <section className="py-16 px-4 md:px-8 bg-surface-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-4">Latest Articles</h2>
            <p className="text-copy-light">More insights and tutorials</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-surface-0 rounded-xl border border-borderColor overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Article Image */}
                <div className="h-40 bg-gradient-to-br from-surface-20 to-surface-40 flex items-center justify-center">
                  <span className="text-copy-light">Article Preview</span>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-copy-light">
                    <span className="px-2 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <IconClock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-copy leading-tight">{article.title}</h3>
                  <p className="text-copy-light text-sm leading-relaxed">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-surface-20 text-copy-light text-xs rounded-full border border-borderColor"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="px-2 py-1 bg-surface-20 text-copy-light text-xs rounded-full border border-borderColor">
                        +{article.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <button className="text-primary hover:text-secondary transition-colors font-semibold text-sm">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-copy mb-6">
              Stay Updated
            </h2>
            <p className="text-copy-light mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, 
              React, and modern software engineering practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-borderColor bg-surface-20 text-copy placeholder-copy-light focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 