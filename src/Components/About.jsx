import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/sabba.png";
import Resume from "../assets/Resume (1).pdf";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#fef7f2] dark:bg-gray-900 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 transition-colors duration-300"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Hi, I’m Sabba Hossain
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Junior Web Developer | React & Tailwind Enthusiast
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
          I’m a passionate developer who loves turning ideas into reality
          through code. My journey began with a simple HTML page, and now I
          build full-stack web apps using modern technologies like React,
          Node.js, and MongoDB.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
          What excites me most is solving problems and creating interactive,
          user-friendly experiences. I also enjoy creative hobbies like
          painting and photography, which inspire my design thinking.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
          I’m currently pursuing a Diploma in CST at Daffodil Polytechnic
          Institute and always eager to learn new skills, take on challenges,
          and collaborate with passionate people.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={Resume}
            download
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded font-medium text-center"
          >
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-orange-400 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900 py-2 px-6 rounded font-medium text-center"
          >
            Contact
          </motion.a>
        </div>
      </motion.div>

      {/* Profile Image with Animation and Frame */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center relative"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square"
        >
          {/* Background Circles */}
          <div className="absolute inset-0 rounded-full bg-orange-100 opacity-50 scale-[1.4] dark:bg-orange-800 z-0"></div>
          <div className="absolute inset-4 rounded-full bg-orange-200 opacity-70 scale-[1.2] dark:bg-orange-700 z-0"></div>
          <div className="absolute inset-8 rounded-full bg-orange-300 opacity-90 dark:bg-orange-600 z-0"></div>

          {/* Profile Image with Hover Effects */}
          <motion.img
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            src={profileImg}
            alt="Sabba Hossain"
            className="relative z-10 w-full h-full rounded-full object-cover shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
