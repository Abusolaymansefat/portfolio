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
  const secondaryColor = "#00D1FF";

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
    { icon: <FaReact />, name: "React.js", color: "#61dafb" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38bdf8" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
    { icon: <SiExpress />, name: "Express.js", color: "#ffffff" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#4db33d" },
    { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
    { icon: <SiFirebase />, name: "Firebase", color: "#ffca28" },
  ];

  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-24 px-6 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-64 h-64 rounded-full overflow-hidden border-4 shadow-xl"
          style={{ borderColor: primaryColor }}
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
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col max-w-xl gap-6"
        >
          {/* Title */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold"
            style={{ color: primaryColor }}
          >
            About Me
          </motion.h1>

          {/* Description */}
          <motion.p variants={item} className="text-gray-300 text-lg leading-relaxed">
            Hi! I'm{" "}
            <span className="text-green-400 font-semibold">Abu Solayman Sefat</span>,
            an Electrical and Electronic Engineering student from{" "}
            <span className="text-sky-400 font-semibold">
              Shymoli Ideal Engineering College
            </span>
            , Chittagong and a passionate Frontend developer.
          </motion.p>

          <motion.p variants={item} className="text-gray-300 text-lg leading-relaxed">
            I enjoy building clean, scalable, and user-friendly web applications.
            My focus is on creating modern interfaces that provide smooth user
            experiences.
          </motion.p>

          <motion.p variants={item} className="text-gray-300 text-lg leading-relaxed">
            My goal is to work as a{" "}
            <span style={{ color: secondaryColor }} className="font-semibold">
              Full-Stack Web Developer
            </span>{" "}
            and contribute to impactful tech solutions while continuously learning
            new technologies.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={item}
            className="bg-gray-900/60 border border-gray-700 p-6 rounded-2xl backdrop-blur-lg shadow-lg"
          >
            <h3
              className="text-2xl font-semibold mb-5"
              style={{ color: secondaryColor }}
            >
              🚀 Tech Stack
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <div className="text-2xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

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
              onClick={() => document.getElementById("projects")?.scrollIntoView()}
            >
              <FaArrowDown className="text-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;