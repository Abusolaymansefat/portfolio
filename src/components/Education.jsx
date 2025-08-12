import React from "react";
import { FaArrowDown, FaGraduationCap } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
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
        <h2
          className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2"
          style={{ color: primaryColor }}
        >
          <FaGraduationCap />
          Academic Background
        </h2>

        <div className="relative border-l-4 border-green-400 ml-4">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Dot */}
              <div
                className="absolute w-4 h-4 rounded-full -left-[9px] mt-2"
                style={{ backgroundColor: primaryColor }}
              ></div>

              {/* Card */}
              <div className="p-6 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: primaryColor }}
                >
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-300">{edu.institution}</p>
                <p className="mt-2 leading-relaxed text-gray-200">
                  <span className="font-semibold">Board:</span> {edu.board}
                  <br />
                  <span className="font-semibold">Group:</span> {edu.group}
                  <br />
                  <span className="font-semibold">Session:</span> {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: primaryColor }}
        className="flex flex-col items-center cursor-pointer mt-12"
        onClick={() => document.getElementById("projects")?.scrollIntoView()}
      >
        <FaArrowDown className="text-3xl" />
      </motion.div>
    </section>
  );
};

export default Education;
