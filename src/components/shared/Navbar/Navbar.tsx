"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed bg-gray-900 py-4 w-full z-50 transition-all duration-500 `}
    >
      {/* Animated gradient line at bottom */}
      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent transition-opacity duration-500`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with hover effect */}
          <Link href="/" className="group relative">
            <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
              Sourav
              <span className="text-sm ml-1 text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                .dev
              </span>
            </span>
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-gray-800/50 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-lg"></span>
                {/* Dot indicator */}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            ))}

            {/* Resume Button with enhanced styling */}
            <Link
              href="/resume"
              className="ml-4 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 rounded-lg transition-colors text-white hover:bg-gray-800/80 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-800/50 scale-0 group-hover:scale-100 transition-transform"></div>
            <svg
              className="w-6 h-6 relative z-10 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with animations */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800/50 shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-3 text-gray-300 hover:text-white transition-all duration-200 rounded-lg overflow-hidden"
                onClick={closeMenu}
              >
                <span className="relative z-10 flex items-center">
                  {link.label}
                  <svg
                    className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gray-800/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}

            {/* Mobile Resume Button with icon */}
            <Link
              href="/resume"
              className="group mt-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg flex items-center justify-center gap-2"
              onClick={closeMenu}
            >
              <span>Download Resume</span>
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </Link>

            {/* Mobile Social Links with hover effects */}
            <div className="flex items-center justify-center gap-6 pt-6 mt-2 border-t border-gray-800/50">
              {[
                { href: "https://github.com/", label: "GitHub", icon: "💻" },
                {
                  href: "https://linkedin.com/",
                  label: "LinkedIn",
                  icon: "🔗",
                },
                { href: "https://twitter.com/", label: "Twitter", icon: "🐦" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="group flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-xs">{social.label}</span>
                </Link>
              ))}
            </div>

            {/* Current year and status */}
            <div className="text-center mt-4 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
