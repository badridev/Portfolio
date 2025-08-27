import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500); // change title every 2.5s
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-[#ffa800] mb-4"
        variants={fadeUp}
      >
        Hi, I’m Yassine Badri
      </motion.h1>

      {/* Animated Titles */}
      <div className="text-3xl md:text-4xl font-semibold text-gray-300 h-12 mb-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTitle}
            variants={titleVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="block"
          >
            {titles[currentTitle]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Short paragraph */}
      <motion.p
        className="text-gray-400 max-w-2xl mb-8 text-center"
        variants={fadeUp}
      >
        I’m a passionate web developer focused on creating modern,
        user-friendly, and scalable web applications using the latest
        technologies. I enjoy turning ideas into impactful digital solutions
        with clean design and efficient code.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-8"
        variants={fadeUp}
      >
        <a
          href={`${import.meta.env.BASE_URL}YASSINE_BADRI_CV.pdf`}
          download="Yassine_Badri_CV.pdf"
          className="px-6 py-3 rounded-md bg-[#ffa800] text-black font-semibold hover:bg-opacity-80 transition"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-md border border-[#ffa800] text-[#ffa800] font-semibold hover:bg-[#ffa800] hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="flex gap-6 text-2xl text-gray-300"
        variants={fadeUp}
      >
        <a
          href="https://www.linkedin.com/in/yassine-badri-0279a7342/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ffa800] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/badriyassine"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ffa800] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ffa800] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/yassine_o2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ffa800] transition"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
