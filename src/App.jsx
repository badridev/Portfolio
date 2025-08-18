import React, { useState, useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import Skills from "./components/layout/Skills";
import Home from "./components/layout/Home"; // Your home component
import "./App.css";
import About from "./components/layout/About"; // Your about component
import Projects from "./components/layout/Projects"; // Your projects component
import Contact from "./components/layout/Contact"; // Your contact component

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      <Header activeSection={activeSection} sections={sections} />

      {/* Animated gradient background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-br from-black to-[#ffa800] opacity-20 animate-gradient-slow -rotate-12"></div>
        <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-tr from-black to-[#ffa800] opacity-20 animate-gradient-slow-reverse rotate-12"></div>
      </div>

      {/* Sections */}
      <section
        id="home"
        ref={(el) => (sectionRefs.current["home"] = el)}
        className="relative z-10"
      >
        <Home />
      </section>

      <section
        id="skills"
        ref={(el) => (sectionRefs.current["skills"] = el)}
        className="relative z-10"
      >
        <Skills />
      </section>

      <section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el)}
        className="min-h-screen flex justify-center items-center text-gray-300 text-4xl px-6"
      >
        <div className="w-full max-w-5xl">
          <About />
        </div>
      </section>

      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className="min-h-screen flex justify-center items-center  text-gray-300 text-4xl"
      >
        <Projects />
      </section>

      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        className="min-h-screen flex justify-center items-center text-gray-300 text-4xl"
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
