import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const item = {
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
      className="relative z-10 w-full px-6 py-24  text-white flex flex-col items-center gap-16"
    >
      {/* Section Title */}
      <motion.h2
        variants={container}
        initial="hidden"
        animate={controls}
        className="text-5xl font-bold text-yellow-400 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.p
        variants={item}
        custom={0}
        initial="hidden"
        animate={controls}
        className="text-gray-300 text-center max-w-2xl"
      >
        I’m open to freelance opportunities or any web development projects. Send me a message and I’ll get back to you as soon as possible.
      </motion.p>

      {/* Contact Info Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl text-center"
      >
        <motion.div
          variants={item}
          custom={1}
          className="flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
        >
          <MdEmail className="text-yellow-400 text-4xl" />
          <h3 className="text-base font-semibold text-yellow-400">Email</h3>
          <p className="text-gray-300 text-sm">yassine@example.com</p>
          <span className="block h-px w-16 bg-yellow-500 mt-2"></span>
        </motion.div>

        <motion.div
          variants={item}
          custom={2}
          className="flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
        >
          <MdPhone className="text-yellow-400 text-4xl" />
          <h3 className="text-base font-semibold text-yellow-400">Phone</h3>
          <p className="text-gray-300 text-sm">+212 600 000 000</p>
          <span className="block h-px w-16 bg-yellow-500 mt-2"></span>
        </motion.div>

        <motion.div
          variants={item}
          custom={3}
          className="flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
        >
          <MdLocationOn className="text-yellow-400 text-4xl" />
          <h3 className="text-base font-semibold text-yellow-400">Location</h3>
          <p className="text-gray-300 text-sm">Morocco</p>
          <span className="block h-px w-16 bg-yellow-500 mt-2"></span>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        variants={container}
        initial="hidden"
        animate={controls}
        className="w-full max-w-3xl flex flex-col gap-4"
      >
        <motion.input
          variants={item}
          custom={4}
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 border-b-2 border-yellow-500 transition"
        />
        <motion.input
          variants={item}
          custom={5}
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 border-b-2 border-yellow-500 transition"
        />
        <motion.textarea
          variants={item}
          custom={6}
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-lg bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 border-b-2 border-yellow-500 transition"
        />
        <motion.button
          variants={item}
          custom={7}
          type="submit"
          className="self-start bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;




