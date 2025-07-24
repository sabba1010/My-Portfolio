import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-base-200 text-base-content py-6 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="text-sm mb-4 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Sabba Hossain. All rights reserved.</p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope />{" "}
            <a href="mailto:sabbahossain@gmail.com" className="hover:underline">
              sabbahossain@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhone />{" "}
            <a href="tel:+8801869678455" className="hover:underline">
              01869678455
            </a>
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {[
            {
              href: "https://github.com/sabba1010",
              label: "GitHub",
              icon: <FaGithub size={24} />,
            },
            {
              href: "https://www.linkedin.com/in/sabba1010/",
              label: "LinkedIn",
              icon: <FaLinkedin size={24} />,
            },
            {
              href: "https://www.facebook.com/sabba.hossain.niloy/",
              label: "Facebook",
              icon: <FaFacebook size={24} />,
            },
            {
              href: "https://twitter.com/your-link",
              label: "Twitter",
              icon: <FaTwitter size={24} />,
            },
          ].map(({ href, label, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="hover:text-primary transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

