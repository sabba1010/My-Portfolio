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

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="loading loading-spinner loading-lg text-primary"></div>
    </div>
  );

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-mesh">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
          ← Back to Portfolio
        </Link>
        
        <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative aspect-video overflow-hidden border-b border-white/10">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{project.name}</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 glass-effect rounded-full text-xs font-semibold text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  About the Project
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
              </section>

              {project.features && (
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-secondary rounded-full" />
                    Key Features
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/70">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Challenges</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{project.challenges}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Future Roadmap</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{project.improvements}</p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-2xl flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Project Links</h4>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-full py-4 bg-white text-black text-center rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg">
                  Visit Live Site
                </a>
                {project.clientRepo && (
                  <a href={project.clientRepo} target="_blank" rel="noreferrer" className="w-full py-4 glass-card text-white text-center rounded-xl font-bold hover:bg-white/10 transition-all">
                    Browse Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
