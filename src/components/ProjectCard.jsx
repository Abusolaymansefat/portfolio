import { FaExternalLinkAlt, FaEye, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project, primaryColor, secondaryColor }) => {
          return (
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">

                              {/* Left side - Image */}
                              <div className="md:w-1/2 h-64 md:h-auto bg-gray-800 flex items-center justify-center">
                                        <img
                                                  src={project.images[0]}
                                                  alt={project.name}
                                                  className="object-cover h-full w-full rounded-l-xl"
                                        />
                              </div>

                              {/* Right side - Details */}
                              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                                        <div>
                                                  <h3 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>
                                                            {project.name}
                                                  </h3>
                                                  <p className="text-gray-300 mb-4">{project.description}</p>

                                                  {/* Technologies */}
                                                  <div className="flex flex-wrap gap-2 mb-4">
                                                            {project.technologies.map((tech, i) => (
                                                                      <span
                                                                                key={i}
                                                                                className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm"
                                                                      >
                                                                                {tech}
                                                                      </span>
                                                            ))}
                                                  </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4 mt-4 flex-wrap">
                                                  <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="flex items-center gap-1 px-4 py-2 rounded-lg text-white font-semibold"
                                                            style={{ backgroundColor: primaryColor }}
                                                  >
                                                            <FaExternalLinkAlt /> Live
                                                  </a>

                                                  <Link
                                                            to={`/project/${project.id}`}
                                                            className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-900 font-semibold"
                                                            style={{ backgroundColor: secondaryColor }}
                                                  >
                                                            <FaEye /> View
                                                  </Link>

                                                  <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-900 font-semibold bg-gray-300"
                                                  >
                                                            <FaGithub /> Frontend
                                                  </a>

                                                  {project.serverLink && (
                                                            <a
                                                                      href={project.serverLink}
                                                                      target="_blank"
                                                                      rel="noreferrer"
                                                                      className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-900 font-semibold bg-gray-300"
                                                            >
                                                                      <FaGithub /> Backend
                                                            </a>
                                                  )}
                                        </div>
                              </div>
                    </div>
          );
};

export default ProjectCard;