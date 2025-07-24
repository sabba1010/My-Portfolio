import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <p className="text-lg text-white">Loading projects...</p>
      </section>
    );

  if (error)
    return (
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <p className="text-red-400">{error}</p>
      </section>
    );

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16 bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-orange-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map(({ id, name, image }) => (
          <motion.div
            key={id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-orange-600/40 hover:scale-[1.03] transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <figure className="aspect-[4/3] overflow-hidden">
              <img
                src={image}
                alt={`Screenshot of ${name}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{name}</h3>
              <Link
                to={`/projects/${id}`}
                className="inline-block mt-5 px-5 py-2 text-white rounded-lg font-medium shadow-md bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
              >
                View More / Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
