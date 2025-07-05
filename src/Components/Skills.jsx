import React from "react";
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
      icon: <FaGithub className="text-gray-900 dark:text-gray-200" />,
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

const SkillBar = ({ skill }) => (
  <div className="mb-5">
    <div className="flex justify-between items-center mb-1 text-sm font-semibold text-gray-800 dark:text-gray-200 drop-shadow-sm">
      <span className="flex items-center gap-2">
        <span className="text-xl">{skill.icon}</span>
        {skill.name}
      </span>
      <span className="font-mono text-xs tracking-wide">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
      <motion.div
        className="h-4 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 shadow-[0_0_8px_rgb(236,72,153)]"
        style={{ width: `${skill.level}%` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-br from-[#fff5f7] to-[#ffe3ec] dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl"
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 drop-shadow-lg"
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
            className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,111,97,0.5)] transition-transform duration-300 cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.25 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100 border-b border-pink-300 pb-3 drop-shadow-sm">
              {category}
            </h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
