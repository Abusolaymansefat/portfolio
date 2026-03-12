import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects, primaryColor, secondaryColor } from "../data/projects";

const ProjectDetails = () => {
          const { id } = useParams();
          const project = projects.find(p => p.id === parseInt(id));

          if (!project) {
                    return <h2 className="text-white text-center mt-20">Project Not Found</h2>;
          }

          return (
                    <section className="bg-gray-950 min-h-screen py-20 px-4">
                              <div className="max-w-7xl mx-auto bg-gray-900 p-10 rounded-xl">

                                        <h1 className="text-4xl font-bold mb-8" style={{ color: primaryColor }}>
                                                  {project.name}
                                        </h1>

                                        {/* Swiper Slider */}
                                        <Swiper
                                                  navigation
                                                  pagination={{ clickable: true }}
                                                  modules={[Navigation, Pagination]}
                                                  className="mb-10 rounded-xl"
                                        >
                                                  {project.images.map((img, index) => (
                                                            <SwiperSlide key={index}>
                                                                      <img src={img} alt="" className="w-full rounded-xl" />
                                                            </SwiperSlide>
                                                  ))}
                                        </Swiper>

                                        <p className="text-gray-300 text-lg mb-10">{project.description}</p>

                                        {/* Technologies */}
                                        <h3 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
                                                  Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-3 mb-10">
                                                  {project.technologies.map((tech, i) => (
                                                            <span
                                                                      key={i}
                                                                      className="px-4 py-2 rounded-full border"
                                                                      style={{ borderColor: primaryColor, color: primaryColor }}
                                                            >
                                                                      {tech}
                                                            </span>
                                                  ))}
                                        </div>

                                        {/* Challenges */}
                                        <h3 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
                                                  Challenges
                                        </h3>
                                        <ul className="space-y-2 mb-10 text-gray-400">
                                                  {project.challenges.map((item, i) => (
                                                            <li key={i}>• {item}</li>
                                                  ))}
                                        </ul>

                                        {/* Links */}
                                        <div className="flex flex-wrap gap-4">
                                                  <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="px-6 py-3 rounded-lg font-bold"
                                                            style={{ backgroundColor: primaryColor, color: "#000" }}
                                                  >
                                                            Live Demo
                                                  </a>

                                                  <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="border px-6 py-3 rounded-lg"
                                                            style={{ borderColor: primaryColor, color: primaryColor }}
                                                  >
                                                            Client Code
                                                  </a>

                                                  {project.serverLink && (
                                                            <a
                                                                      href={project.serverLink}
                                                                      target="_blank"
                                                                      rel="noreferrer"
                                                                      className="border px-6 py-3 rounded-lg"
                                                                      style={{ borderColor: secondaryColor, color: secondaryColor }}
                                                            >
                                                                      Server Code
                                                            </a>
                                                  )}
                                        </div>
                              </div>
                    </section>
          );
};

export default ProjectDetails;