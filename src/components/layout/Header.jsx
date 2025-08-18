import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = ({ activeSection, sections }) => {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#ffa800] cursor-pointer">
          Yassine Badri
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 font-medium text-gray-300">
            {sections.map((section) => (
              <li key={section.id} className="relative group cursor-pointer">
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === section.id ? "text-[#ffa800]" : "text-gray-300"
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#ffa800] transition-all duration-300 ${
                    activeSection === section.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
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
          className="text-gray-300 hover:text-[#ffa800] text-2xl transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;


