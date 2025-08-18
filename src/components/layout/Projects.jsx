import { useState, useEffect, useRef } from 'react';

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
      description: "InventoryPro is a comprehensive web-based inventory management application designed to help businesses efficiently manage their products, sales, and stock. It offers a centralized dashboard that provides real-time insights into business activity, allowing users to make data-driven decisions.",
      technologies: ["React", "Tailwind CSS", "PHP", "MySQL"],
      image: "/src/assets/1.png",
      githubUrl: "https://github.com/BD-YASSINE/InventoryPro"
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "Another exciting project will be added here...",
      technologies: ["Tech", "Stack", "Here", "+1"],
      image: null,
      githubUrl: "#",
      isPlaceholder: true
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Another exciting project will be added here...",
      technologies: ["Tech", "Stack", "Here", "+1"],
      image: null,
      githubUrl: "#",
      isPlaceholder: true
    }
  ];

  return (
    <div className="w-full z-10 pb-32 bg-black/80 text-white p-8">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <h2 className={`text-5xl font-bold text-center mb-32 mt-20 text-yellow-400 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          My Projects
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => {
            const isImageLeft = index % 2 === 0; // Left for first, right for second, etc.
            return (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row ${
                  isImageLeft ? '' : 'md:flex-row-reverse'
                } items-center bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-2xl p-6 md:p-10 transition-all duration-700 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:scale-105 min-h-[400px] ${
                  project.isPlaceholder ? 'opacity-50' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
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
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-500 text-base">No Image Available</span>
                    </div>
                  )}

                  {/* GitHub Button - Shows on Hover */}
                  {hoveredProject === project.id && !project.isPlaceholder && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300">
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                      >
                        View on GitHub
                      </button>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="w-full md:w-1/2 md:pl-10 md:pr-10 flex flex-col">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-5">{project.title}</h3>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tech.startsWith('+')
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-yellow-500 text-black'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Placeholder overlay for future projects */}
                {project.isPlaceholder && (
                  <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Coming Soon</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;







