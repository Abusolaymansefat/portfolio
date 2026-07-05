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
      className="py-5 pb-6 px-6 bg-white text-black transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
      style={{ scrollMarginTop: "70px" }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h2
          className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2"
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
              className={`${index === educationData.length - 1 ? "mb-0" : "mb-4"
                } ml-4 relative`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div
                className="absolute w-4 h-4 rounded-full -left-[9px] mt-2"
                style={{ backgroundColor: primaryColor }}
              />

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,255,251,0.2)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden group cursor-pointer dark:bg-gray-800 dark:border-gray-700"
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${primaryColor}20, transparent)`,
                  }}
                />

                {/* Degree */}
                <h3
                  className="text-xl font-semibold mb-2 relative z-10"
                  style={{ color: primaryColor }}
                >
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm text-gray-600 dark:text-gray-300 relative z-10">
                  {edu.institution}
                </p>

                {/* Details */}
                <p className="mt-3 leading-7 text-gray-700 dark:text-gray-200 relative z-10">
                  <span className="font-semibold">Board:</span> {edu.board}
                  <br />
                  <span className="font-semibold">Group:</span> {edu.group}
                  <br />
                  <span className="font-semibold">Session:</span> {edu.year}
                </p>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-5 relative z-10">
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
        className="text-center -mt-2 mb-0 pb-0"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{ color: primaryColor }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;