import React from "react";
import profileImage from "../assets/sefat.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-20 gap-12"
    >
      {/* Left: Image */}
      <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
        <img
          src={profileImage}
          alt="Abu Solayman Sefat"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="max-w-xl text-gray-300">
        <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>
        <p className="mb-6 leading-relaxed">
          Hi! I'm Abu Solayman Sefat, an Electrical and Electronic Engineering student form Shymoli ideal engineering collage, Chittagong and passionate MERN stack developer. I love crafting clean, efficient, and
          scalable web applications that provide seamless user experiences.
        </p>

        <p className="mb-6 leading-relaxed">
          With over 3 years of experience in web development, I've worked on
          numerous projects ranging from personal portfolios to complex
          business applications. I'm always eager to learn new technologies and
          improve my skills.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside space-y-1 text-primary">
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Redux, Next.js</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, Mongoose</li>
          <li>Tailwind CSS, CSS3, HTML5</li>
          <li>Git, GitHub, CI/CD</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
