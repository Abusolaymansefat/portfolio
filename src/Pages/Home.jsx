import React from "react";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import StarBackground from "../components/StarBackground/StarBackground";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* navbar */}

      {/* main content */}

      {/* Footer */}
    </div>
  );
};

export default Home;
