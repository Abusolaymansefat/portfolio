import React from "react";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import StarBackground from "../components/StarBackground/StarBackground";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* navbar */}
      <Navbar/>
      {/* main content */}
      <Banner/>
      <About/>
      <Contact/>

      {/* Footer */}
    </div>
  );
};

export default Home;
