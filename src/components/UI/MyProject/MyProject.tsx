"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMicrochip,
  FaCode,
  FaRobot,
  FaRaspberryPi,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { SiEspressif } from "react-icons/si";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";

const MyProject = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Smart Home Automation",
      category: "iot",
      image: "/projects/smart-home.jpg",
      description:
        "IoT-based smart home system with temperature monitoring, light control, and motion detection using ESP32 and sensors.",
      technologies: ["ESP32", "MQTT", "Arduino", "Sensors", "Bluetooth"],
      features: [
        "Remote control via app",
        "Real-time monitoring",
        "Motion alerts",
        "Energy saving",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      icon: <FaRaspberryPi />,
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "PCB Design - Power Supply",
      category: "pcb",
      image: "/projects/pcb-design.jpg",
      description:
        "Custom PCB design for variable power supply with voltage regulation, overcurrent protection, and LCD display interface.",
      technologies: [
        "Altium Designer",
        "KiCad",
        "Power Electronics",
        "Circuit Design",
      ],
      features: [
        "5V-12V adjustable",
        "Overcurrent protection",
        "LCD display",
        "Compact design",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      icon: <FaMicrochip />,
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Line Follower Robot",
      category: "robotics",
      image: "/projects/robot.jpg",
      description:
        "Autonomous line following robot using Arduino UNO, IR sensors, and motor driver with PID control algorithm.",
      technologies: ["Arduino", "C++", "IR Sensors", "Motor Driver", "PID"],
      features: [
        "PID control",
        "Obstacle detection",
        "Speed control",
        "Battery efficient",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      icon: <FaRobot />,
      color: "from-green-600 to-emerald-600",
    },
    {
      id: 4,
      title: "Weather Monitoring Station",
      category: "iot",
      image: "/projects/weather.jpg",
      description:
        "IoT weather station with DHT22 sensor, BMP180 pressure sensor, and ESP8266 sending data to cloud dashboard.",
      technologies: ["ESP8266", "DHT22", "BMP180", "ThingSpeak", "Wi-Fi"],
      features: [
        "Temperature & humidity",
        "Barometric pressure",
        "Cloud dashboard",
        "Data logging",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      icon: <SiEspressif />,
      color: "from-yellow-600 to-orange-600",
    },
    {
      id: 5,
      title: "Embedded C - LED Matrix",
      category: "embedded",
      image: "/projects/led-matrix.jpg",
      description:
        "8x8 LED matrix display with scrolling text and animations using ATmega328 and shift registers.",
      technologies: [
        "ATmega328",
        "Embedded C",
        "Shift Registers",
        "Timer/Interrupts",
      ],
      features: [
        "Scrolling text",
        "Custom animations",
        "Multiple patterns",
        "Speed control",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      icon: <FaCode />,
      color: "from-red-600 to-rose-600",
    },
    {
      id: 6,
      title: "Bluetooth RC Car",
      category: "robotics",
      image: "/projects/rc-car.jpg",
      description:
        "Android controlled RC car using Arduino UNO, HC-05 Bluetooth module, and L293D motor driver.",
      technologies: ["Arduino", "HC-05", "L293D", "DC Motors", "Android App"],
      features: [
        "Bluetooth control",
        "Speed variation",
        "Direction control",
        "LED indicators",
      ],
      github: "https://github.com/",
      live: "https://example.com",
      icon: <FaArrowDownUpAcrossLine />,
      color: "from-blue-600 to-indigo-600",
    },
  ];

  // Categories
  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "iot",
      name: "IoT",
      count: projects.filter((p) => p.category === "iot").length,
    },
    {
      id: "embedded",
      name: "Embedded",
      count: projects.filter((p) => p.category === "embedded").length,
    },
    {
      id: "robotics",
      name: "Robotics",
      count: projects.filter((p) => p.category === "robotics").length,
    },
    {
      id: "pcb",
      name: "PCB Design",
      count: projects.filter((p) => p.category === "pcb").length,
    },
  ];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Showcasing my work in embedded systems, IoT, robotics, and PCB
            design
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  filter === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-blue-500 hover:text-white"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-gray-900/50 border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-600 text-sm" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-gray-600 hover:text-white"
              >
                <FaTimes className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-2"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`h-40 bg-linear-to-r ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-5xl opacity-30">{project.icon}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded border border-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-[10px] text-gray-500">
                          • {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub /> Code
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt /> Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No projects found matching your criteria
            </p>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link
            href="https://github.com/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white text-sm hover:border-blue-500 transition-all group"
          >
            <FaGithub />
            <span>View More on GitHub</span>
            <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { value: "15+", label: "Total Projects" },
            { value: "8+", label: "IoT Devices" },
            { value: "5+", label: "PCB Designs" },
            { value: "4+", label: "Robotics" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
