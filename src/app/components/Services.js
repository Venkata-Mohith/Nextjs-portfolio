"use client";
import Image from "next/image";

const projects = [
  {
    title: "Information Retrieval System using LLM",
    description:
      "An AI-powered web application that allows users to query missile-related PDFs using semantic search and LLMs. Built in 2025 and later deployed online.",
    image: "/drdo1.png",
    link: "https://nr5lfhfebygkwc4yfzl43z.streamlit.app/",
  },
  {
    title: "PyQt Web Applications Internship",
    description:
      "Desktop-based document assistant developed during my 2024 DRDO internship using Python and PyQt, later converted into a web version.",
    image: "/pyqt1.png",
    link: "https://pyqt-desktop-apps-web-o7sixw96y9jjzkd65zxhbc.streamlit.app/",
  },
  {
    title: "Project Raksha",
    description:
      "A safety-focused emergency distress signal platform that enables users to quickly send alerts in critical situations.",
    image: "/raksha.png",
    link: "https://raksha-project-beta.vercel.app/",
  },
  {
    title: "Roadmap Generator",
    description:
      "An interactive roadmap generator that helps users explore learning paths or create custom roadmaps similar to roadmap.sh.",
    image: "/roadmap.png",
    link: "https://roadmap-generator-ten.vercel.app/",
  },
];

const Services = () => {
  return (
    <section id="projects" className="w-full py-32 pb-48 bg-[#f3f2ef]">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
        <span className="text-black">Projects that reflect my skills</span>
        <br />
        <span>and creativity in action.</span>
      </h2>

      {/* Center Label */}
      <div className="flex items-center justify-center mt-6">
        <div className="w-1/3 h-[2px] bg-black"></div>
        <div className="mx-4 bg-white shadow-lg px-6 py-2 rounded-full border border-gray-300 font-semibold">
          Projects
        </div>
        <div className="w-1/3 h-[2px] bg-black"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-4 sm:px-8 md:px-16">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative
              bg-white rounded-2xl shadow-lg
              overflow-hidden
              transition-all duration-300
              hover:shadow-xl
            "
          >
            {/* Image */}
            <div className="relative h-[180px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-gray-900">
                {project.title}
              </h3>
            </div>

            {/* Hover Description (slides DOWN) */}
            <div
              className="
                absolute bottom-0 left-0 right-0
                bg-teal-200
                px-4 py-3
                text-sm text-gray-800 text-center
                opacity-0 translate-y-full
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300
              "
            >
              {project.description}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
