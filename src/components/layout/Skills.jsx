import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaFigma, FaServer, FaCode 
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress, SiPostman, SiBootstrap } from "react-icons/si";

const skills = [
  {
    category: "Front-End",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-[#ffa800]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#ffa800]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#ffa800]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#ffa800]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#ffa800]" /> },
      { name: "React", icon: <FaReact className="text-[#ffa800]" /> },
    ],
  },
  {
    category: "Back-End",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-[#ffa800]" /> },
      { name: "Laravel", icon: <FaLaravel className="text-[#ffa800]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#ffa800]" /> },
      { name: "Express.js", icon: <SiExpress className="text-[#ffa800]" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#ffa800]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#ffa800]" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#ffa800]" /> },
      { name: "GitHub", icon: <FaGithub className="text-[#ffa800]" /> },
      { name: "VS Code", icon: <FaCode className="text-[#ffa800]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#ffa800]" /> },
      { name: "Figma", icon: <FaFigma className="text-[#ffa800]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative z-10 py-32 px-6 bg-black/80 text-white min-h-screen">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-[#ffa800] mb-4">My Skills</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are my skills categorized by Front-End, Back-End, Database, and Tools. I love creating smooth and modern web experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {skills.map((category) => (
          <div key={category.category} className="bg-black/70 rounded-xl p-6 shadow-md hover:shadow-[#ffa800]/30 transition-shadow duration-500">
            <h3 className="text-2xl font-semibold text-[#ffa800] mb-4">{category.category}</h3>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-[#ffa800]/10 transition-all duration-300 cursor-pointer transform hover:scale-105 will-change-transform"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <span className="text-gray-200 font-medium hover:text-[#ffa800] transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



