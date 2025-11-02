/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import SocialCircleButton from "./Button/SocialCircleButton";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <a
            className="text-xl font-bold text-primary flex items-center justify-center md:justify-start"
            href="#hero"
          >
            <h1 className="font-extrabold text-white flex items-center select-text">
              <span className="text-[#00ff94]">S</span>
              <span className="text-[#38bdf8]">EF</span>
              <span className="text-[#a855f7]">AT</span>
            </h1>
          </a>
        </motion.div>

        {/* Center: Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="hover:text-[#00ff94] transition-colors duration-300"
            >
              {name}
            </a>
          ))}
        </motion.nav>

        {/* Right: Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-6 text-xl"
        >
          <SocialCircleButton
            icon={FaFacebookF}
            url="https://www.facebook.com/abusolaymun.sefat/"
            color="bg-blue-700"
          />
          <SocialCircleButton
            icon={FaGithub}
            url="https://github.com/Abusolaymansefat"
            color="bg-gray-800"
          />
          <SocialCircleButton
            icon={FaLinkedinIn}
            url="https://www.linkedin.com/in/abu-solayman-sefat/"
            color="bg-blue-600"
          />
          <SocialCircleButton
            icon={FaWhatsapp}
            url="https://wa.me/+8801625192069"
            color="bg-green-600"
          />
        </motion.div>
      </div>

      {/* Footer Bottom Text */}
      <p className="mt-6 text-center text-sm text-gray-400 select-text">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
