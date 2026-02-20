import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiHackerrank } from "react-icons/si";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Text Section */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-gray-900 text-blue-400 text-sm font-medium px-4 py-2 rounded-full border border-gray-800 shadow-lg">
                👋 Electronics Engineering Student
              </span>
            </div>

            {/* Main Heading - Full Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              <span className="block">Md Sabbir Hossain</span>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sourav
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/20 blur-md z-0 hidden sm:block"></span>
              </span>
            </h1>

            {/* Dynamic Title - Enhanced with actual roles */}
            <h2 className="text-lg sm:text-xl text-gray-300 mb-6">
              <span className="font-medium text-gray-200">
                Electronics Engineering Student
              </span>
              <span className="mx-2 text-gray-600">|</span>
              <span className="text-blue-400 font-medium">C/C++ & Python</span>
              <span className="mx-2 text-gray-600">|</span>
              <span className="text-purple-400 font-medium">PCB Designer</span>
            </h2>

            {/* Description - Updated with actual info */}
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Electronics Engineering student at Tangail Polytechnic Institute,
              passionate about electronics, microcontrollers, IoT, and embedded
              systems. I have hands-on experience in PCB design, C/C++, and
              Python programming. Currently expanding my skills through the
              Phitron CSE Fundamentals course. I enjoy building innovative
              electronics projects and aim to develop smart devices that improve
              everyday life.
            </p>

            {/* Social Media Links - New Section */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              {/* Facebook */}
              <Link
                href="https://facebook.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-gray-400 hover:text-blue-600" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-700 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-blue-700" />
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-gray-400 hover:text-white" />
              </Link>

              {/* LeetCode */}
              <Link
                href="https://leetcode.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-yellow-600 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5 text-gray-400 hover:text-yellow-600" />
              </Link>

              {/* CodeForces */}
              <Link
                href="https://codeforces.com/profile/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="CodeForces"
              >
                <SiCodeforces className="w-5 h-5 text-gray-400 hover:text-blue-500" />
              </Link>

              {/* HackerRank */}
              <Link
                href="https://hackerrank.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-600 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="HackerRank"
              >
                <SiHackerrank className="w-5 h-5 text-gray-400 hover:text-green-600" />
              </Link>

              {/* Twitter/X */}
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <Link
                href="#portfolio"
                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Projects
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="#contact"
                className="px-8 py-4 bg-gray-900 text-white font-medium rounded-xl border border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
              >
                Let&apos;s Connect
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats Section - Updated with relevant stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              {[
                { value: "5+", label: "Projects" },
                { value: "2+", label: "Years" },
                { value: "IoT", label: "Embedded" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills - Updated with actual skills */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                "C/C++",
                "Python",
                "PCB Design",
                "IoT",
                "Embedded Systems",
                "Arduino",
                "Microcontrollers",
                "Circuit Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900/80 text-gray-300 text-sm rounded-full border border-gray-800 hover:border-blue-500 hover:text-blue-400 hover:bg-gray-800/80 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Institution Badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-sm text-gray-300">
                Tangail Polytechnic Institute
              </span>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="flex-1 relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Main Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-130 lg:h-130 mx-auto">
              {/* Animated Border Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse delay-300"></div>

              {/* Image Container with Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-500 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  {/* Electronics/PCB themed placeholder - shows until image loads */}
                  <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-7xl text-gray-700 animate-pulse">
                      🔌
                    </span>
                  </div>

                  {/* Actual image - replace with your photo */}
                  <Image
                    src="/images/sourav.png"
                    alt="Md Sabbir Hossain Sourav - Electronics Engineer"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements - Updated to reflect electronics theme */}
              <div className="absolute -top-4 -right-4 bg-gray-800 rounded-xl shadow-2xl p-3 border border-gray-700 animate-bounce backdrop-blur-sm">
                <div className="text-3xl filter drop-shadow-lg">🔌</div>
              </div>

              <div className="absolute -bottom-2 -left-4 bg-gray-800 rounded-xl shadow-2xl p-3 border border-gray-700 animate-bounce delay-1000 backdrop-blur-sm">
                <div className="text-3xl filter drop-shadow-lg">⚡</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse shadow-blue-500/50">
                <span className="text-lg font-bold">🔧</span>
              </div>

              {/* Experience Badge */}
              <div className="absolute -left-8 bottom-12 bg-gray-800 rounded-lg shadow-2xl p-3 border border-gray-700 hidden lg:block backdrop-blur-sm">
                <div className="text-xs text-gray-400">PCB Design</div>
                <div className="text-lg font-bold text-white">Expert</div>
              </div>
            </div>

            {/* Code Snippet Card - Updated with electronics theme */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white p-4 rounded-xl shadow-2xl border border-gray-700 hidden lg:block backdrop-blur-sm">
              <pre className="text-xs font-mono">
                <code>
                  <span className="text-blue-400">class</span>{" "}
                  <span className="text-green-400">ElectronicsEngineer</span>{" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">string</span> name
                  = <span className="text-yellow-400">&quot;Sourav&quot;</span>;
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">string</span>{" "}
                  passion ={" "}
                  <span className="text-yellow-400">
                    &quot;IoT & Embedded&quot;
                  </span>
                  ;
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">void</span>{" "}
                  <span className="text-purple-400">innovate</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-gray-400">Building smart devices</span>
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <span className="text-sm">Explore my work</span>
            <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-linear-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
