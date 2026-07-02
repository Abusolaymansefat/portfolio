import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { projects, primaryColor, secondaryColor } from "../data/projects";

const ProjectDetails = () => {
          const { id } = useParams();
          const navigate = useNavigate();
          const [thumbsSwiper, setThumbsSwiper] = useState(null);

          const project = projects.find((p) => p.id === parseInt(id));

          if (!project) {
                    return (
                              <h2 className="text-slate-900 text-center mt-20 dark:text-white">Project Not Found</h2>
                    );
          }

          return (
                    <section className="bg-background text-foreground min-h-screen py-20 px-4 transition-colors duration-300">
                              <div className="max-w-6xl mx-auto bg-card border border-border p-10 rounded-xl shadow-lg text-white">

                                        <div className="flex items-center justify-between gap-4 mb-8">
                                                  <h1
                                                            className="text-4xl font-bold"
                                                            style={{ color: primaryColor }}
                                                  >
                                                            {project.name}
                                                  </h1>

                                                  <button
                                                            onClick={() => navigate("/")}
                                                            className="flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition-all duration-300 hover:opacity-80"
                                                            style={{
                                                                      borderColor: primaryColor,
                                                                      color: primaryColor,
                                                            }}
                                                            aria-label="Close project details"
                                                  >
                                                            ×
                                                  </button>
                                        </div>

                                        {/* Main Slider */}
                                        <Swiper
                                                  navigation
                                                  thumbs={{ swiper: thumbsSwiper }}
                                                  modules={[Navigation, Thumbs]}
                                                  className="mb-6 rounded-xl"
                                        >
                                                  {project.images.map((img, index) => (
                                                            <SwiperSlide key={index}>
                                                                      <img
                                                                                src={img}
                                                                                alt=""
                                                                                className="w-full h-[420px] object-cover rounded-xl"
                                                                      />
                                                            </SwiperSlide>
                                                  ))}
                                        </Swiper>

                                        {/* Thumbnail Slider */}
                                        <Swiper
                                                  onSwiper={setThumbsSwiper}
                                                  slidesPerView={4}
                                                  spaceBetween={10}
                                                  modules={[Thumbs]}
                                                  className="mb-10"
                                        >
                                                  {project.images.map((img, index) => (
                                                            <SwiperSlide key={index}>
                                                                      <img
                                                                                src={img}
                                                                                alt=""
                                                                                className="w-full h-24 object-cover rounded-lg cursor-pointer border border-slate-300 dark:border-gray-700"
                                                                      />
                                                            </SwiperSlide>
                                                  ))}
                                        </Swiper>

                                        {/* Description */}
                                        <p className="text-white text-lg mb-10">
                                                  {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <h3
                                                  className="text-2xl font-semibold mb-4"
                                                  style={{ color: secondaryColor }}
                                        >
                                                  Technologies
                                        </h3>

                                        <div className="flex flex-wrap gap-3 mb-10">
                                                  {project.technologies.map((tech, i) => (
                                                            <span
                                                                      key={i}
                                                                      className="px-4 py-2 rounded-full border text-sm"
                                                                      style={{
                                                                                borderColor: primaryColor,
                                                                                color: primaryColor,
                                                                      }}
                                                            >
                                                                      {tech}
                                                            </span>
                                                  ))}
                                        </div>

                                        {/* Challenges */}
                                        <h3
                                                  className="text-2xl font-semibold mb-4"
                                                  style={{ color: secondaryColor }}
                                        >
                                                  Challenges
                                        </h3>

                                        <ul className="space-y-2 mb-10 text-white">
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
                                                            style={{
                                                                      backgroundColor: primaryColor,
                                                                      color: "#000",
                                                            }}
                                                  >
                                                            Live Demo
                                                  </a>

                                                  <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="border px-6 py-3 rounded-lg"
                                                            style={{
                                                                      borderColor: primaryColor,
                                                                      color: primaryColor,
                                                            }}
                                                  >
                                                            Client Code
                                                  </a>

                                                  {project.serverLink && (
                                                            <a
                                                                      href={project.serverLink}
                                                                      target="_blank"
                                                                      rel="noreferrer"
                                                                      className="border px-6 py-3 rounded-lg"
                                                                      style={{
                                                                                borderColor: secondaryColor,
                                                                                color: secondaryColor,
                                                                      }}
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