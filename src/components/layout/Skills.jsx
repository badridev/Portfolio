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
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import { FaUsers, FaComments, FaLightbulb } from "react-icons/fa";
import { GiWorld } from "react-icons/gi"; // For languages

const skillsData = [
  {
    category: "Front-End",
    color: "#ffa800",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#ffa800" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#563d7c" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" },
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "React", icon: <FaReact />, color: "#61dafb" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    ],
  },
  {
    category: "Back-End",
    color: "#6e5494",
    skills: [
      { name: "PHP", icon: <FaPhp />, color: "#8892be" },
      { name: "Laravel", icon: <FaLaravel />, color: "#ff2d20" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
      { name: "Express.js", icon: <SiExpress />, color: "#888888" },
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
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    ],
  },
  {
    category: "Soft Skills",
    color: "#FF8C00",
    skills: [
      { name: "Problem Solving", icon: <FaLightbulb />, color: "#FF8C00" },
      { name: "Teamwork", icon: <FaUsers />, color: "#6e5494" },
      { name: "Communication", icon: <FaComments />, color: "#00C4CC" },
      { name: "Adaptability", icon: <FaUsers />, color: "#61dafb" },
    ],
  },
  {
    category: "Languages",
    color: "#00BFFF",
    skills: [
      { name: "English", icon: <GiWorld />, color: "#1E90FF" },
      { name: "French", icon: <GiWorld />, color: "#FF69B4" },
      { name: "Arabic", icon: <GiWorld />, color: "#32CD32" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visible, setVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef();

  const allSkills = skillsData.flatMap((tab) => tab.skills);

  // ✅ Detect screen size for mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Reveal on scroll
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
  let skillsToShow =
    activeTab === "All"
      ? allSkills
      : skillsData.find((tab) => tab.category === activeTab).skills;

  // ✅ On mobile, limit "All" to 6 unless showMore is true
  if (activeTab === "All" && isMobile && !showMore) {
    skillsToShow = skillsToShow.slice(0, 6);
  }

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
            onClick={() => {
              setActiveTab(tab);
              setShowMore(false); // reset "see more" when changing tabs
            }}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
              ${
                activeTab === tab
                  ? "bg-[#ffa800] text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
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
            className="opacity-0"
            style={{
              animation: visible ? `fadeUp 0.7s ease-out forwards` : "none",
              animationDelay: activeTab === "All" ? "0ms" : `${i * 100}ms`,
            }}
          >
            <div
              className="flex flex-col items-center p-6 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-95"
              style={{
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
          </div>
        ))}
      </div>

      {/* See More button (only on mobile in All tab) */}
      {activeTab === "All" && isMobile && !showMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-2 bg-[#ffa800] text-black font-medium rounded-full shadow-md hover:bg-[#ffb733] transition"
          >
            See More ...
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
