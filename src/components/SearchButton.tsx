import React, { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ transition: { duration: 0.1 } }}
        onClick={() => setIsSearchOpen(true)}
        className="xs:bg-transparent xs:border-none py-2 px-3 flex items-center gap-1 text-sm text-copy-lighter bg-foreground rounded-full border border-solid border-borderColor outline-none hover:border-borderHoverColor"
      >
        <span className="flex items-center gap-1">
          <SearchIcon size={16} />
          <span className="xs:hidden md:inline-block text-sm transition-colors">
            Search
          </span>
        </span>
        <span className="xs:hidden md:flex items-center">
          <kbd className="text-xs ml-1 border border-borderColor px-1 rounded">
            Ctrl+K
          </kbd>
        </span>
      </motion.button>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default SearchButton;
