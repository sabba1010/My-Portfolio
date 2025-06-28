import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaCode,
  FaUserShield, // for Authentication icon
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase, // if you want Firebase icon from react-icons/si
} from "react-icons/si";

// Skills data with icons
const skillsData = {
  Frontend: [
    { name: "React", level: 85, icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    {
      name: "CSS / TailwindCSS",
      level: 85,
      icon: <SiTailwindcss className="text-teal-400" />,
    },
  ],
  Backend: [
    { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", level: 65, icon: <SiExpress className="text-gray-600" /> },
    { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-500" /> },
  ],
  Tools: [
    {
      name: "Git & GitHub",
      level: 75,
      icon: <FaGithub className="text-gray-800 dark:text-gray-100" />,
    },
    {
      name: "VS Code",
      level: 80,
      icon: <FaCode className="text-blue-600" />,
    },
    { name: "Figma", level: 50, icon: <FaFigma className="text-pink-500" /> },

    // Added Authentication skill
    {
      name: "Authentication (Firebase)",
      level: 70,
      icon: <SiFirebase className="text-yellow-500" />,
    },
  ],
};

// Skill bar UI
const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1 font-semibold text-sm">
      <span className="flex items-center gap-2">
        <span className="text-lg">{skill.icon}</span>
        {skill.name}
      </span>
      <span>{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
      <div
        className="bg-primary h-3 rounded-full"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

// Main Skills section
const Skills = () => {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">My Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
