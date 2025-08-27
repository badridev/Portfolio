import { useState, useEffect, useRef } from "react";

// ✅ Import images from src/assets
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Detect screen size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "InventoryPro",
      description:
        "InventoryPro is a web-based inventory management application that helps businesses efficiently manage products, sales, and stock. It features an intuitive interface with real-time inventory tracking, product categorization, and sales monitoring. Built for usability and performance, it streamlines operations, reduces errors, and supports better decision-making through organized data management.",
      shortDescription:
        "InventoryPro helps businesses manage products, sales, and stock efficiently.",
      technologies: ["React", "Tailwind CSS", "PHP", "MySQL"],
      image: img1,
      githubUrl: "https://github.com/badridev/InventoryPro",
    },
    {
      id: 2,
      title: "Goldbike_store",
      description:
        "A clean and modern homepage for a motorcycle store, built using only HTML and CSS. The design delivers a visually appealing layout with well-structured sections, responsive styling, and a user-friendly interface. Created without frameworks, this project showcases strong front-end fundamentals and the ability to craft elegant, functional designs using core web technologies.",
      shortDescription:
        "A modern homepage for a motorcycle store using HTML & CSS.",
      technologies: ["HTML", "CSS"],
      image: img2,
      githubUrl: "https://github.com/badridev/Goldbike_store",
    },
    {
      id: 3,
      title: "Illuvium_game",
      description:
        "A modern and sleek 3D landing page built with React and Tailwind CSS, designed to deliver an engaging user experience with smooth animations, interactive elements, and eye-catching visuals. The project focuses on combining elegant UI design with responsive layouts, ensuring a seamless experience across devices while highlighting creativity and attention to detail.",
      shortDescription:
        "3D landing page built with React & Tailwind CSS with interactive elements.",
      technologies: ["React", "Tailwind CSS"],
      image: img3,
      githubUrl: "https://github.com/badridev/Illuvium_game",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full z-10 pb-32 bg-black/80 text-white px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {projects.map((project, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row ${
                isImageLeft ? "" : "md:flex-row-reverse"
              } items-center bg-gray-900/70 border-2 border-[#ffa800]/20 rounded-2xl p-6 md:p-10 transition-all duration-700 hover:scale-105 hover:border-[#ffa800] hover:shadow-xl hover:shadow-[#ffa800]/30 min-h-[400px] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div
                className="relative w-full md:w-1/2 h-64 md:h-80 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden shadow-lg mb-6 md:mb-0
                transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-base">
                      No Image Available
                    </span>
                  </div>
                )}

                {/* GitHub Button */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="bg-[#ffa800] hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      View on GitHub
                    </button>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 md:pl-10 md:pr-10 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold text-[#ffa800] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  {isMobile
                    ? project.shortDescription
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#ffa800]/20 text-[#ffa800] text-sm font-medium border border-[#ffa800]/30 
           transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

