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
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React / Next.js", level: 90, icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Responsive Design", level: 90, icon: <FaGlobe className="text-green-400" /> },
    { name: "API Integration", level: 85, icon: <SiPostman className="text-orange-500" /> },
  ],
  Backend: [
    { name: "Node.js / Express.js", level: 85, icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB / REST APIs", level: 80, icon: <SiMongodb className="text-green-600" /> },
    { name: "JWT Auth / RBAC", level: 85, icon: <FaLock className="text-yellow-500" /> },
    { name: "Socket.io", level: 75, icon: <SiSocketdotio className="text-white" /> },
  ],
  "DevOps & Security": [
    { name: "VPS / Nginx / PM2", level: 75, icon: <SiNginx className="text-green-400" /> },
    { name: "Bcrypt & API Security", level: 80, icon: <FaLock className="text-red-400" /> },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85, icon: <FaGithub className="text-gray-200" /> },
    { name: "Postman", level: 90, icon: <SiPostman className="text-orange-500" /> },
    { name: "Figma", level: 70, icon: <FaFigma className="text-pink-500" /> },
    { name: "VS Code", level: 90, icon: <FaCode className="text-blue-600" /> },
  ],
};

const SkillBar = ({ skill, isHovered }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1 text-sm font-semibold text-white drop-shadow-sm">
        <span className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="font-mono text-xs tracking-wide">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner">
        <motion.div
          className="h-5 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"
          style={{ width: `${skill.level}%` }}
          initial={{ width: 0, boxShadow: "0 0 12px rgb(236,72,153)" }}
          animate={{
            width: `${skill.level}%`,
            boxShadow: isHovered
              ? "0 0 20px 4px rgba(251, 146, 60, 0.8)"
              : "0 0 12px rgb(236,72,153)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical stack and the tools I use to bring digital ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], i) => (
            <motion.div
              key={category}
              className="glass-card rounded-[2rem] p-8 relative group hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                <h3 className="text-2xl font-bold text-white tracking-tight">{category}</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isHovered={hoveredIndex === i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
