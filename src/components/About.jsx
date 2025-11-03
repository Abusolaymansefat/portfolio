import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImage from "../assets/Abu solayman.png";
import { FaArrowDown, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const About = () => {
  const primaryColor = "#00fffb";

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center px-6 py-20 gap-12
                 bg-gray-950 text-white transition-colors duration-300"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden border-4 border-[#00fffb] shadow-xl"
      >
        <img
          src={profileImage}
          alt="Abu Solayman Sefat"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="flex flex-col justify-center max-w-xl w-full gap-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          variants={item}
          className="text-6xl font-extrabold text-[#00fffb]"
        >
          About Me
        </motion.h1>

        <motion.p variants={item} className="leading-relaxed text-lg text-gray-300">
          Hi! I'm <span className="text-[#00ff94]">Abu</span>
          <span className="text-[#38bdf8]">Solayman</span>
          <span className="text-[#a855f7]">Sefat,</span> an Electrical and
          Electronic Engineering student from{" "}
          <span className="text-[#1e99af]">
            Shymoli Ideal Engineering College
          </span>
          , Chittagong and a passionate MERN stack developer. I love crafting
          clean, efficient, and scalable web applications that provide seamless
          user experiences.
        </motion.p>

        <motion.p variants={item} className="leading-relaxed text-lg text-gray-300">
          I'm passionate about creating elegant solutions to complex problems,
          and I'm constantly learning new technologies and techniques to stay at
          the forefront of the ever-evolving web landscape.
        </motion.p>

        <motion.p variants={item} className="leading-relaxed text-lg text-gray-300">
          I am passionate about creating innovative digital solutions that blend
          clean code with creative design. My goal is to work as a Full-Stack
          Web Developer and contribute to impactful tech solutions while
          continuously learning and growing.
        </motion.p>

        {/* Tech Stack Card - like Contact's card style */}
        <motion.div
          variants={item}
          className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-[#00fffb] mb-4 flex items-center">
            🚀 <span className="ml-2">Tech Stack</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                icon: <SiNextdotjs className="text-2xl" />,
                name: "Next.js",
                color: "#ffffff",
              },
              {
                icon: <FaReact className="text-2xl" />,
                name: "React.js",
                color: "#1f749a",
              },
              {
                icon: <SiTailwindcss className="text-2xl" />,
                name: "Tailwind",
                color: "#38bdf8",
              },
              {
                icon: <FaNodeJs className="text-2xl" />,
                name: "Node.js",
                color: "#68a063",
              },
              {
                icon: <SiExpress className="text-2xl" />,
                name: "Express",
                color: "#ffffff",
              },
              {
                icon: <SiMongodb className="text-2xl" />,
                name: "MongoDB",
                color: "#589636",
              },             
              {
                icon: <SiVercel className="text-2xl" />,
                name: "Vercel",
                color: "#ffffff",
              },
              {
                icon: <SiFirebase className="text-2xl" />,
                name: "Firebase",
                color: "#ffca28",
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-all cursor-pointer"
              >
                <div style={{ color: tech.color }}>{tech.icon}</div>
                <span className="text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll down arrow */}
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: primaryColor }}
          className="flex flex-col items-center cursor-pointer mt-6"
          onClick={() => document.getElementById("projects")?.scrollIntoView()}
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
