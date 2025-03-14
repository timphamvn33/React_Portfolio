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
                <div className = "w-full sm:mb-0 md:mb-2 lg:mb-5 flex items-center justify-center">
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">HTML</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">CSS</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">TAILWIND CSS</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">ANGULAR</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">REACT</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">TYPESCRIPT</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">JAVASCRIPT</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">PYTHON</span>
                </div>
                 <div className = "w-full sm:mb-0 md:mb-2 lg:mb5 flex items-center justify-center"
                    >
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">JAVA</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">SPRINGBOOT</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">GIT</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">FORK</span>
                </div>
                <div className = "w-full sm:mb-0 md:mb-2 lg:mb5 flex items-center justify-center">
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">POSTGRESQL</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">NODE.JS</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">MONGODB</span>
                    <span className = "box-border border-2 border-gray-900 rounded-b-md sm:px-0 md:px2 lg:px4 py-2 flex text-gray-400 sm:text-sm md:text-lg lg:text-2xl   text-center items-center justify-center  bg-gradient-to-r from-gray-900 to-blue-900 m-5 font-bold">MYSQL</span>
                </div>
            </div>

        </section>
    )
}