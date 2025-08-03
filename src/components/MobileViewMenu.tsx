"use client";
import React from "react";
import { IconMail, IconCopy } from "@tabler/icons-react";

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface MobileViewMenuProps {
  navItems: NavItem[];
  socialNavItems: NavItem[];
  email: string;
  closeMenu: () => void;
}

const MobileViewMenu: React.FC<MobileViewMenuProps> = ({
  navItems,
  socialNavItems,
  email,
  closeMenu,
}) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 text-white">
      {/* Navigation Menu */}
      <nav className="flex flex-col gap-4 text-lg font-semibold">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={closeMenu}
            className="hover:text-green-400 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Contact Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <IconMail size={24} />
          <span>{email}</span>
          <button
            onClick={handleCopyEmail}
            className="p-1 hover:text-green-400 transition-colors"
            title="Copy Email"
          >
            <IconCopy size={20} />
          </button>
        </div>
      </div>

      {/* Social Contacts */}
      <div className="flex gap-6">
        {socialNavItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="hover:text-green-400 transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Discuss Project Button */}
      <button
        onClick={closeMenu}
        className="px-6 py-3 bg-green-500 rounded-lg text-black font-bold hover:bg-green-600 transition-colors"
      >
        Discuss Project
      </button>
    </div>
  );
};

export default MobileViewMenu;
