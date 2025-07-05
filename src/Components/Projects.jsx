import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">Loading projects...</p>
      </section>
    );

  if (error)
    return (
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </section>
    );

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-16 bg-[#fef7f2] dark:bg-gray-900 rounded-3xl transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map(({ id, name, image }) => (
          <motion.div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
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
              <h3 className=" text-xl font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
              <Link
                to={`/projects/${id}`}
                className="btn btn-primary mt-4 inline-block mt-5 px-5 py-2 text-white rounded-lg font-medium shadow-md transition"
              >
                View More / Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
  
};

export default Projects;
