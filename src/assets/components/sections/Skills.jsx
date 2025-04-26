import { useState, useEffect } from "react";
export const Skills = ({ isLoaded, isInView2 }) => {
  const [moveUp, setMoveUp] = useState(50);
  const [opChange, setOpChange] = useState(new Array(16).fill(0));
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  useEffect(() => {
    if (isLoaded && isInView2) {
      const rect = window.innerWidth;
      setMoveUp((prev) => (prev = -20));
    } else {
      setMoveUp((prev) => (prev = 50));
    }
  }, [isLoaded, isInView2, moveUp]);

  useEffect(() => {
    if (isLoaded && isInView2) {
      let newOpChange = new Array(5).fill(0);
      newOpChange = [...opChange];

      const interval = setInterval(() => {
        if (newOpChange[left] < 1) {
          setOpChange((prev) => {
            const updatedOpChange = [...prev];
            if (updatedOpChange[left] < 1) {
              updatedOpChange[left] = updatedOpChange[left] + 0.1; // Update left opacity
              return updatedOpChange;
            }
          });
        } else {
          if (left < 17) {
            setLeft((prev) => prev + 1);
          } else {
            clearInterval(interval);
          }
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isLoaded, isInView2, left, opChange]);

  return (
    <section id="skills" className="min-h-screen">
      <div
        className="w-full flex flex-col  items-center justify-center"
        style={{
          fontFamily: `Orbitron, sans-serif`,
          transition: `transform 1s ease-in-out`,
          transform: `translateY(${moveUp}%)`,
        }}
      >
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center px-20 mx-10">
          {/* Skill Items */}
          <span
            className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold duration-100 ease-in-out"
            style={{
              opacity: opChange[0],
            }}
          >
            HTML
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[1] * 10
                            } `}
          >
            CSS
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[2] * 10
                            } `}
          >
            TAILWIND CSS
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[3] * 10
                            } `}
          >
            ANGULAR
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[4] * 10
                            } `}
          >
            REACT
          </span>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center px-20 mx-10">
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[5] * 10
                            } `}
          >
            TYPESCRIPT
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[6] * 10
                            } `}
          >
            JAVASCRIPT
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[7] * 10
                            } `}
          >
            PYTHON
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[8] * 10
                            } `}
          >
            JAVA
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[9] * 10
                            } `}
          >
            SPRINGBOOT
          </span>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center px-20 mx-10">
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[10] * 10
                            } `}
          >
            GIT
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[11] * 10
                            } `}
          >
            FORK
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[12] * 10
                            } `}
          >
            POSTGRESQL
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[13] * 10
                            } `}
          >
            NODE.JS
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[14] * 10
                            } `}
          >
            MONGODB
          </span>
          <span
            className={`box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold
                            duration-100 ease-in-out opacity-${
                              opChange[15] * 10
                            } `}
          >
            MYSQL
          </span>
        </div>
      </div>
    </section>
  );
};
