import { useEffect, useState } from "react";

const skillList = [
  "HTML", "CSS", "TAILWIND CSS", "ANGULAR", "REACT",
  "TYPESCRIPT", "JAVASCRIPT", "PYTHON", "JAVA", "SPRINGBOOT",
  "GIT", "FORK", "POSTGRESQL", "NODE.JS", "MONGODB", "MYSQL"
];

export const Skills = ({ isLoaded, isInView2 }) => {
  const [moveUp, setMoveUp] = useState(50);

  useEffect(() => {
    if (isLoaded && isInView2) {
      setMoveUp(-10);
    } else {
      setMoveUp(30);
    }
  }, [isLoaded, isInView2]);

  return (
    <section id="skills" className="min-h-screen w-full bg-black">
      <div
        className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(${moveUp}%)`,
          fontFamily: "Orbitron, sans-serif",
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-teal-300 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full px-2 sm:px-4">
          {skillList.map((skill, i) => (
            <span
              key={skill}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-200 bg-gradient-to-r from-gray-900 to-blue-900 shadow-md sm:shadow-lg
                transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
              style={{
                animation: `float 4s ease-in-out ${i * 0.2}s infinite`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }
        `}
      </style>
    </section>
  );
};
