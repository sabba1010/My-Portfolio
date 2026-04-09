import React, { Suspense, lazy, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Resume from "../assets/Resume (1).pdf";

const HeroScene = lazy(() => import("./HeroScene"));

// Animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerText = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1 });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-mesh"
    >
      <Suspense fallback={null}>
        {isInView && <HeroScene />}
      </Suspense>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-sm font-bold text-primary mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Full-Stack Engineer (MERN Stack)
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1] tracking-tighter section-title"
            custom={1}
            variants={staggerText}
          >
            Engineering the <br />
            <span className="text-gradient">Future.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            custom={2}
            variants={staggerText}
          >
            I’m <span className="text-white font-bold underline decoration-primary/50 underline-offset-4">Sabba Hossain</span>. I build high-performance, scalable web ecosystems using the MERN stack.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={Resume}
              download
              className="bg-primary text-white py-4 px-10 rounded-2xl font-bold font-display shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_50px_-5px_var(--color-primary)]"
            >
              Get Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="glass-effect text-white py-4 px-10 rounded-2xl font-bold font-display transition-all duration-300 hover:bg-white/10"
            >
              Case Studies
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end h-[500px] md:h-[600px] relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] relative">
               <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20 font-display">Loading 3D Robot...</div>}>
                {isInView && (
                  <Spline 
                    scene="https://prod.spline.design/EEwxOg0LQF9t5pJh/scene.splinecode" 
                    className="w-full h-full"
                  />
                )}
              </Suspense>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
