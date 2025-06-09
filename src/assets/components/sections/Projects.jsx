import { useEffect, useState } from "react";

export const Projects = ({ isLoaded, isInView3 }) => {
  const [transPositionLeft, setTransPositionLeft] = useState(0);
  const [transPositionRight, setTransPositionRight] = useState(0);

  useEffect(() => {
    if (isLoaded && isInView3) {
      const width = window.innerWidth;

      if (width <= 599) {
        setTransPositionRight((prev) => (prev < 10 ? prev + 10 : prev));
        setTransPositionLeft((prev) => (prev > -10 ? prev - 10 : prev));
      } else if (width > 1200) {
        setTransPositionRight((prev) => (prev < 100 ? prev + 100 : prev));
        setTransPositionLeft((prev) => (prev > -100 ? prev - 100 : prev));
      } else {
        setTransPositionRight((prev) => (prev < 40 ? prev + 40 : prev));
        setTransPositionLeft((prev) => (prev > -40 ? prev - 40 : prev));
      }
    } else {
      setTransPositionLeft(0);
      setTransPositionRight(0);
    }
  }, [isLoaded, isInView3]);

  return (
    <section id="projects" className="min-h-screen w-full bg-black">
      <div
        className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-teal-300 bg-clip-text text-transparent">
          My Projects
        </h2>

        {[{
          title: "AnythingDoor – DoorDash Clone",
          link: "https://github.com/timphamvn33/AnythingDoor/",
          tech: [
            "Frontend: React, Typescript, Tailwind, Zod, Framer-Motion, Lucide, Socket.IO",
            "Backend: NestJS, Node.js, REST, JWT, OAuth2",
            "Database: PostgreSQL, Zod, Redis, Prisma",
            "DevOps: Docker, Docker Compose, GitHub",
            "AI: OpenAI"
          ]
        }, {
          title: "Motorcycle eCommerce Website",
          link: "https://github.com/timphamvn33/motorcycle_Shop",
          tech: [
            "Frontend: React, Tailwind CSS, JavaScript",
            "Backend: Node.js, Express",
            "Database: NoSQL, MongoDB, PostgreSQL",
            "Platform: Docker, Studio 3T",
            "AI: OpenAI"
          ]
        }].map((project) => (
          <div
            key={project.title}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 xl:gap-32 w-full mb-16 items-start"
          >
            {/* Left Column - Project Summary */}
            <div
              className="flex justify-center"
              style={{
                transform: `translateX(${transPositionRight}px)`,
                transition: "transform 1s ease-in-out",
              }}
            >
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-6 rounded-xl shadow-lg w-full mx-4 hover:scale-105 transition-transform duration-300 ease-in-out max-w-md">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm md:text-base break-all"
                >
                  GitHub Repo
                </a>
              </div>
            </div>

            {/* Right Column - Tech Stack */}
            <div
              className="flex justify-center"
              style={{
                transform: `translateX(${transPositionLeft}px)`,
                transition: "transform 1s ease-in-out",
              }}
            >
              <ul className="bg-gradient-to-r from-gray-800 to-blue-800 text-gray-300 p-6 rounded-xl shadow-md w-full mx-4 font-mono text-sm md:text-base lg:text-lg max-w-md hover:scale-105 transition-transform duration-300 ease-in-out">
                {project.tech.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
