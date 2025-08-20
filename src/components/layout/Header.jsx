import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ activeSection, sections }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-[#ffa800] cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Yassine Badri
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 font-medium text-gray-300">
            {sections.map((section) => (
              <li
                key={section.id}
                className="relative group cursor-pointer transition-all duration-300"
                onClick={() => handleScroll(section.id)}
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-[#ffa800]"
                      : "text-gray-300 group-hover:text-[#ffa800]"
                  }`}
                >
                  {section.label}
                </span>
                {/* underline */}
                <span
                  className={`
            absolute left-0 -bottom-1 h-[2px] bg-[#ffa800] transition-all duration-300 
            ${
              activeSection === section.id ? "w-full" : "w-0 group-hover:w-full"
            }
          `}
                ></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* GitHub Icon */}
        <a
          href="https://github.com/BD-YASSINE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#ffa800] text-3xl transition-colors duration-300 hidden md:inline-block"
        >
          <FaGithub />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-2xl p-1 hover:scale-110 transition-transform duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden w-full absolute top-full left-0 bg-black/90 backdrop-blur-md z-40 transform transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 font-medium text-gray-300">
          {sections.map((section) => (
            <li
              key={section.id}
              className="cursor-pointer text-xl transition-colors duration-300 hover:text-[#ffa800]"
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </li>
          ))}
          <li>
            <a
              href="https://github.com/BD-YASSINE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#ffa800] transition-colors duration-300 text-2xl"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
