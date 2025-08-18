import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gr39mw7", // replace with your Service ID
        "template_pjn1ryd", // replace with your Template ID
        e.target,
        "fN4jubS2FrCBMGlYv" // your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffa800] mb-8 text-center animate-fadeIn">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-10 animate-fadeIn">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6 text-gray-300">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#ffa800]" />
              <span className="text-lg">yassine@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-[#ffa800]" />
              <span className="text-lg">+212 6XXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#ffa800]" />
              <span className="text-lg">Casablanca, Morocco</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            className="md:w-1/2 flex flex-col space-y-4"
          >
            <div className="flex items-center border-b border-gray-500 py-2">
              <FaUser className="text-gray-300 mr-2" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border-b border-gray-500 py-2">
              <FaEnvelope className="text-gray-300 mr-2" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-400"
              />
            </div>

            <div className="flex items-start border-b border-gray-500 py-2">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-transparent flex-1 outline-none text-gray-300 placeholder-gray-400 resize-none h-32"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center bg-[#ffa800] hover:bg-yellow-600 transition-colors duration-300 text-black font-semibold py-3 px-6 rounded-md space-x-2"
            >
              <FaPaperPlane />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;







