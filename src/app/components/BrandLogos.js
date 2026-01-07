"use client";
import Image from "next/image";

const skills = {
  "Programming Languages": [
    {
      name: "JavaScript",
      logo: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
    },
    {
      name: "Python",
      logo: "https://www.svgrepo.com/show/452091/python.svg",
    },
    {
      name: "Java",
      logo: "https://www.svgrepo.com/show/452234/java.svg",
    },
  ],

  Frontend: [
    {
      name: "HTML5",
      logo: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
    {
      name: "CSS3",
      logo: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    {
      name: "React",
      logo: "https://www.svgrepo.com/show/452092/react.svg",
    },
    {
      name: "Next.js",
      logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
  ],

  "Backend & Tools": [
    {
      name: "Node.js",
      logo: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
    },
    {
      name: "Express.js",
      logo: "https://www.svgrepo.com/show/330398/express.svg",
    },
    {
      name: "MongoDB",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "Docker",
      logo: "https://www.svgrepo.com/show/452192/docker.svg",
    },
    {
      name: "AWS",
      logo: "https://www.svgrepo.com/show/448266/aws.svg",
    },
    {
      name: "GitHub",
      logo: "https://www.svgrepo.com/show/512317/github-142.svg",
    },
  ],
};

const BrandLogos = () => {
  return (
    <section className="w-full py-28 bg-white rounded-b-[100px]">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={52}
                    height={52}
                    className="
                      grayscale
                      transition-all duration-300
                      hover:grayscale-0
                      hover:scale-110
                      hover:drop-shadow-md
                    "
                  />
                  <span className="mt-3 text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
