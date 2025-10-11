// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaArrowDown } from "react-icons/fa";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiFirebase,
  SiDaisyui,
  SiAuth0,
  SiRender,
  SiNextdotjs,
} from "react-icons/si";

const Skill = () => {
  const primaryColor = "#00fffb";
  const grayColor = "#6b7280";

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "HTML5", icon: <SiHtml5 />, level: 90 },
        { name: "CSS3", icon: <SiCss3 />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
        { name: "React", icon: <FaReact />, level: 70 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 50 },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: 90 },
        { name: "Daisy UI", icon: <SiDaisyui />, level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 70 },
        { name: "Express", icon: <SiExpress />, level: 60 },
        { name: "REST APIs", level: 95 },
        { name: "Authentication", icon: <SiAuth0 />, level: 90 },
        { name: "JWT", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "Firebase", icon: <SiFirebase />, level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <SiDocker />,
      skills: [
        { name: "Git", icon: <SiGit />, level: 90 },
        { name: "Vercel", icon: <IoLogoVercel />, level: 80 },
        { name: "Render", icon: <SiRender />, level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#00fffb" }}
            whileHover={{ scale: 1.02 }}
          >
            My Skills
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block h-1 mt-2 mx-auto w-24"
              style={{ backgroundColor: "#00fffb", originX: 0 }}
            />
          </motion.h2>
          <motion.p
            className="text-lg"
            style={{ color: grayColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Technologies I've mastered through hands-on projects
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: `0 30px 30px -10px ${primaryColor}20`,
              }}
              className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden"
            >
              {/* Category Header */}
              <div className="p-5 border-b border-gray-800 flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${primaryColor}20` }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {React.cloneElement(category.icon, {
                    className: "text-xl",
                    style: { color: primaryColor },
                  })}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="p-5 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="w-8 h-8 rounded-md flex items-center justify-center mt-1"
                        style={{ backgroundColor: `${primaryColor}10` }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        {skill.icon || (
                          <span className="text-xs font-medium">
                            {skill.name.split(" ")[0]}
                          </span>
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: grayColor }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.3 + skillIndex * 0.05,
                              duration: 0.8,
                            }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: primaryColor }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Animated Footer */}
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
              duration: 2,
              repeat: Infinity,
            }}
            style={{ color: primaryColor }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById("education")?.scrollIntoView()}
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
