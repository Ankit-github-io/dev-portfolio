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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Artical", href: "/artical" },
    { name: "Contact", href: "/contact" },
  ];
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

  if (!isMounted) {
    return (
      <header className="relative top-0 left-0 w-full z-40 md:fixed xs:fixed transition-colors">
        <div className=" transition-colors h-navHeight whitespace-nowrap backdrop-blur bg-overlayBackground border-b border-solid border-borderColor">
          <div className="wraper sm:py-0 sm:pl-6 sm:pr-2">
            <div className="container mx-auto my-0 flex justify-between items-center h-full">
              <div className="title h-full flex-shrink-0 flex-grow">
                <div className="pointer-events-auto h-full">
                  <a
                    href="/"
                    className="flex items-center w-full text-base transition-opacity h-16"
                  >
                    <LogoIcon />
                    <span className="ml-2 uppercase">Ankit</span>
                  </a>
                </div>
              </div>
              <div className="h-full flex-grow ">
                <div className="bg-none justify-end items-center h-full transition-colors flex">
                  <div className="xs:hidden md:flex">
                    <Nav navItems={navItems} />
                  </div>
                  <div>
                    <SearchButton />
                  </div>
                </div>
              </div>
              <div className="content h-16 flex-grow flex justify-end items-center">
                <div className="px-3 xs:hidden xl:flex xl:items-center">
                  <span className="relative rounded-full m-4 w-2 h-2 bg-green-600 inline-block before:content-[' '] before:absolute before:rounded-[50%] before:bg-green-400 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-100 before:animate-ripple"></span>
                  <span className=" cursor-pointer caret-transparent text-base text-green-400/80">
                    Availble
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 xs:hidden sm:flex">
                  <ModeToggle />
                  <Nav navItems={socialNavItems} />
                </div>
              </div>

              <div className="z-50">
                <button className="p-2 text-xl">☰</button>
              </div>
            </div>
          </div>
          <div className="divider w-full h-px">
            <div className="divder-line h-px w-full transition-colors"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative top-0 left-0 w-full z-40 md:fixed xs:fixed transition-colors">
      <div className=" transition-colors h-navHeight whitespace-nowrap backdrop-blur bg-overlayBackground border-b border-solid border-borderColor">
        <div className="wraper sm:py-0 sm:pl-6 sm:pr-2">
          <div className="container mx-auto my-0 flex justify-between items-center h-full">
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
            <div className="h-full flex-grow ">
              <div className="bg-none justify-end items-center h-full transition-colors flex">
                <div className="xs:hidden md:flex">
                  <Nav navItems={navItems} />
                </div>
                <div>
                  <SearchButton />
                </div>
              </div>
            </div>
            <div className="content h-16 flex-grow flex justify-end items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                className="px-3 xs:hidden xl:flex xl:items-center"
              >
                <span className="relative rounded-full m-4 w-2 h-2 bg-green-600 inline-block before:content-[' '] before:absolute before:rounded-[50%] before:bg-green-400 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-100 before:animate-ripple"></span>
                <span className=" cursor-pointer caret-transparent text-base text-green-400/80">
                  Availble
                </span>
              </motion.div>

              <div className="flex items-center justify-center gap-1 xs:hidden sm:flex">
                <ModeToggle />
                <Nav navItems={socialNavItems} />
              </div>
            </div>

            {/* small screen bar button for menu opner */}
            <motion.div className="z-50" onClick={() => setMenuOpen(!menuOpen)}>
              <button className="p-2 text-xl">{menuOpen ? "X" : "☰"}</button>
            </motion.div>
          </div>
        </div>
        {/* Full Screen Menu Overlay */}
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
              email="ankit.murae@gmail.com"
            />
          </motion.div>
        )}
        <div className="divider w-full h-px">
          <div className="divder-line h-px w-full transition-colors"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
