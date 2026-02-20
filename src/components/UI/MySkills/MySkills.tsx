"use client";
import { FaMicrochip, FaCogs, FaPython, FaGithub } from "react-icons/fa";
import {
  SiCplusplus,
  SiArduino,
  SiRaspberrypi,
  SiAltiumdesigner,
  SiEspressif,
  SiMqtt,
  SiBluetooth,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobexd,
  SiFigma,
  SiCanva,
  SiKicad,
  SiEagle,
  SiGit,
} from "react-icons/si";

const MySkills = () => {
  // Programming Languages
  const programmingLanguages = [
    { name: "C", icon: <SiCplusplus /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Embedded C", icon: <FaMicrochip /> },
  ];

  // Hardware & Embedded Skills
  const hardwareSkills = [
    { name: "Arduino", icon: <SiArduino /> },
    { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
    { name: "ESP32", icon: <SiEspressif /> },
    { name: "Microcontrollers", icon: <FaMicrochip /> },
  ];

  // PCB Design Tools
  const pcbSkills = [
    { name: "Altium Designer", icon: <SiAltiumdesigner /> },
    { name: "KiCad", icon: <SiKicad /> },
    { name: "Eagle", icon: <SiEagle /> },
    { name: "Proteus", icon: <FaMicrochip /> },
  ];

  // IoT & Protocols
  const iotSkills = [
    { name: "MQTT", icon: <SiMqtt /> },
    { name: "Bluetooth", icon: <SiBluetooth /> },
    { name: "Wi-Fi", icon: <SiMqtt /> },
    { name: "I2C/SPI/UART", icon: <FaCogs /> },
  ];

  // Design Tools
  const designSkills = [
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Canva", icon: <SiCanva /> },
  ];

  // Version Control
  const versionControlSkills = [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  // All skills combined for display
  const allSkillCategories = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Hardware & Embedded", skills: hardwareSkills },
    { title: "PCB Design", skills: pcbSkills },
    { title: "IoT & Protocols", skills: iotSkills },
    { title: "Design Tools", skills: designSkills },
    { title: "Version Control", skills: versionControlSkills },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Enhanced Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>

        {/* Bottom right glow */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        {/* Additional floating glows */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-10 animate-float delay-2000"></div>
      </div>

      {/* Grid Pattern with lighter touch */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Radial gradient overlay for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with enhanced glow */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 relative">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 relative">
            Electronics engineering student with expertise in embedded systems,
            PCB design, and programming
          </p>
        </div>

        {/* Skills Categories with enhanced cards */}
        <div className="space-y-10">
          {allSkillCategories.map((category, idx) => (
            <div key={idx} className="relative group">
              {/* Category glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative">
                <h3 className="text-lg md:text-xl font-semibold mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group/skill relative">
                      {/* Skill card glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover/skill:opacity-30 transition-all duration-300"></div>

                      {/* Main card */}
                      <div className="relative flex items-center gap-2 p-3 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        {/* Icon with glow */}
                        <span className="relative">
                          <span className="absolute inset-0 bg-blue-500 rounded-full filter blur-md opacity-0 group-hover/skill:opacity-50 transition-opacity"></span>
                          <span className="relative text-blue-400 group-hover/skill:text-blue-300 transition-colors text-lg">
                            {skill.icon}
                          </span>
                        </span>

                        {/* Skill name */}
                        <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors font-medium">
                          {skill.name}
                        </span>

                        {/* Corner accent */}
                        <span className="absolute top-0 right-0 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-gray-400">
              45+ skills across 8 categories
            </span>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default MySkills;
