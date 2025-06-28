import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-200 shadow-md">
            <figure>
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{project.name}</h3>
              <Link to={`/projects/${project.id}`} className="btn btn-primary mt-4">
                View More / Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
