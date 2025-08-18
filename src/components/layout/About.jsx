import React, { useEffect } from "react";
import myPhoto from "../../assets/myPhoto.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const infoCards = [
    { title: "Projects", info: "10+ personal & freelance projects completed" },
    { title: "Experience", info: "Internships & freelance work in web development" },
    { title: "Education", info: "Technicien Spécialisé en Développement Digital" },
    { title: "Passion", info: "Learning new tech, building apps, coding challenges" },
  ];

  return (
    <section
      ref={ref}
      className="relative z-10 flex flex-col items-center w-full px-6 py-24 gap-12 bg-black/80"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left: Photo */}
        <motion.div className="flex-shrink-0" variants={fadeUpVariant}>
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#ffa800] p-1 shadow-neon hover:scale-105 transition-transform duration-500">
            <img
              src={myPhoto}
              alt="Yassine Badri"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Right: Intro & Info */}
        <motion.div className="flex-1 flex flex-col gap-6" variants={fadeUpVariant}>
          {/* Intro */}
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffa800]">
              Hi, I’m <span className="text-yellow-400">Yassine Badri</span>
            </h2>
            <span className="block h-1 w-20 bg-yellow-400 rounded my-2"></span>
            <p className="text-gray-300 text-base md:text-lg">
              I’m a 20-year-old Full Stack Developer based in Morocco. I create modern
              and creative web applications, mastering both frontend and backend
              technologies. I love solving problems and bringing ideas to life.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-6" variants={containerVariants}>
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 border-2 border-[#ffa800] rounded-xl bg-[#ffa800]/10 hover:scale-105 transition-transform duration-500 cursor-pointer"
                variants={fadeUpVariant}
              >
                <h3 className="text-lg font-semibold text-[#ffa800]">{card.title}</h3>
                <span className="block h-0.5 w-8 bg-yellow-400 my-2 rounded-full"></span>
                <p className="text-gray-300 text-sm text-center">{card.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;


