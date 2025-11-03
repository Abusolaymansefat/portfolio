import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";
import profileImage from "../assets/Abu solayman.png";
import {
  FaProjectDiagram,
  FaCode,
  FaServer,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowDown,
} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import { IoMdContacts } from "react-icons/io";
import CountUp from "react-countup";
import Typewriter from "typewriter-effect";
import GlowingButton from "./Button/GlowingButton";
import SocialCircleButton from "./Button/SocialCircleButton";

const Banner = () => {
  const primaryColor = "#00ff94";
  const grayColor = "#6b7280";
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Abu-solayman-Sefat-Full Stack Developer-Resume.pdf";
    link.download = "Abu-solayman-Sefat-Full Stack Developer-Resume.pdf";
    link.click();
  };

  const handleContactButton = () => {
    navigate("/contact");
  };

  const stats = [
    { value: 20, label: "Projects Completed", icon: <FaProjectDiagram /> },
    { value: 600, label: "GitHub Commits", icon: <FaCode /> },
    { value: 14, label: "Technologies", icon: <FaServer /> },
  ];

  const techIcons = [FaReact, FaNodeJs, SiMongodb, SiTailwindcss];

  const renderFloatingIcons = (radius, offset) =>
    techIcons.map((Icon, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center"
        style={{
          width: 50,
          height: 50,
          left: `${Math.cos(i * 1.57) * radius + offset}px`,
          top: `${Math.sin(i * 1.57) * radius + offset}px`,
        }}
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          },
        }}
      >
        <Icon className="text-2xl" />
      </motion.div>
    ));

  return (
    <section
      id="home"
      className="min-h-screen py-20 px-4 bg-gray-950 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Image */}
        <div className="flex justify-center lg:hidden mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", damping: 10 },
            }}
          >
            <div className="relative w-64 h-64">
              <img
                src={profileImage}
                alt="Abu solayman sefat"
                className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl relative z-10"
              />
              {renderFloatingIcons(140, 100)}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                    "0 0 30px 10px rgba(0, 255, 148, 0.5)",
                    "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Hi, I'm{" "}
                <span style={{ color: primaryColor }}>Abu solayman Sefat </span>
              </h1>

              <div
                className="text-2xl md:text-3xl font-semibold mb-6 h-12"
                style={{ color: primaryColor }}
              >
                <Typewriter
                  options={{
                    strings: ["Full Stack Developer", "Problem Solver"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <p className="text-lg mb-8 text-gray-400 max-w-2xl">
                I build exceptional digital experiences with modern web
                technologies. Currently specializing in MERN stack development and
                creating responsive, user-friendly applications.
              </p>

              {/* Stats */}
              <div ref={ref} className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-center"
                  >
                    <div
                      className="flex justify-center text-2xl mb-2"
                      style={{ color: primaryColor }}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {inView ? (
                        <CountUp end={stat.value} duration={2} suffix="+" />
                      ) : (
                        0
                      )}
                    </div>
                    <div className="text-sm" style={{ color: grayColor }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <GlowingButton onClick={handleDownloadCV} icon={HiDownload} size="lg">
                  Resume
                </GlowingButton>

                <GlowingButton onClick={handleContactButton} size="lg">
                  <IoMdContacts /> Contact Me
                </GlowingButton>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 w-full">
                <SocialCircleButton
                  icon={FaGithub}
                  url="https://github.com/Abusolaymansefat"
                  color="bg-gray-800"
                />
                <SocialCircleButton
                  icon={FaLinkedin}
                  url="https://www.linkedin.com/in/abu-solayman-sefat/"
                  color="bg-gray-800"
                />
                <SocialCircleButton
                  icon={FaWhatsapp}
                  url="https://wa.me/+8801625192069"
                  color="bg-gray-800"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 order-1 lg:order-2 hidden lg:flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", damping: 10 },
              }}
            >
              <div className="relative w-96 h-96">
                <img
                  src={profileImage}
                  alt="Md Nazmul Hossen"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl relative z-10"
                />
                {renderFloatingIcons(220, 170)}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  animate={{
                    boxShadow: [
                      "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                      "0 0 30px 10px rgba(0, 255, 148, 0.5)",
                      "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 lg:mt-20 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{ color: primaryColor }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView()}
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
