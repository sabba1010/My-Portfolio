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
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group"
            variants={fadeUpScale}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 18l-5-2.73v-3.82l5 2.73 5-2.73v3.82l-5 2.73z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Current Studies
              </span>
              <h3 className="text-3xl font-black text-white mb-3">
                Diploma in Computer Science & Technology (CST)
              </h3>
              <p className="text-xl font-bold text-gradient mb-2">
                Daffodil Polytechnic Institute
              </p>
              <div className="flex items-center gap-2 text-white/40 font-medium italic">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently Enrolled
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
