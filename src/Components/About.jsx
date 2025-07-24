import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/sabba.png";
import Resume from "../assets/Resume (1).pdf";

// Animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const staggerText = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-20 flex flex-col-reverse lg:flex-row items-center gap-16 transition-colors duration-300 bg-gray-900 rounded-2xl shadow-lg"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-90 -z-10 rounded-2xl"></div>

      {/* Text Content */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/2 text-center lg:text-left relative z-10"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
          custom={1}
          variants={staggerText}
        >
          Hey, I'm Sabba Hossain
        </motion.h1>

        <motion.p
          className="text-lg text-orange-400 font-semibold mb-6"
          custom={2}
          variants={staggerText}
        >
          Junior Web Developer | React & Tailwind Enthusiast
        </motion.p>

        <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-6">
          {[
            "I’m a passionate developer who loves turning ideas into reality through code. From a basic HTML page to full-stack web apps using React, Node.js, and MongoDB — it’s been an exciting journey!",
            "I enjoy solving problems, crafting user-friendly experiences, and exploring creative hobbies like painting and photography to fuel my design thinking.",
            "Currently pursuing a Diploma in CST at Daffodil Polytechnic Institute — always learning, growing, and building cool things.",
          ].map((text, i) => (
            <motion.p key={i} custom={i + 3} variants={staggerText}>
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            href={Resume}
            download
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-medium shadow transition-all duration-200"
          >
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-orange-500 text-orange-400 hover:bg-orange-900 py-2 px-6 rounded-lg font-medium transition-all duration-200"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image with Animation */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center relative z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square"
        >
          {/* Background Circles */}
          <div className="absolute inset-0 rounded-full bg-orange-900 opacity-10 scale-125 z-0 blur-md"></div>
          <div className="absolute inset-6 rounded-full bg-orange-800 opacity-20 scale-110 z-0 blur-sm"></div>
          <div className="absolute inset-12 rounded-full bg-orange-700 opacity-30 z-0"></div>

          {/* Profile Image */}
          <motion.img
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 180 }}
            src={profileImg}
            alt="Sabba Hossain"
            className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
