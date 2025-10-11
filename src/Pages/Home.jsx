import React from "react";
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
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* navbar */}
      <Navbar/>
      {/* main content */}
      <Banner/>
      <About/>
      <Project/>
      <Skill/>
      <Education/>
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
