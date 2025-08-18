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
    <section id="contact" className="py-20 px-6">
      {/* Section Title */}

      <div
        className={`container mx-auto flex flex-col md:flex-row items-start justify-center space-y-12 md:space-y-0 md:space-x-12
                    ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                    transition-all duration-700`}
      >
        {/* Find Me Card */}
        <div
          className="flex-1 min-w-[400px] h-96 bg-gray-900/70 p-12 rounded-3xl shadow-lg border-2 border-[#ffa800] 
                        hover:shadow-[0_0_30px_#ffa800] transition-shadow duration-500 text-gray-300 text-sm"
        >
          <h3 className="text-3xl font-bold text-[#ffa800] mb-4 text-center">
            Find Me Here
          </h3>
          <div className="w-24 h-1 bg-[#ffa800] mb-6 mx-auto"></div>
          <div className="flex items-center space-x-6 mb-4 justify-center">
            <FaEnvelope className="text-[#ffa800]" />
            <span>yassine@example.com</span>
          </div>
          <div className="flex items-center space-x-6 mb-4 justify-center">
            <FaPhone className="text-[#ffa800]" />
            <span>+212 6XXXXXXXX</span>
          </div>
          <div className="flex items-center space-x-6 justify-center">
            <FaMapMarkerAlt className="text-[#ffa800]" />
            <span>Casablanca, Morocco</span>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="flex-1 min-w-[400px] h-auto bg-gray-900/70 p-12 rounded-3xl shadow-lg border-2 border-[#ffa800] 
                        hover:shadow-[0_0_30px_#ffa800] transition-shadow duration-500"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center border-b border-gray-500 py-3 px-3 rounded-md">
              <FaUser className="text-gray-300 mr-3" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-transparent w-full outline-none text-gray-300 placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex items-center border-b border-gray-500 py-3 px-3 rounded-md">
              <FaEnvelope className="text-gray-300 mr-3" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-transparent w-full outline-none text-gray-300 placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex items-start border-b border-gray-500 py-3 px-3 rounded-md">
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
