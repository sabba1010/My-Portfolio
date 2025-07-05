import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Information
      </motion.h2>

      <motion.div
        className="space-y-8 text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-5">
          <FaEnvelope className="text-2xl text-secondary" />
          <span>
            Email:{" "}
            <a
              href="mailto:sabbahossain@gmail.com"
              className="underline hover:text-primary transition-colors duration-300"
            >
              sabbahossain@gmail.com
            </a>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <FaPhone className="text-2xl text-secondary" />
          <span>
            Phone:{" "}
            <a
              href="tel:+8801860678455"
              className="hover:text-primary transition-colors duration-300"
            >
              +880 1860 678 455
            </a>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <FaWhatsapp className="text-2xl text-secondary" />
          <span>
            WhatsApp:{" "}
            <a
              href="https://wa.me/8801860678455"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              Chat on WhatsApp
            </a>
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

