// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { FaArrowUp, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const primaryColor = "#00ff94";
  // Contact info items with links
  const contactItems = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      value: "+8801625192069",
      color: "#00ff94",
      link: "tel:+8801625192069",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "sefat01625@gmail.com",
      color: "#00d1ff",
      link: "mailto:nazmulhossen.hstu.21@gmail.com",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      value: "Abusolaymansefat",
      color: "#a855f7",
      link: "https://github.com/Abusolaymansefat",
      isExternal: true,
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "abu-solayman-sefat",
      color: "#00ff94",
      link: "https://www.linkedin.com/in/abu-solayman-sefat/",
      isExternal: true,
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      value: "Chat Now",
      color: "#00d1ff",
      link: "https://wa.me/+8801625192069",
      isExternal: true,
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Address",
      value: "Laxmirpur, Shador, Dhaka - 1216, Bangladesh",
      color: "#a855f7",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#00ff94]">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out
            through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-xl bg-gray-800/50 border border-gray-700 overflow-hidden group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
                  }}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 15px ${item.color}`,
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10 flex items-center gap-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}`,
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-gray-400 group-hover:text-white transition-colors hover:underline flex items-center gap-1"
                      >
                        {item.value}
                        {item.isExternal && (
                          <span className="text-xs opacity-70">(↗)</span>
                        )}
                      </a>
                    ) : (
                      <p className="text-gray-400 group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-xl"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(45deg, #00ff9410, #00d1ff10, #a855f710)",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#00ff94]">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00ff94] focus:ring-2 focus:ring-[#00ff94]/50 outline-none transition-all text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00d1ff] focus:ring-2 focus:ring-[#00d1ff]/50 outline-none transition-all text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00d1ff] focus:ring-2 focus:ring-[#00d1ff]/50 outline-none transition-all text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/50 outline-none transition-all text-white"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    isSubmitting
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-[#00ff94] hover:bg-[#00e676] text-gray-900"
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-lg bg-green-900/50 border border-green-800 text-green-400 text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-lg bg-red-900/50 border border-red-800 text-red-400 text-center"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: primaryColor }}
          className="flex flex-col items-center cursor-pointer mt-6"
          onClick={() => document.getElementById("home")?.scrollIntoView()}
        >
          <FaArrowUp className="text-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
