import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaMicrochip,
  FaCode,
  FaLocationDot,
  FaCalendar,
  FaHeart,
  FaAward,
  FaBook,
  FaCertificate,
} from "react-icons/fa6";
import {
  SiArduino,
  SiRaspberrypi,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

const AboutMe = () => {
  // Personal Info
  const personalInfo = [
    { label: "Name", value: "Md Sabbir Hossain Sourav", icon: <FaHeart /> },
    {
      label: "Location",
      value: "Sirajganj, Rajshahi, Bangladesh",
      icon: <FaLocationDot />,
    },
    {
      label: "Education",
      value: "Electronics Engineering",
      icon: <FaGraduationCap />,
    },
    {
      label: "Institute",
      value: "Tangail Polytechnic Institute",
      icon: <FaGraduationCap />,
    },
    { label: "Current Year", value: "3rd Year", icon: <FaCalendar /> },
  ];

  // Quick Stats
  const quickStats = [
    { value: "2+", label: "Years Learning", icon: <FaCalendar /> },
    { value: "15+", label: "Projects Built", icon: <FaProjectDiagram /> },
    { value: "5+", label: "Certifications", icon: <FaCertificate /> },
    { value: "3", label: "Technologies", icon: <FaMicrochip /> },
  ];

  // Core Skills
  const coreSkills = [
    { name: "Embedded C", icon: <FaCode />, level: "Advanced" },
    { name: "C/C++", icon: <SiCplusplus />, level: "Advanced" },
    { name: "Python", icon: <SiPython />, level: "Intermediate" },
    { name: "Arduino", icon: <SiArduino />, level: "Advanced" },
    { name: "Raspberry Pi", icon: <SiRaspberrypi />, level: "Intermediate" },
    { name: "PCB Design", icon: <FaMicrochip />, level: "Intermediate" },
  ];

  // Achievements
  const achievements = [
    "Completed Phitron CSE Fundamentals Course",
    "Built multiple IoT-based smart devices",
    "Designed custom PCBs for embedded projects",
    "Active contributor to open-source hardware",
  ];

  // Interests
  const interests = [
    "Embedded Systems",
    "IoT Development",
    "Robotics",
    "PCB Design",
    "AI/ML Integration",
    "Open Source",
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 sticky top-24">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/sourav.png"
                    alt="Md Sabbir Hossain Sourav - Electronics Engineer"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-bold text-white text-center mb-1">
                Md Sabbir Hossain Sourav
              </h3>
              <p className="text-sm text-blue-500 text-center mb-4">
                Electronics Engineering Student
              </p>

              {/* Quick Info */}
              <div className="space-y-3 mb-6">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <span className="text-blue-500 w-5">{info.icon}</span>
                    <div>
                      <p className="text-gray-400 text-xs">{info.label}</p>
                      <p className="text-white text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-3 text-center"
                  >
                    <span className="text-blue-500 text-lg block mb-1">
                      {stat.icon}
                    </span>
                    <div className="text-white font-bold text-lg">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Card */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Who Am I?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm an Electronics Engineering student at Tangail Polytechnic
                Institute, passionate about bridging the gap between hardware
                and software. My journey in electronics started with simple LED
                circuits, and now I'm building complex embedded systems and IoT
                devices.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Currently expanding my skills through the Phitron CSE
                Fundamentals course, focusing on embedded systems, PCB design,
                and microcontroller programming. I believe in hands-on learning
                and enjoy turning ideas into working projects.
              </p>
            </div>

            {/* Core Skills */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Core Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {coreSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-blue-500 text-xl">
                        {skill.icon}
                      </span>
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === "Advanced"
                          ? "bg-green-500/20 text-green-400"
                          : skill.level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">
                      <FaAward />
                    </span>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Interests & Passions
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <FaGraduationCap className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Diploma in Engineering
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Tangail Polytechnic Institute
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      2022 - Present | 3rd Year
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <FaBook className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      CSE Fundamentals
                    </h4>
                    <p className="text-gray-400 text-sm">Phitron Course</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Currently Enrolled
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/20">
              <p className="text-gray-300 text-center italic">
                "Building the future, one line of code and one circuit at a
                time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
