import React from "react";
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

const Education = () => {
  return (
    <section
      id="education"
      aria-label="Educational Qualification Section"
      className="max-w-4xl mx-auto px-6 py-16 bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-orange-500"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Educational Qualification
      </motion.h2>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="rounded-lg p-6 bg-gray-800 shadow-md hover:shadow-orange-600/40 transition-shadow duration-300 cursor-pointer"
          variants={fadeUpScale}
          whileHover={{
            scale: 1.03,
          }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Diploma in Computer Science & Technology (CST)
          </h3>
          <p className="text-lg font-medium text-orange-500">
            Daffodil Polytechnic Institute
          </p>
          <p className="mt-1 text-gray-400 italic">Currently Running</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
