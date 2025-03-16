import { useState, useEffect } from "react"
export const Skills = ({isLoaded, isInView2}) => {
    const [moveUp, setMoveUp] = useState(50);
    useEffect(() => {
        if(isLoaded && isInView2) {
            const rect = window.innerWidth;
            setMoveUp((prev) => prev= -20);
        } else {
            setMoveUp((prev) => prev= 50);
        }
    }, [isLoaded, isInView2, moveUp])

    return(
        <section id = "skills" className = "min-h-screen">
            <div className ="w-full flex flex-col  items-center justify-center"
                              style={{
                                fontFamily: `Orbitron, sans-serif`,
                                transition: `transform 1s ease-in-out`,
                                transform: `translateY(${moveUp}%)`}}>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center px-20 mx-10">
          {/* Skill Items */}
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            HTML
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            CSS
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            TAILWIND CSS
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            ANGULAR
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            REACT
          </span>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center px-20 mx-10">
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            TYPESCRIPT
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            JAVASCRIPT
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            PYTHON
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            JAVA
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            SPRINGBOOT
          </span>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-center px-20 mx-10">
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            GIT
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            FORK
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            POSTGRESQL
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            NODE.JS
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            MONGODB
          </span>
          <span className="box-border border-2 border-gray-900 rounded-b-md px-4 py-2 text-gray-400 text-sm sm:text-sm md:text-lg lg:text-2xl text-center bg-gradient-to-r from-gray-900 to-blue-900 font-bold">
            MYSQL
          </span>
        </div>
            </div>

        </section>
    )
}