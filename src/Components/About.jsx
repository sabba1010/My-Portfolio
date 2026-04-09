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
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-mesh"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full glass-effect text-sm font-semibold text-primary mb-6"
          >
            Available for new opportunities
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight"
            custom={1}
            variants={staggerText}
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 font-medium mb-8 max-w-2xl mx-auto lg:mx-0"
            custom={2}
            variants={staggerText}
          >
            I’m <span className="text-white font-bold">Sabba Hossain</span>, a Junior Web Developer specializing in building high-performance, visually stunning web applications.
          </motion.p>

          <div className="space-y-6 text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            <motion.p custom={3} variants={staggerText}>
              Currently pursuing a Diploma in CST at Daffodil Polytechnic Institute. I turn complex problems into elegant, user-centric solutions.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={Resume}
              download
              className="bg-white text-black py-4 px-8 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Get Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="glass-effect text-white py-4 px-8 rounded-2xl font-bold transition-all duration-300 hover:bg-white/10"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
            >
              <img
                src={profileImg}
                alt="Sabba Hossain"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
