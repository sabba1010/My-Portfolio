import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React", level: 85, icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    {
      name: "CSS / TailwindCSS",
      level: 85,
      icon: <SiTailwindcss className="text-teal-400" />,
    },
  ],
  Backend: [
    { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", level: 65, icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-600" /> },
  ],
  Tools: [
    {
      name: "Git & GitHub",
      level: 75,
      icon: <FaGithub className="text-gray-200" />,
    },
    {
      name: "VS Code",
      level: 80,
      icon: <FaCode className="text-blue-600" />,
    },
    { name: "Figma", level: 50, icon: <FaFigma className="text-pink-500" /> },
    {
      name: "Authentication (Firebase)",
      level: 70,
      icon: <SiFirebase className="text-yellow-400" />,
    },
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
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24 bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-orange-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {Object.entries(skillsData).map(([category, skills], i) => (
          <motion.div
            key={category}
            className="bg-gray-800 rounded-2xl p-8 shadow-md cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.25 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            // Added smooth shadow + scale on hover
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px 5px rgba(251, 146, 60, 0.6)" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-orange-400 border-b border-orange-500 pb-3 drop-shadow-sm">
              {category}
            </h3>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                isHovered={hoveredIndex === i}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
