"use client";
import React, { useState, useEffect } from "react";
import { LogoIcon } from "@/Svg/icon";
import { ModeToggle } from "@/components/ui/themeToggle";
import Nav from "@/components/ui/Nav";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitch,
} from "@tabler/icons-react";
import SearchButton from "./SearchButton";
import { motion } from "framer-motion";
import MobileViewMenu from "./MobileViewMenu";

/**
 * Header Component
 * 
 * Main navigation header with responsive design
 * Features logo, navigation menu, search, theme toggle, and mobile menu
 */
const Header = () => {
  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Track component mounting for hydration safety
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Main navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Article", href: "/article" },
    { name: "Contact", href: "/contact" },
  ];

  // Social media navigation items
  const socialNavItems = [
    {
      name: "Twitter",
      href: "https://twitter.com/yourprofile",
      icon: <IconBrandTwitch />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      icon: <IconBrandLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/yourprofile",
      icon: <IconBrandGithub />,
    },
  ];

  return (
    <header className="relative top-0 left-0 w-full z-40 md:fixed xs:fixed transition-colors">
      <div className="transition-colors h-navHeight whitespace-nowrap backdrop-blur bg-overlayBackground border-b border-solid border-borderColor">
        <div className="wraper sm:py-0 sm:pl-6 sm:pr-2">
          <div className="container mx-auto my-0 flex justify-between items-center h-full">
            
            {/* Logo and brand name */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
              className="title h-full flex-shrink-0 flex-grow"
            >
              <div className="pointer-events-auto h-full">
                <a
                  href="/"
                  className="flex items-center w-full text-base transition-opacity h-16"
                >
                  <LogoIcon />
                  <span className="ml-2 uppercase">Ankit</span>
                </a>
              </div>
            </motion.div>

            {/* Main navigation and search */}
            <div className="h-full flex-grow">
              <div className="bg-none justify-end items-center h-full transition-colors flex">
                <div className="xs:hidden md:flex">
                  <Nav navItems={navItems} />
                </div>
                <div>
                  <SearchButton />
                </div>
              </div>
            </div>

            {/* Right side content - status, theme toggle, social links */}
            <div className="content h-16 flex-grow flex justify-end items-center">
              
              {/* Availability status */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                className="px-3 xs:hidden xl:flex xl:items-center"
              >
                <span className="relative rounded-full m-4 w-2 h-2 bg-green-600 inline-block before:content-[' '] before:absolute before:rounded-[50%] before:bg-green-400 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-100 before:animate-ripple"></span>
                <span className="cursor-pointer caret-transparent text-base text-green-400/80">
                  Available
                </span>
              </motion.div>

              {/* Theme toggle and social links */}
              <div className="flex items-center justify-center gap-1 xs:hidden sm:flex">
                <ModeToggle />
                <Nav navItems={socialNavItems} />
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <motion.div 
              className="z-50" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <button className="p-2 text-xl">
                {menuOpen ? "✕" : "☰"}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 h-svh bg-black/80 z-40 flex items-center justify-center"
          >
            <MobileViewMenu
              closeMenu={() => setMenuOpen(!menuOpen)}
              navItems={navItems}
              socialNavItems={socialNavItems}
              email="ankit.maurya@gmail.com"
            />
          </motion.div>
        )}

        {/* Bottom divider */}
        <div className="divider w-full h-px">
          <div className="divder-line h-px w-full transition-colors"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
