"use client";
import { JSX, useState } from "react";
import Link from "next/link";

import {
  FaCalendar,
  FaSearch,
  FaTimes,
  FaArrowRight,
  FaClock,
  FaMicrochip,
  FaCode,
  FaRobot,
  FaRaspberryPi,
  FaHeart,
  FaComment,
  FaUser,
  FaTag,
  FaShare,
  FaBookmark,
  FaEye,
} from "react-icons/fa";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";

// Define types
interface Category {
  id: string;
  name: string;
  count: number;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  likes: number;
  comments: number;
  views: number;
  image: string;
  icon: JSX.Element;
  color: string;
}

interface Stat {
  value: string;
  label: string;
}

const MyBlog = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Categories
  const categories: Category[] = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "embedded", name: "Embedded Systems", count: 4 },
    { id: "iot", name: "IoT", count: 3 },
    { id: "robotics", name: "Robotics", count: 2 },
    { id: "tutorials", name: "Tutorials", count: 3 },
  ];

  // Blog Posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Arduino Programming",
      excerpt:
        "Learn the basics of Arduino programming and start building your first embedded project.",
      content:
        "Arduino is an open-source electronics platform based on easy-to-use hardware and software. In this comprehensive guide, you'll learn about Arduino board types, the IDE, basic programming concepts like variables, loops, and functions, and how to interface with LEDs, sensors, and motors. Perfect for beginners looking to start their embedded journey!\n\n**What You'll Learn:**\n• Arduino board types (Uno, Nano, Mega)\n• Setting up the Arduino IDE\n• Basic C++ syntax for Arduino\n• Digital and analog I/O\n• Interfacing with sensors and actuators\n• Building your first project: LED blink and beyond",
      category: "embedded",
      tags: ["Arduino", "C++", "Beginners"],
      date: "Mar 15, 2024",
      readTime: "5 min",
      author: "Sourav",
      likes: 45,
      comments: 12,
      views: 1234,
      image: "/blog/arduino.jpg",
      icon: <FaArrowDownUpAcrossLine />,
      color: "blue",
    },
    {
      id: 2,
      title: "Building IoT Devices with ESP32",
      excerpt:
        "Complete guide to creating IoT devices using ESP32 microcontroller.",
      content:
        "The ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth capabilities. This tutorial covers setting up the ESP32 in Arduino IDE, connecting to WiFi, implementing MQTT protocol for IoT communication, reading sensor data, and sending it to cloud platforms like ThingSpeak and Blynk. You'll build a complete weather monitoring station by the end!\n\n**Topics Covered:**\n• ESP32 architecture and features\n• WiFi and Bluetooth setup\n• MQTT protocol implementation\n• Cloud platforms integration\n• Sensor data logging\n• Building a weather station project",
      category: "iot",
      tags: ["ESP32", "IoT", "WiFi"],
      date: "Mar 10, 2024",
      readTime: "8 min",
      author: "Sourav",
      likes: 32,
      comments: 8,
      views: 987,
      image: "/blog/esp32.jpg",
      icon: <FaRaspberryPi />,
      color: "green",
    },
    {
      id: 3,
      title: "PCB Design Basics for Beginners",
      excerpt: "Learn how to design your first PCB using KiCad and Eagle.",
      content:
        "Printed Circuit Board (PCB) design is a crucial skill for any electronics engineer. This beginner-friendly guide walks you through the entire PCB design process: schematic creation, component selection, board layout, routing, design rule checking, and generating Gerber files for manufacturing. We'll use both KiCad (free) and Eagle (professional) tools.\n\n**Step-by-Step Process:**\n• Creating schematics\n• Component selection and footprints\n• Board layout and routing\n• Design rules and constraints\n• Generating manufacturing files\n• PCB assembly tips",
      category: "embedded",
      tags: ["PCB", "KiCad", "Design"],
      date: "Mar 5, 2024",
      readTime: "6 min",
      author: "Sourav",
      likes: 28,
      comments: 5,
      views: 756,
      image: "/blog/pcb.jpg",
      icon: <FaMicrochip />,
      color: "purple",
    },
    {
      id: 4,
      title: "Line Follower Robot with Arduino",
      excerpt: "Step-by-step tutorial to build your own line following robot.",
      content:
        "Build an autonomous line follower robot from scratch! This project uses Arduino UNO, IR sensor array, L298N motor driver, and DC motors. You'll learn about PID control algorithms for smooth line tracking, sensor calibration techniques, and motor speed control using PWM. Complete circuit diagrams and code provided.\n\n**Project Details:**\n• Hardware requirements list\n• Circuit diagram explanation\n• Sensor calibration methods\n• PID control implementation\n• Motor driver configuration\n• Testing and troubleshooting",
      category: "robotics",
      tags: ["Arduino", "Robotics", "Sensors"],
      date: "Feb 28, 2024",
      readTime: "7 min",
      author: "Sourav",
      likes: 51,
      comments: 15,
      views: 1567,
      image: "/blog/robot.jpg",
      icon: <FaRobot />,
      color: "red",
    },
    {
      id: 5,
      title: "Understanding PWM and Its Applications",
      excerpt:
        "Deep dive into Pulse Width Modulation and how to use it in projects.",
      content:
        "Pulse Width Modulation (PWM) is a technique for getting analog results with digital means. This tutorial explains PWM theory, duty cycle, frequency, and practical applications like LED dimming, motor speed control, servo positioning, and audio generation. Includes Arduino code examples and oscilloscope measurements.\n\n**Key Concepts:**\n• PWM theory and principles\n• Duty cycle and frequency\n• LED brightness control\n• DC motor speed control\n• Servo motor positioning\n• Audio signal generation",
      category: "tutorials",
      tags: ["PWM", "Arduino", "Electronics"],
      date: "Feb 20, 2024",
      readTime: "4 min",
      author: "Sourav",
      likes: 19,
      comments: 3,
      views: 543,
      image: "/blog/pwm.jpg",
      icon: <FaCode />,
      color: "yellow",
    },
    {
      id: 6,
      title: "Sensor Interfacing with Microcontrollers",
      excerpt: "Guide to connecting various sensors with Arduino and ESP32.",
      content:
        "Learn how to interface different types of sensors with microcontrollers: digital sensors (DHT22), analog sensors (LM35), I2C sensors (BMP180), and SPI sensors. This tutorial covers reading sensor data, calibration, filtering techniques, and displaying data on LCD and serial monitor.\n\n**Sensor Types Covered:**\n• Digital sensors (DHT22)\n• Analog sensors (LM35)\n• I2C sensors (BMP180)\n• SPI sensors\n• Data filtering techniques\n• Displaying sensor data",
      category: "embedded",
      tags: ["Sensors", "I2C", "SPI"],
      date: "Feb 15, 2024",
      readTime: "6 min",
      author: "Sourav",
      likes: 27,
      comments: 6,
      views: 890,
      image: "/blog/sensors.jpg",
      icon: <FaMicrochip />,
      color: "indigo",
    },
  ];

  // Featured Posts
  const featuredPosts: BlogPost[] = blogPosts.slice(0, 2);

  // Filter posts
  const filteredPosts: BlogPost[] = blogPosts.filter((post: BlogPost) => {
    const matchesCategory: boolean =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch: boolean =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag: string) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Open modal with post details
  const openPostModal = (post: BlogPost): void => {
    setSelectedPost(post);
    setIsModalOpen(true);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = "unset";
  };

  // Stats data
  const stats: Stat[] = [
    { value: "12", label: "Total Posts" },
    { value: "5", label: "Categories" },
    { value: "2.5k+", label: "Views" },
    { value: "50+", label: "Comments" },
  ];

  // Helper function to render content with formatting
  const renderContent = (content: string): JSX.Element[] => {
    return content.split("\n\n").map((paragraph: string, idx: number) => {
      if (paragraph.startsWith("**")) {
        return (
          <h4 key={idx} className="text-white font-semibold text-lg mt-4 mb-2">
            {paragraph.replace(/\*\*/g, "")}
          </h4>
        );
      }
      return (
        <p key={idx} className="text-gray-300 text-sm leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <section
      id="blog"
      className="py-16 md:py-20 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My <span className="text-blue-500">Blog</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-3">
            Sharing knowledge about electronics, embedded systems, and
            programming
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat: Category) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-blue-500 hover:text-white"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="w-full px-4 py-2 pl-9 bg-gray-900/50 border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
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

        {/* Featured Posts */}
        {selectedCategory === "all" && !searchQuery && (
          <div className="mb-10">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredPosts.map((post: BlogPost) => (
                <div
                  key={post.id}
                  onClick={() => openPostModal(post)}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="flex">
                    <div className={`w-2 bg-${post.color}-500`}></div>
                    <div className="flex-1 p-4">
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaCalendar /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaEye /> {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                onClick={() => openPostModal(post)}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-1 cursor-pointer relative"
              >
                {/* Read More Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-6">
                  <span className="text-white text-sm font-medium bg-blue-600 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Read Article
                  </span>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`h-28 bg-linear-to-r from-${post.color}-600/20 to-${post.color}-600/5 flex items-center justify-center border-b border-gray-800 relative`}
                >
                  <span
                    className={`text-3xl text-${post.color}-400 opacity-50`}
                  >
                    {post.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-white font-medium text-sm mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gray-800 text-gray-400 text-[10px] rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-[10px] text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <FaCalendar /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <FaEye /> {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaHeart /> {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No blog posts found</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-white text-sm hover:border-blue-500 transition-all group"
          >
            <span>View All Posts</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
          {stats.map((stat: Stat, index: number) => (
            <div
              key={index}
              className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-800"
            >
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-gray-900 rounded-2xl border border-gray-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <FaTimes className="text-gray-400 hover:text-white" />
            </button>

            {/* Header Section */}
            <div className="p-6 border-b border-gray-800">
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedPost.title}
              </h3>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaUser className="text-blue-400" /> {selectedPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendar className="text-blue-400" /> {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-blue-400" /> {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <FaTag className="text-blue-400" /> {selectedPost.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedPost.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                {renderContent(selectedPost.content)}
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 mt-8 pt-4 border-t border-gray-800">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <FaEye className="text-blue-400" /> {selectedPost.views} views
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <FaHeart className="text-red-500" /> {selectedPost.likes}{" "}
                  likes
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <FaComment className="text-green-500" />{" "}
                  {selectedPost.comments} comments
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white text-sm hover:bg-blue-600 transition-colors">
                  <FaHeart /> Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white text-sm hover:bg-blue-600 transition-colors">
                  <FaComment /> Comment
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white text-sm hover:bg-blue-600 transition-colors">
                  <FaShare /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white text-sm hover:bg-blue-600 transition-colors">
                  <FaBookmark /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyBlog;
