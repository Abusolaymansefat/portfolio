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
    year: "2014 - 2016",}
];

const Education = () => {
  const primaryColor = "#00ff94";
  return (
    <section
      id="education"
      className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <FaGraduationCap className="text-primary" />
          Academic Background
        </h2>

        <div className="relative border-l-4 border-primary dark:border-green-400 ml-4">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-primary dark:bg-green-400 rounded-full -left-[9px] mt-2"></div>

              {/* Card */}
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary dark:text-green-400">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.institution}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <span className="font-semibold">Board:</span> {edu.board} <br />
                  <span className="font-semibold">Group:</span> {edu.group} <br />
                  <span className="font-semibold">Session:</span> {edu.year} <br />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: primaryColor }}
            className="flex flex-col items-center cursor-pointer mt-6"
            onClick={() => document.getElementById("projects")?.scrollIntoView()}
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
    </section>
  );
};

export default Education;
