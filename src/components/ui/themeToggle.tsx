"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  if (!theme) return null;
  return (
    <motion.label
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      className="grid cursor-pointer place-items-center bg-overlayBackground shadow-inner border border-borderColor rounded-full py-0.5 transition-all px-1"
    >
      <input
        type="checkbox"
        checked={theme === "dark"}
        aria-label="Toggle dark mode"
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="sr-only col-span-2 col-start-1 row-start-1"
      />

      {/* Sun Icon for Light Theme */}
      <motion.svg
        className="stroke-copy-light bg-foreground rounded-full col-start-1 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={theme === "dark" ? { opacity: 0 } : { opacity: 1 }}
        whileHover={{ scale: 1.05, rotate: 15 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </motion.svg>

      {/* Moon Icon for Dark Theme */}
      <motion.svg
        className="stroke-copy-light bg-zinc-950 rounded-full col-start-2 row-start-1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={theme === "light" ? { opacity: 0 } : { opacity: 1 }}
        whileHover={{ scale: 1.05, rotate: 15 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </motion.svg>
    </motion.label>
  );
}
