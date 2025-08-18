import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

import Header from "./components/layout/Header";
import Skills from "./components/layout/Skills";
import Home from "./components/layout/Home";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import "./App.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScroll, setShowScroll] = useState(false);
  const sectionRefs = useRef({});
  const canvasRef = useRef(null);

  // Neon stars animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? "#ffea00" : "#ff8c00", // yellow / orange neon
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = star.color;
        ctx.fillStyle = star.color;
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      const ref = sectionRefs.current[section.id];
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden text-white">
      <Header activeSection={activeSection} sections={sections} />

      {/* Neon stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>

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
        className="min-h-screen flex justify-center items-center text-gray-300 text-4xl px-6 relative z-10"
      >
        <div className="w-full max-w-5xl animate-fade-up">
          <About />
        </div>
      </section>

      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        className="min-h-screen flex justify-center items-center text-gray-300 text-4xl relative z-10"
      >
        <Projects />
      </section>

      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        className="w-full flex justify-center items-center text-gray-300 text-4xl relative z-10"
      >
        <Contact />
      </section>

      {/* Scroll-to-top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-yellow-500 text-black rounded-full shadow-lg transition-all duration-500 z-50
          ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;


