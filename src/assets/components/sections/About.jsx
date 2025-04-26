import { useState, useEffect } from "react";
export const About = ({ isLoaded, isInView }) => {
  const [transPositionLeft, setTransPositionLeft] = useState(0);
  const [transPositionRight, setTransPositionRight] = useState(0);

  useEffect(() => {
    if (isLoaded && isInView) {
      const small = window.innerWidth <= 599;
      const large = window.innerWidth > 1200;

      if (small) {
        setTransPositionRight((prev) => (prev < 10 ? prev + 10 : prev)); //Update position right
        setTransPositionLeft((prev) => (prev > -10 ? prev - 10 : prev)); // Update position left
      } else if (large) {
        setTransPositionRight((prev) => (prev < 200 ? prev + 200 : prev)); // Update position right
        setTransPositionLeft((prev) => (prev > -200 ? prev - 200 : prev)); // Update position left
      } else {
        setTransPositionRight((prev) => (prev < 30 ? prev + 30 : prev)); // Update position right
        setTransPositionLeft((prev) => (prev > -30 ? prev - 30 : prev)); // Update position left
      }
    } else {
      setTransPositionLeft(0);
      setTransPositionRight(0);
    }
  }, [isLoaded, isInView, transPositionRight, transPositionLeft]);

  return (
    <section id="about">
      <div className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center relative w-full h-ful">
          <div
            className="flex justify-center w-full"
            style={{
              fontFamily: `Orbitron, sans-serif`,
              transition: "transform 1s ease-in-out",
              transform: `translateX(${transPositionRight}px)`,
            }}
          >
            <div className=" sm:w-full md:w-200 lg:w-100 mx-5 relative mb-10 lg:mb-20">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-5 mx-5 bg-gradient-to-r from-blue-500 to-gray-50 bg-clip-text text-transparent text-left">
                Software Engineer Air Force Materiel Command
              </h2>
              <ul className=" font-mono text-sm md:text-lg lg:text-xl mx-5 p-0 list-inside flex flex-wrap text-left">
                <li className="mb-2 text-gray-400">
                  Enhanced Audit Dashboard Performance that successfully reduces
                  the response loading time from 3 minutes to 15 seconds.
                </li>
                <li className="mb-2  text-gray-400">
                  Refactored API code to enhance organization and
                  maintainability across multiple enclave levels in a federated
                  environment.
                </li>
                <li className="mb-2  text-gray-400">
                  Optimized data query and functions in the back end that
                  significantly contributed to a 40% boost in Training Records’
                  interface responsiveness.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div
              className="w-100 mb-10 lg:mb-20 relative  mx-5 flex justify-center"
              style={{
                fontFamily: `Orbitron, sans-serif`,
                transition: "transform 1s ease-in-out",
                transform: `translateX(${transPositionLeft}px)`,
              }}
            >
              <h1 className="text-sm md:text-lg lg:text-xl text-gray-400 tracking-wider m-4 p-0 md:p-4 lg:p-4 text-center ">
                Warner Robins, GA 2022 – Present
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center relative w-full h-full ">
          <div
            className="flex justify-center w-full"
            style={{
              fontFamily: `Orbitron, sans-serif`,
              transition: "transform 1s ease-in-out",
              transform: `translateX(${transPositionRight}px)`,
            }}
          >
            <div className=" sm:w-full md:w-200 lg:w-100 mx-5 relative mb-10 lg:mb-20 ">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-5 mx-5 bg-gradient-to-r from-blue-500 to-gray-50 bg-clip-text text-transparent text-left">
                Computer Science Tutor
              </h2>
              <ul className=" font-mono text-sm md:text-lg lg:text-xl mx-5 p-0 list-inside flex flex-wrap text-left">
                <li className="mb-2 text-gray-400">
                  Mentored and supported CS students in programming languages,
                  data structure, operating systems, and algorithms.
                </li>
                <li className="mb-2 text-gray-400">
                  Delivered detailed explanations and assistance, helping
                  students succeed in quizzes and exams.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div
              className="w-100 mb-10 lg:mb-20 relative  mx-5 flex justify-center"
              style={{
                fontFamily: `Orbitron, sans-serif`,
                transition: "transform 1s ease-in-out",
                transform: `translateX(${transPositionLeft}px)`,
              }}
            >
              <h1 className="text-sm md:text-lg lg:text-xl text-gray-400 tracking-wider m-4 p-0 md:p-4 lg:p-4 text-center">
                Valdosta, GA 2022 – May 2022
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
