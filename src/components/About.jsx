import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImage from "../assets/Abu solayman.png";
import { FaArrowDown, FaNodeJs, FaReact } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";

const About = () => {
  // const primaryColor = "var(--primary)";
  // const secondaryColor = "var(--secondary)";
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
    { icon: <SiTypescript />, name: "TypeScript", description: "Strongly typed React development.", color: "#3178c6" },
    { icon: <SiPrisma />, name: "Prisma", description: "Modern ORM for database modeling.", color: "#0c344b" },
    { icon: <SiPostgresql />, name: "PostgreSQL", description: "Reliable production-ready relational database.", color: "#336791" },
    { icon: <SiRedux />, name: "Redux", description: "Predictable state management for apps.", color: "#764abc" },
    { icon: <MdSecurity />, name: "BetterAuth", description: "Secure authentication flows for modern apps.", color: "#5a67d8" },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 text-slate-900 py-5 px-6 min-h-screen flex items-center transition-colors duration-300 dark:bg-gray-950 dark:text-white"
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
            className="bg-white/80 border border-slate-200 p-6 rounded-2xl backdrop-blur-lg shadow-lg dark:bg-gray-900/60 dark:border-gray-700"
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
                  initial={{ scale: 0.98, opacity: 0, y: 8 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06, y: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="text-2xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className="text-slate-700 text-sm dark:text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>



          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 lg:mt-6 flex justify-center"
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