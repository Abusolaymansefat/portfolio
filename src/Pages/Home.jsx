import React, { useEffect } from "react";
import StarBackground from "../components/StarBackground/StarBackground";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    // If navigated to a hash like /#projects, smoothly scroll to it after mount
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      // small timeout to allow page content to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500">
      {/* Background Effects */}
      <StarBackground />

      {/* navbar */}
      <Navbar />
      {/* main content */}
      <Banner />
      <About />
      <Project />
      <Skill />
      <Education />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
