"use client";
import { useState } from "react";
import Image from "next/image";
import FeaturedProject from "./FeaturedProject";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ================= PROJECT DATA =================

  const drdoProject = {
    title: "DRDO AI Document Assistant",
    image: "/drdo1.png",
    description:
      "An online version of my DRDO internship project that allows users to query missile-related PDFs using AI.",
    note:
      "If the app appears offline, click 'Wake it up' inside the app to start the service.",
    liveLink: "https://nr5lfhfebygkwc4yfzl43z.streamlit.app/",
  };

  const pyqtProject = {
    title: "PyQt Desktop Apps (Online Version)",
    image: "/pyqt1.png", // ⬅️ make sure this image exists in /public
    description:
      "A web-based version of my PyQt desktop applications, converted to an online interface to demonstrate functionality without local installation.",
    note:
      "Originally built as desktop applications using PyQt and later adapted for online access.",
    liveLink:
      "https://pyqt-desktop-apps-web-o7sixw96y9jjzkd65zxhbc.streamlit.app/",
  };

  return (
    <section
      id="home"
      className="w-full min-h-[95vh] flex flex-col justify-center items-center bg-[#eceae6] rounded-b-[120px] shadow-lg relative"
    >
      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-6 sm:px-10">
        <div className="flex space-x-6 items-center">
          <a
            href="mailto:mohithpupppala@gmail.com"
            className="px-4 py-1 border rounded-full hover:bg-teal-500 transition"
          >
            Mail
          </a>

          <a
            href="\offcampus.pdf"
            download="Mohith_Resume.pdf"
            className="px-4 py-1 border rounded-full hover:bg-teal-500 transition"
          >
            Resume
          </a>
        </div>

        <nav className="sm:flex sm:space-x-6 hidden">
          <a
            href="#home"
            className="px-4 py-1 border rounded-full hover:bg-teal-500 transition"
          >
            Home
          </a>
          <a
            href="#projects"
            className="px-4 py-1 border rounded-full hover:bg-teal-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-1 border rounded-full hover:bg-teal-500 transition"
          >
            Contact
          </a>
        </nav>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black mb-1"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <nav className="sm:hidden absolute top-0 left-0 right-0 bg-white shadow-lg py-6">
          <button
            onClick={closeMenu}
            className="absolute top-4 left-4 font-bold"
          >
            Back
          </button>

          <ul className="flex flex-col space-y-4 text-center mt-10">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative w-full max-w-6xl mx-auto flex justify-center">
        {/* Text Content */}
        <div className="text-center flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
              <Image
                src="/profile1.jpg"
                alt="Mohith"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.5] mt-10">
            <span className="block mb-2">I am Mohith a,</span>
            <span className="block mb-2">Full Stack</span>
            <span className="block">developer.</span>
          </h1>

          {/* CTA */}
          <a
            href="https://nr5lfhfebygkwc4yfzl43z.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-teal-600 transition inline-flex items-center"
          >
            Latest Project ↗
          </a>
        </div>

        {/* ================= FEATURED PROJECTS ================= */}
        {/* Right Side – DRDO */}
        <FeaturedProject project={drdoProject} position="right" />

        {/* Left Side – PyQt Online */}
        <FeaturedProject project={pyqtProject} position="left" />
      </div>
    </section>
  );
};

export default Hero;
