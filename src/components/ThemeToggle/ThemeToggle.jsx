import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ${theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
      >
        {theme === "dark" ? (
          <Moon size={12} className="text-gray-900" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;