import Link from "next/link";

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
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="relative">
                <span className="relative z-10 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sourav Kumar
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/20 blur-md z-0 hidden sm:block"></span>
              </span>
            </h1>

            {/* Dynamic Title */}
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              <span className="font-medium text-gray-200">
                Polytechnic Student
              </span>
              <span className="mx-3 text-gray-600">•</span>
              <span className="text-blue-400 font-medium">Programmer</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Passionate about creating elegant solutions through code.
              Currently pursuing my polytechnic diploma while building
              real-world projects and exploring modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <Link
                href="#portfolio"
                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
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

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              {[
                { value: "10+", label: "Projects" },
                { value: "3", label: "Certifications" },
                { value: "2+", label: "Years Coding" },
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

            {/* Tech Stack Pills */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind",
                "Python",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900/80 text-gray-300 text-sm rounded-full border border-gray-800 hover:border-blue-500 hover:text-blue-400 hover:bg-gray-800/80 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="flex-1 relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Main Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Animated Border Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-pulse delay-300"></div>

              {/* Image Container with Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-500 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-7xl text-gray-700 animate-pulse">
                      👨‍💻
                    </span>
                  </div>

                  {/* Uncomment when you have the actual image */}
                  {/* <Image
                    src="/images/sourav-profile.jpg"
                    alt="Sourav Kumar - Programmer"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    priority
                  /> */}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gray-800 rounded-xl shadow-2xl p-3 border border-gray-700 animate-bounce backdrop-blur-sm">
                <div className="text-3xl filter drop-shadow-lg">👨‍💻</div>
              </div>

              <div className="absolute -bottom-2 -left-4 bg-gray-800 rounded-xl shadow-2xl p-3 border border-gray-700 animate-bounce delay-1000 backdrop-blur-sm">
                <div className="text-3xl filter drop-shadow-lg">🚀</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse shadow-blue-500/50">
                <span className="text-lg font-bold">⚡</span>
              </div>

              {/* Experience Badge */}
              <div className="absolute -left-8 bottom-12 bg-gray-800 rounded-lg shadow-2xl p-3 border border-gray-700 hidden lg:block backdrop-blur-sm">
                <div className="text-xs text-gray-400">Coding since</div>
                <div className="text-lg font-bold text-white">2022</div>
              </div>
            </div>

            {/* Code Snippet Card */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white p-4 rounded-xl shadow-2xl border border-gray-700 hidden lg:block backdrop-blur-sm">
              <pre className="text-xs font-mono">
                <code>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-green-400">developer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;name:{" "}
                  <span className="text-yellow-400">&apos;Sourav&apos;</span>,
                  <br />
                  &nbsp;&nbsp;status:{" "}
                  <span className="text-yellow-400">&apos;learning&apos;</span>,
                  <br />
                  &nbsp;&nbsp;passion:{" "}
                  <span className="text-yellow-400">&apos;coding&apos;</span>,
                  <br />
                  &nbsp;&nbsp;year:{" "}
                  <span className="text-yellow-400">2024</span>,
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
            <span className="text-sm">Scroll to explore</span>
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
