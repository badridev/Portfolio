import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiBootstrap,
  SiCanva,
} from "react-icons/si";

const skillsData = [
  {
    category: "Front-End",
    color: "#FFA800",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#FFA800" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#563d7c" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" },
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "React", icon: <FaReact />, color: "#61dafb" },
    ],
  },
  {
    category: "Back-End",
    color: "#6e5494",
    skills: [
      { name: "PHP", icon: <FaPhp />, color: "#8892be" },
      { name: "Laravel", icon: <FaLaravel />, color: "#ff2d20" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
      { name: "Express.js", icon: <SiExpress />, color: "#888888" }, // Gray
    ],
  },
  {
    category: "Database",
    color: "#4479a1",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    category: "Tools",
    color: "#f05032",
    skills: [
      { name: "VS Code", icon: <FaCode />, color: "#0078d4" },
      { name: "Git", icon: <FaGitAlt />, color: "#f34f29" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
      { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  // Flatten all skills for "All" tab
  const allSkills = skillsData.flatMap((tab) => tab.skills);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tabs = ["All", ...skillsData.map((tab) => tab.category)];

  const skillsToShow =
    activeTab === "All"
      ? allSkills
      : skillsData.find((tab) => tab.category === activeTab).skills;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-32 px-6 bg-black/80 text-white min-h-screen"
    >
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
              ${
                activeTab === tab
                  ? "bg-[#ffa800] text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsToShow.map((skill, i) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 opacity-0`}
            style={{
              animation: visible ? `fadeUp 0.7s ease-out forwards` : "none",
              animationDelay: `${i * 100}ms`,
              backgroundColor:
                skill.color === "#888888" ? "#444" : `${skill.color}22`,
            }}
          >
            <div className="text-5xl mb-3" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="text-lg font-medium text-gray-200 hover:text-[#ffa800] transition-colors duration-300">
              {skill.name}
              <span className="block h-1 w-8 bg-[#ffa800] mt-2 rounded-full mx-auto"></span>
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
