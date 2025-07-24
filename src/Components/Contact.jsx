import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeUpScale = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Information Section"
      className="max-w-4xl mx-auto px-6 py-16 bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-orange-500"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Contact Information
      </motion.h2>

      {/* Comment moved outside opening tag */}
      <motion.div
        className="space-y-8 text-lg text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <FaEnvelope className="text-2xl text-orange-500" />,
            label: "Email:",
            content: (
              <a
                href="mailto:sabbahossain@gmail.com"
                className="underline text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                sabbahossain@gmail.com
              </a>
            ),
          },
          {
            icon: <FaPhone className="text-2xl text-orange-500" />,
            label: "Phone:",
            content: (
              <a
                href="tel:+8801869678455"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                +8801869678455
              </a>
            ),
          },
          {
            icon: <FaWhatsapp className="text-2xl text-orange-500" />,
            label: "WhatsApp:",
            content: (
              <a
                href="https://wa.me/8801869678455"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-300"
              >
                Chat on WhatsApp
              </a>
            ),
          },
        ].map(({ icon, label, content }) => (
          <motion.div
            key={label}
            className="flex items-center gap-5 rounded-lg p-6 bg-gray-800 shadow-md cursor-pointer hover:shadow-orange-600/40 transition-shadow duration-300"
            variants={fadeUpScale}
            whileHover={{ scale: 1.03 }}
          >
            {icon}
            <span>
              <span className="font-semibold">{label}</span> {content}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
