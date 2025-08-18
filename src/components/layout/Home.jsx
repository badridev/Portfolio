import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const titles = ["Front-End Developer", "Back-End Developer", "Full-Stack Developer"];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500); // change title every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center">
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold text-[#ffa800] mb-4">
        Hi, I’m Yassine Badri
      </h1>

      {/* Animated Titles */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 h-12 mb-6 transition-all duration-500">
        {titles[currentTitle]}
      </h2>

      {/* Short paragraph */}
      <p className="text-gray-400 max-w-2xl mb-8 text-center">
        I’m a passionate web developer building modern and creative web applications using the latest technologies.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href="/Yassine_Badri_CV.pdf"
          download
          className="px-6 py-3 rounded-md bg-[#ffa800] text-black font-semibold hover:bg-opacity-80 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-md border border-[#ffa800] text-[#ffa800] font-semibold hover:bg-[#ffa800] hover:text-black transition"
        >
          Hire Me
        </a>
      </div>

      {/* Social icons */}
      <div className="flex gap-6 text-2xl text-gray-300">
        <a href="https://www.linkedin.com/in/yassine-badri-0279a7342/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffa800] transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/BD-YASSINE" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffa800] transition">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffa800] transition">
          <FaInstagram />
        </a>
        <a href="https://x.com/yassine_o2" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffa800] transition">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
