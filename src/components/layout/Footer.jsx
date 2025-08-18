import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 py-6 px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="text-sm inline-block transition-colors duration-300 hover:text-[#ffa800] cursor-pointer"
        >
          &copy; {new Date().getFullYear()} Yassine Badri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

