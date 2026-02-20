import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaLaptopCode,
  FaHeart,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiHackerrank } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gray-800 pb-10">
          {/* Logo and Tagline - 4 columns */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                {"<Sourav />"}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Polytechnic student & passionate programmer. Building cool stuff
              with code and curiosity.
            </p>

            {/* Coding stats badge */}
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-gray-700">
              <FaLaptopCode className="text-blue-400 animate-bounce" />
              <span className="text-xs text-gray-300">
                1000+ problems solved
              </span>
            </div>
          </div>

          {/* Navigation Links - 4 columns */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "🏠 Home", href: "#home" },
                { name: "👨‍🎓 About", href: "#about" },
                { name: "💻 Projects", href: "#portfolio" },
                { name: "📫 Contact", href: "#contact" },
                { name: "📚 Blog", href: "#blog" },
                { name: "⚡ Skills", href: "#skills" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Coding Profiles - 4 columns */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Coding Profiles
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: SiLeetcode,
                  name: "LeetCode",
                  color: "hover:text-yellow-400",
                  link: "https://leetcode.com/",
                },
                {
                  icon: SiCodeforces,
                  name: "CodeForces",
                  color: "hover:text-blue-400",
                  link: "https://codeforces.com/",
                },
                {
                  icon: SiHackerrank,
                  name: "HackerRank",
                  color: "hover:text-green-400",
                  link: "https://hackerrank.com/",
                },
                {
                  icon: FaGithub,
                  name: "GitHub",
                  color: "hover:text-gray-300",
                  link: "https://github.com/",
                },
              ].map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  className={`flex items-center gap-2 text-gray-400 ${profile.color} transition-colors duration-200 group`}
                >
                  <profile.icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm">{profile.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Tech Stack */}
        <div className="py-6 border-b border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-gray-500">Tech Stack:</span>
            {[
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "C++",
              "MongoDB",
              "TypeScript",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 text-xs border border-gray-700 hover:border-blue-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright and extras */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm flex items-center gap-2">
            <span>© {currentYear} Sourav Hossain</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>Polytechnic Student</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <FaHeart className="text-red-500 animate-pulse" size={12} /> in
              Bangladesh
            </span>
          </div>

          {/* Social Icons with enhanced styling */}
          <div className="flex gap-3">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/sourav",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                link: "https://linkedin.com/in/sourav",
                label: "LinkedIn",
              },
              {
                icon: FaTwitter,
                link: "https://twitter.com/sourav",
                label: "Twitter",
              },
              {
                icon: FaCode,
                link: "https://leetcode.com/sourav",
                label: "Coding",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.link}
                target="_blank"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-700/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon
                  size={18}
                  className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Extra programmer touch - floating stats */}
        <div className="absolute bottom-4 left-4 opacity-20 text-xs text-gray-600 hidden lg:block">
          <pre className="font-mono">
            {`while(alive) {
  code.eat();
  sleep();
}`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
