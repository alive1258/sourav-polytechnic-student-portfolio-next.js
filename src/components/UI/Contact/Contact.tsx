"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  // Contact Info
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sourav.ece@email.com",
      link: "mailto:sourav.ece@email.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+880 1XXX-XXXXXX",
      link: "tel:+8801XXXXXXXXX",
    },
    {
      icon: <FaLocationDot />,
      label: "Location",
      value: "Sirajganj, Bangladesh",
      link: "https://maps.google.com",
    },
  ];

  // Social Links
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      url: "https://facebook.com/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://instagram.com/",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-900/80 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.link}
                target="_blank"
                className="block bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-sm text-white group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
              <h3 className="text-sm font-semibold text-white mb-3">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 border border-gray-700 hover:border-blue-500 ${social.color} transition-all hover:-translate-y-1`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-linear-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-5 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">Available for</span>
              </div>
              <h4 className="text-white text-sm font-semibold mb-1">
                Freelance & Collaboration
              </h4>
              <p className="text-gray-400 text-xs">
                Open to discussing new projects and opportunities
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-gray-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-gray-400 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs text-gray-400 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-gray-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map/Location Preview */}
        <div className="mt-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <FaLocationDot className="text-blue-400" />
              <span className="text-sm text-white">Find me here</span>
            </div>
            <div className="h-32 bg-gray-800/50 rounded-lg border border-gray-700 flex items-center justify-center text-gray-500 text-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318536125!2d89.58315295!3d24.3638693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fde6f9f3b9f9f9%3A0x9f9f9f9f9f9f9f9f!2sSirajganj!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                className="filter grayscale opacity-50 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600 text-xs">
          <p>© 2024 Md Sabbir Hossain Sourav. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
