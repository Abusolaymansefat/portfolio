import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center justify-center text-lg font-medium"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300 hover:scale-110 transition-transform" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 hover:scale-110 transition-transform" />
      )}
    </button>
  );
};

export default ThemeToggle;
