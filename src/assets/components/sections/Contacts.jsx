import React from 'react';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';

export const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ucjvy1q',
      'template_y6epfic',
      e.target,
      'K_ca8-p4eoJRzzeFn'
    ).then(
      () => toast.success("Thank you for your interest! I’ll get back to you as soon as possible."),
      (error) => toast.error('Failed to send: ' + error.text)
    );

    e.target.reset();
  };

  return (
    <section
      id="contacts"
      className="min-h-screen py-16 px-4 md:px-12 bg-black text-gray-100"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <Toaster position="top-right" toastOptions={{duration: 3000}} />
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form className="space-y-6 w-full" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gradient-to-r from-gray-900 to-blue-900 text-white placeholder-gray-400 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:shadow-blue-500 transition duration-300 ease-in-out"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gradient-to-r from-gray-900 to-blue-900 text-white placeholder-gray-400 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:shadow-blue-500 transition duration-300 ease-in-out"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full h-40 p-4 rounded-lg bg-gradient-to-r from-gray-900 to-blue-900 text-white placeholder-gray-400 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-md hover:shadow-blue-500 transition duration-300 ease-in-out"
          />

          <button
            type="submit"
            className="w-full sm:w-48 h-12 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:from-purple-600 hover:to-blue-600 shadow-lg hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="flex flex-col justify-center items-start space-y-6 text-lg text-gray-400 font-medium">
          <div className="hover:scale-105 transition-transform duration-300">
            <span className="block font-semibold text-white">Location:</span>
            <span>Warner Robins, GA 31005</span>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <span className="block font-semibold text-white">Phone:</span>
            <span>(229) 848-4272</span>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <span className="block font-semibold text-white">Email:</span>
            <span>timphamvn33@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
