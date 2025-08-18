import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        "InventoryPro is a comprehensive web-based inventory management application designed to help businesses efficiently manage products, sales, and stock.",
      technologies: ["React", "Tailwind CSS", "PHP", "MySQL"],
      image: "/public/assets/1.png",
      githubUrl: "https://github.com/BD-YASSINE/InventoryPro",
    },
    {
      id: 2,
      title: "Goldbike_store",
      description:
        "Home page of motorcycles store with modern design created using HTML & CSS only.",
      technologies: ["HTML", "CSS"],
      image: "/public/assets/2.png",
      githubUrl: "https://github.com/BD-YASSINE/Goldbike_store",
    },
    {
      id: 3,
      title: "Illuvium_game",
      description:
        "A sleek 3D landing page built using React and Tailwind CSS, focused on eye-catching visuals and UX.",
      technologies: ["React", "Tailwind CSS"],
      image: "/public/assets/3.png",
      githubUrl: "https://github.com/BD-YASSINE/Illuvium_game",
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
              } items-center bg-gray-900/70 border-2 border-yellow-500/20 rounded-2xl p-6 md:p-10 transition-all duration-700 hover:scale-105 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/30 min-h-[400px] ${
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
              <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden shadow-lg mb-6 md:mb-0">
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
                      className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      View on GitHub
                    </button>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 md:pl-10 md:pr-10 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium border border-yellow-500/30"
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
