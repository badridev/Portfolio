import React, { useEffect, useRef, useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaCode 
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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-32 px-6 bg-black/80 text-white min-h-screen"
    >
      <div className="container mx-auto text-center mb-16 max-w-5xl">
        <h2 className="text-5xl font-bold text-[#ffa800] mb-4">My Skills</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are my skills grouped by Front-End, Back-End, Database, and Tools. I love creating smooth and modern web experiences.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="text-3xl font-semibold text-[#ffa800] mb-6">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center p-4 bg-gray-900/50 rounded-lg neon-border hover:scale-105 transition-transform duration-300 cursor-pointer 
                    ${visible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <span className="relative text-gray-200 font-medium hover:text-[#ffa800] transition-colors duration-300">
                    {skill.name}
                    <span className="block h-0.5 w-6 bg-yellow-400 mt-1 mx-auto"></span>
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











