"use client";
import Image from "next/image";

const FeaturedProject = ({ project, position }) => {
  const isLeft = position === "left";

  return (
    <div
      className={`
        hidden xl:block
        absolute
        ${isLeft ? "left-[-110px]" : "right-[-110px]"}
        top-[58%]
        -translate-y-1/2
        w-[360px]
        group
      `}
    >
      {/* Heading */}
      <div className="mb-3 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Featured Project
        </p>
        <div className="w-12 h-[2px] bg-gray-300 mx-auto mt-2"></div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image */}
        <div className="relative h-[220px] bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hover Content */}
        <div
          className="
            max-h-0
            overflow-hidden
            group-hover:max-h-[360px]
            transition-all
            duration-500
            ease-in-out
          "
        >
          <div className="p-5 border-t">
            <h3 className="font-semibold text-gray-900 text-lg">
              {project.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {project.subtitle}
            </p>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {project.description}
            </p>

            {project.note && (
              <p className="text-xs italic text-gray-500 mt-3">
                {project.note}
              </p>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-5
                text-sm
                bg-teal-600
                text-white
                px-5
                py-2
                rounded-full
                hover:bg-teal-500
                transition
              "
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
