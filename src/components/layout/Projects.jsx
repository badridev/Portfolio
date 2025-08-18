import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
    technologies: ["React", "TailwindCSS", "Vite"],
    link: "https://your-portfolio-link.com",
    image: "/images/portfolio.png",
  },
  {
    title: "Inventory Management App",
    description: "A full-stack app for managing stock, sales, and analytics with authentication and role-based dashboards.",
    technologies: ["React", "PHP", "MySQL"],
    link: "https://your-inventory-link.com",
    image: "/images/inventory.png",
  },
  {
    title: "Hotel Booking Platform",
    description: "Web app for booking rooms with real-time availability, hotel owner dashboards, and admin control.",
    technologies: ["React", "PHP", "MySQL", "Tailwind"],
    link: "https://your-hotel-link.com",
    image: "/images/hotel.png",
  },
];

const Projects = () => {
  return (
    <section className="relative z-10 py-32 px-6 bg-black/80 text-white min-h-screen">
      <div className="container mx-auto text-center mb-12 max-w-4xl">
        <h2 className="text-4xl font-bold text-[#ffa800] mb-3">Projects</h2>
        <p className="text-gray-300 text-sm">
          Here are some of my recent projects. Each one taught me something new and improved my skills.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-black/70 neon-border rounded-xl p-5 hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold text-[#ffa800] mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-800/60 rounded-lg text-gray-200 hover:text-[#ffa800] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-[#ffa800] font-medium hover:underline"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;




