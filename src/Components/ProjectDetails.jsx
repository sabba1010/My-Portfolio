import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === projectId);
        setProject(found);
      });
  }, [projectId]);

  if (!project) return <div className="text-center py-20">Loading...</div>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">{project.name}</h2>
      <img src={project.image} alt={project.name} className="w-full h-64 object-cover mb-6 rounded" />

      <h3 className="text-xl font-semibold mb-2">Technology Stack:</h3>
      <ul className="list-disc list-inside mb-4">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Description:</h3>
      <p className="mb-4">{project.description}</p>

      <h3 className="text-xl font-semibold mb-2">Challenges Faced:</h3>
      <p className="mb-4">{project.challenges}</p>

      <h3 className="text-xl font-semibold mb-2">Future Improvements:</h3>
      <p className="mb-4">{project.improvements}</p>

      <div className="flex flex-wrap gap-4 mt-4">
        <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noreferrer">
          Live Site
        </a>
        {project.clientRepo && (
          <a href={project.clientRepo} className="btn btn-secondary" target="_blank" rel="noreferrer">
            GitHub (Client)
          </a>
        )}
        {project.serverRepo && (
          <a href={project.serverRepo} className="btn btn-accent" target="_blank" rel="noreferrer">
            GitHub (Server)
          </a>
        )}
      </div>

      <Link to="/projects" className="btn btn-link mt-6 block">
        ← Back to Projects
      </Link>
    </section>
  );
};

export default ProjectDetails;
