import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 text-slate-800 dark:text-white",
        isScrolled
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <h1 className="font-extrabold text-slate-900 dark:text-white flex items-center">
            <span className="text-[#00ff94]">S</span>
            <span className="text-[#38bdf8]">EF</span>
            <span className="text-[#a855f7]">AT</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">

          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-slate-700 hover:text-[#00fffb] transition-colors duration-300 dark:text-gray-300"
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle */}
          {/* <ThemeToggle /> */}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-900 dark:text-white z-50"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 text-slate-900 dark:bg-gray-950/95 dark:text-white backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-xl transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >

          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-slate-700 hover:text-[#00fffb] transition-colors duration-300 dark:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle in Mobile */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="mt-4"
          >
            {/* <ThemeToggle /> */}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;