/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowDown, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Diploma in Electrical and Electronic Engineering (EEE)",
    institution: "Shymoli Ideal Engineering College, Chittagong",
    board: "BTEB",
    group: "Electrical & Electronic Engineering",
    year: "2016 - 2021",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Kazir Dighir Par Social Welfare High School",
    board: "Cumilla",
    group: "Commerce",
    year: "2014 - 2016",
  },
];

const Education = () => {
  const primaryColor = "#00fffb";

  return (
    <section
      id="education"
      className="min-h-screen py-20 px-6 bg-gray-900 text-gray-100 transition-colors duration-300"
      style={{ scrollMarginTop: "70px" }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h2
          className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2"
          style={{ color: primaryColor }}
        >
          <FaGraduationCap />
          Academic Background
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#00fffb] ml-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Dot */}
              <div
                className="absolute w-4 h-4 rounded-full -left-[9px] mt-2"
                style={{ backgroundColor: primaryColor }}
              ></div>

              {/* Animated Card */}
              <motion.div
                whileHover={{
                  scale: 1.04,
                  opacity: 1,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative p-6 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg cursor-pointer overflow-hidden group"
              >
                {/* Fade overlay effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${primaryColor}20, transparent)`,
                  }}
                ></motion.div>

                <h3
                  className="text-xl font-semibold mb-1 relative z-10"
                  style={{ color: primaryColor }}
                >
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-300 relative z-10">
                  {edu.institution}
                </p>

                <p className="mt-2 leading-relaxed text-gray-200 relative z-10">
                  <span className="font-semibold">Board:</span> {edu.board}
                  <br />
                  <span className="font-semibold">Group:</span> {edu.group}
                  <br />
                  <span className="font-semibold">Session:</span> {edu.year}
                </p>

                {/* Animated underline progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-4 overflow-hidden relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.2,
                      duration: 0.8,
                    }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Footer Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-16 text-center"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{ color: primaryColor }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
