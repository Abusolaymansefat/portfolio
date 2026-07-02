import React from "react";
import { motion } from "framer-motion";

const GlowingButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative px-8 py-2 font-semibold text-white rounded-lg shadow-lg transition-all duration-300 transform
        bg-gradient-to-r from-indigo-600 via-cyan-500 to-violet-600
        hover:brightness-110 focus:outline-none overflow-hidden ${className}`}
    >
      {/* animated soft glow using pseudo-element */}
      <span className="absolute -inset-0 rounded-lg before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-indigo-500 before:via-cyan-400 before:to-violet-500 before:opacity-60 before:blur-md before:transform before:scale-95 before:transition before:duration-500 before:group-hover:scale-105 before:group-hover:opacity-100 -z-10" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowingButton;
