import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/sabba.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-neutral">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] group">
              <img 
                src={profileImg} 
                alt="Sabba Hossain" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                   e.target.src = "https://i.ibb.co/C5fTMZnf/SH.png"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral to-transparent opacity-60" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 section-title">
              Behind the <span className="text-gradient">Code.</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                As a developer, I believe that building for the web is an art form. My journey is rooted in a passion for creating seamless, high-performance digital ecosystems that solve real-world problems.
              </p>
              <p>
                I specialize in the <span className="text-white font-bold">MERN Stack</span>, focusing on clean architecture and production-ready solutions. Whether it's a multi-vendor marketplace like <span className="text-primary font-bold">Project AcctEmpire</span> or a real-time messaging platform, I bring a commitment to excellence and user-centric design to every project.
              </p>
              <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 mt-10">
                <div>
                  <h4 className="text-white font-black text-xl mb-2 font-display">Location</h4>
                  <p className="text-secondary font-bold text-sm">Dhaka, Bangladesh</p>
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-2 font-display">Experience</h4>
                  <p className="text-secondary font-bold text-sm">1+ Year</p>
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-2 font-display">Education</h4>
                  <p className="text-secondary font-bold text-sm">Diploma in CST</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
