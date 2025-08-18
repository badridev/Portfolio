import React, { useEffect } from "react";
import myPhoto from "../../assets/myPhoto.jpeg"; // replace with your actual photo path
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative z-10 flex flex-col items-center w-full px-6 py-24 gap-12"
    >
      {/* Section Title */}
      <motion.h2
        variants={container}
        initial="hidden"
        animate={controls}
        className="text-5xl font-bold text-center mb-32 text-yellow-400"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12">
        {/* Left: Picture */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="flex-shrink-0"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#ffa800] p-1 shadow-neon">
            <img
              src={myPhoto}
              alt="Yassine Badri"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Right: Info Card */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="flex-1 flex flex-col gap-6"
        >
          <motion.h2
            variants={card}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-[#ffa800]"
          >
            A Full Stack Developer based in Morocco
          </motion.h2>
          <motion.span
            variants={card}
            custom={1}
            className="block h-1 w-20 bg-[#ffa800] rounded"
          ></motion.span>
          <motion.p
            variants={card}
            custom={2}
            className="text-gray-300 text-base md:text-lg"
          >
            Hello! I’m <span className="text-[#ffa800] font-semibold">Yassine Badri</span>, 20 years old. I enjoy building modern web applications, learning new technologies, and solving real-world problems. I specialize in both front-end and back-end development.
          </motion.p>

          {/* Small Cards */}
          <motion.div
            variants={card}
            custom={3}
            className="grid grid-cols-2 gap-6 mt-4"
          >
            <motion.div
              variants={card}
              custom={4}
              className="flex flex-col items-center justify-center p-4 border-2 border-[#ffa800] rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-[#ffa800]">Projects</h3>
              <span className="block h-0.5 w-6 bg-[#ffa800] my-2"></span>
              <p className="text-gray-300 text-sm text-center">
                10+ personal and freelance projects completed
              </p>
            </motion.div>

            <motion.div
              variants={card}
              custom={5}
              className="flex flex-col items-center justify-center p-4 border-2 border-[#ffa800] rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-[#ffa800]">Experience</h3>
              <span className="block h-0.5 w-6 bg-[#ffa800] my-2"></span>
              <p className="text-gray-300 text-sm text-center">
                Internships and freelance work in web development
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;








