import React from "react";

const Contact = () => {
  return (
    <section className="relative z-10 py-32 px-6 bg-black/80 text-white min-h-screen">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-[#ffa800] mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-12">
          Interested in working together or just want to say hello? Drop me a message.
        </p>

        <form className="grid gap-6 bg-gray-900/60 p-8 rounded-xl neon-border">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#ffa800] outline-none text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#ffa800] outline-none text-sm"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#ffa800] outline-none text-sm"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-[#ffa800] text-black font-semibold hover:bg-[#ff8800] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


