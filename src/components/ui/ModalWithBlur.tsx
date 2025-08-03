import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

interface FullScreenBlurProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className: string;
}

const FullScreenBlur: React.FC<FullScreenBlurProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 bg-overlayBackground backdrop-blur w-full",
        className
      )}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal on content click
      >
        {children}
      </motion.div>
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 text-copy-light hover:text-copy transition-all"
      >
        ✖
      </motion.button>
    </motion.div>,
    document.body
  );
};

export default FullScreenBlur;
