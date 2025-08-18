import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(false);

  // Animate section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_gr39mw7",
        "template_pjn1ryd",
        form.current,
        "fN4jubS2FrCBMGlYv"
      )
      .then(
        () => {
          setDone(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-black/80 text-white min-h-screen"
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Column: Find Me + Motivational Card */}
        <div className="flex-1 flex flex-col gap-6 min-w-[350px]">
          {/* Contact Info Card */}
          <div className="bg-gray-900/70 p-12 rounded-3xl border-2 border-[#ffa800] shadow-lg hover:shadow-[0_0_30px_#ffa800] transition-shadow duration-500 text-gray-300">
            <h3 className="text-3xl font-bold text-[#ffa800] mb-4 text-center">
              Find Me Here
            </h3>
            <div className="w-24 h-1 bg-[#ffa800] mb-6 mx-auto rounded-full"></div>
            <div className="flex items-center gap-4 mb-4 justify-center">
              <FaEnvelope className="text-[#ffa800]" />
              <span>yassine.badrii18@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 mb-4 justify-center">
              <FaPhone className="text-[#ffa800]" />
              <span>+212 723-509769</span>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <FaMapMarkerAlt className="text-[#ffa800]" />
              <span>Morocco</span>
            </div>
          </div>

          {/* Motivational Card */}
          <div className="bg-gray-900/70 p-8 rounded-3xl border-2 border-[#ffa800] shadow-lg hover:shadow-[0_0_30px_#ffa800] transition-shadow duration-500 text-gray-300 text-center">
            <h3 className="text-2xl font-semibold text-[#ffa800] mt-3 mb-2">
              Let's Make Your Idea Live!
            </h3>
            <p className="text-gray-400 text-center mt-4 mb-3">
              I’m ready to turn your ideas into real web applications that are
              functional, user-friendly, and visually engaging. Let’s
              collaborate and create something amazing together that makes an
              impact.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1 bg-gray-900/70 p-12 rounded-3xl border-2 border-[#ffa800] shadow-lg hover:shadow-[0_0_30px_#ffa800] transition-shadow duration-500 min-w-[350px]">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex items-center border-b border-gray-500 py-3 px-3 rounded-md hover:border-[#ffa800] transition-colors duration-300">
              <FaUser className="text-gray-300 mr-3" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-transparent w-full outline-none text-gray-300 placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex items-center border-b border-gray-500 py-3 px-3 rounded-md hover:border-[#ffa800] transition-colors duration-300">
              <FaEnvelope className="text-gray-300 mr-3" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-transparent w-full outline-none text-gray-300 placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex items-start border-b border-gray-500 py-3 px-3 rounded-md hover:border-[#ffa800] transition-colors duration-300">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-transparent w-full outline-none text-gray-300 placeholder-gray-400 resize-none h-48 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center bg-[#ffa800] hover:bg-yellow-600 transition-colors duration-300 text-black font-semibold py-3 px-6 rounded-md space-x-3 text-sm"
            >
              <FaPaperPlane />
              <span>{loading ? "Sending..." : "Send"}</span>
            </button>

            {done && (
              <p className="text-green-400 mt-2 text-sm text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
