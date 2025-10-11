import React from "react";

const GlowingButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-10 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg transition-all duration-300
        hover:shadow-indigo-500/50 hover:scale-105 focus:outline-none
        before:absolute before:inset-0 before:rounded-lg before:bg-indigo-500 before:blur-md before:opacity-75 before:-z-10
        ${className}`}
    >
      {children}
    </button>
  );
};

export default GlowingButton;
 