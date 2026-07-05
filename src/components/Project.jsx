
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { projects, primaryColor, secondaryColor } from "../data/projects";
import ProjectCard from "./ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GlowingButton from "./Button/GlowingButton";


const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projects.slice(0, visibleCount);
  const isExpanded = visibleCount >= projects.length;

  const toggleProjects = () => {
    setVisibleCount((prevCount) => (prevCount >= projects.length ? 3 : prevCount + 3));
  };

  return (
    <section className="bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-gray-100 py-5 min-h-screen px-4 transition-colors duration-300">
      <h2 className="text-7xl font-bold text-center mb-6" style={{ color: primaryColor }}>
        My Projects
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        ))}

        {projects.length > 3 && (
          <GlowingButton
            onClick={toggleProjects}
            className="mx-auto mt-2"
          >
            {isExpanded ? "Show Less" : "See More"}
          </GlowingButton>
        )}

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
            onClick={() => document.getElementById("skills")?.scrollIntoView()}
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>


      {/* Scroll Arrow */}
      {/* <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center md:justify-start mt-6 cursor-pointer"
        style={{ color: primaryColor }}
        onClick={() =>
          document
            .getElementById("Skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaArrowDown className="text-2xl" />
      </motion.div> */}
    </section>
  );
};

export default Projects;