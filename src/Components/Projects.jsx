import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <section id="projects" className="py-24 text-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="mt-4 text-white/60">Loading masterpieces...</p>
      </section>
    );

  if (error)
    return (
      <section id="projects" className="py-24 text-center">
        <p className="text-red-400 glass-card px-6 py-4 rounded-xl inline-block">{error}</p>
      </section>
    );

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A selection of my recent works, ranging from full-stack applications to innovative digital platforms.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {['all', 'client', 'practice'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === f
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  : "glass-card text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {f === 'all' ? 'All Projects' : f === 'client' ? 'Client Work' : 'Practice'}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects
              .filter((p) => filter === "all" || p.type === filter)
              .map(({ id, name, image, stack, type }) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                  key={id}
                  className="group glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl flex flex-col"
                >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {stack?.slice(0, 3).map((s) => (
                    <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/70 border border-white/10">
                      {s}
                    </span>
                  ))}
                  {stack?.length > 3 && (
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/50">
                      +{stack.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  to={`/projects/${id}`}
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-all group/link"
                >
                  View Case Study
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
