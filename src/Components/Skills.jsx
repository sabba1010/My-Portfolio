import React from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaCode,
  FaServer,
  FaLock,
  FaGlobe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiNginx,
  SiPostman,
  SiPrisma,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Responsive Design", icon: <FaGlobe className="text-green-400" /> },
    { name: "API Integration", icon: <SiPostman className="text-orange-500" /> },
  ],
  Backend: [
    { name: "Node.js / Express.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-white" /> },
    { name: "MongoDB / REST APIs", icon: <SiMongodb className="text-green-600" /> },
    { name: "JWT Auth / RBAC", icon: <FaLock className="text-yellow-500" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
  ],
  "DevOps & Security": [
    { name: "VPS / Nginx / PM2", icon: <SiNginx className="text-green-400" /> },
    { name: "Bcrypt & API Security", icon: <FaLock className="text-red-400" /> },
  ],
  Tools: [
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-600" /> },
  ],
};

const SkillChip = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 300
      }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 glass-effect group cursor-default"
    >
      <span className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {skill.icon}
      </span>
      <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-neutral-950/50">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 section-title tracking-tight">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of my technical arsenal, specialized in building scalable, 
            high-performance web applications and secure infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills], i) => (
            <motion.div
              key={category}
              className="glass-card rounded-[2.5rem] p-8 flex flex-col h-full relative group shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                <h3 className="text-2xl font-bold text-white tracking-tight font-display">{category}</h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {skills.map((skill, index) => (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 text-white/5 group-hover:text-white/20 transition-colors duration-500">
                <FaCode size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
