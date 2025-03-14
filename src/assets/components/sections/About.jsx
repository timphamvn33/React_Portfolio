import {useState, useEffect} from "react"
export const About = ({isLoaded, isInView}) => {

    const [transPositionLeft, setTransPositionLeft] = useState(0);
    const [transPositionRight, setTransPositionRight ] = useState(0);

    useEffect( () =>{
        if(isLoaded && isInView ) {
            const small = window.innerWidth <= 599;
            console.log("window.innerWidth: ", window.innerWidth)
            const medium = 600 < window.innerWidth <= 1199;
            const large = window.innerWidth > 1200;

            if(small) {
                console.log("hello small");
                setTransPositionRight((prev) => (prev < 10 ? prev + 10 : prev)); // Update position right
                setTransPositionLeft((prev) => (prev > -10 ? prev -10: prev)); // Update position left

            } 
            else if (large) {
                console.log("hello large");
                setTransPositionRight((prev) => (prev < 200 ? prev + 200 : prev)); // Update position right
                setTransPositionLeft((prev) => (prev > -200 ? prev - 200: prev)); // Update position left

            } else {
                console.log("hello medium");
                setTransPositionRight((prev) => (prev < 50 ? prev + 50 : prev)); // Update position right
                setTransPositionLeft((prev) => (prev > -50 ? prev -50: prev)); // Update position left

            }

        }
    }, [isLoaded, isInView, transPositionRight]);

    useEffect(() => {
        console.log("transPositionRight: ", transPositionRight);
    })
    
    return(
        <section id ="about">
            <div className = "min-h-screen">
                <div className = "grid grid-cols-2  justify-center relative w-full h-full">
                <div className = "w-full h-full text-xl flex justify-center">
                    <div className=" sm:w-full md:w-200 lg:w-100 mx-5 relative mb-10 lg:mb-20"
                            style={{
                            fontFamily: `Orbitron, sans-serif`,
                            transition: "transform 2s ease-in-out",
                            transform: `translateX(${transPositionRight}px)`}}
                            > 
                        <h2 className = "text-lg md:text-2xl lg:text-3xl font-bold mb-5 mx-5 text-gray-300 text-left">Software Engineer Air Force Materiel Command</h2>
                        <ul className = " font-mono text-sm md:text-lg lg:text-xl mx-5 p-0 list-inside flex flex-wrap text-left">
                            <li className = "mb-2 text-gray-400">
                                Enhanced Audit Dashboard Performance that successfully reduces the response loading time from 3 minutes to 15 seconds.
                            </li >
                            <li className = "mb-2  text-gray-400">
                                Refactored API code to enhance organization and maintainability across multiple enclave levels in a federated environment.  
                            </li>
                            <li className = "mb-2  text-gray-400">
                                Optimized data query and functions in the back end that significantly contributed to a 40% boost in Training Records’ interface responsiveness.
                            </li>
                        </ul>
                        <p className = " text-sm md:text-lg lg:text-xl mx-5 font-semibold  bg-gradient-to-r from-blue-500 to-gray-50 bg-clip-text text-transparent tracking-wider text-left"
                            style={{ 
                                fontFamily: `Orbitron, sans-serif`,
                               }}
                                >
                            Angular  Java  JavaScript  PostgreSQL  Spring Boot  TypeScript.</p>
                    </div>
                </div>
                <div className = "w-full h-full text-xl text-gray-300 flex justify-center">
                    <div className="w-100 mb-10 lg:mb-20 relative  mx-5"
                                    style={{ 
                                        fontFamily: `Orbitron, sans-serif`,
                                        transition: "transform 2s ease-in-out",
                                        transform: `translateX(${transPositionLeft}px)`}}
                                        >
                        <h1 className = "text-sm md:text-lg lg:text-xl text-gray-400 tracking-wider m-4 p-4 text-center">Warner Robins, GA 2022 – Present</h1>
                    </div>

                </div>

                <div className = "w-full h-full text-xl flex justify-center">
                    <div className="w-100 mx-5 relative mb-10 lg:mb-20"
                            style={{ 
                            fontFamily: `Orbitron, sans-serif`,
                            transition: "transform 2s ease-in-out",
                            transform: `translateX(${transPositionRight}px)`}}
                            > 
                    
                        <h2 className = "text-xl md:text-2xl lg:text-3xl font-bold mb-5 mx-5 text-left text-gray-300 ">Computer Science Tutor - Valdosta State University</h2>
                        <ul className = "font-mono text-sm md:text-lg lg:text-xl mx-5 p-0 list-inside flex flex-wrap text-left">
                            <li className = "mb-2 text-gray-400">
                                Mentored and supported CS students in programming languages, data structure, operating systems, and algorithms. 
                            </li >
                            <li className = "mb-2 text-gray-400">
                                Delivered detailed explanations and assistance, helping students succeed in quizzes and exams. 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "w-full h-full text-xl text-amber-50 flex justify-center">
                    <div className="w-100 mb-10 lg:mb-20 relative mx-5"
                                    style={{ 
                                        fontFamily: `Orbitron, sans-serif`,
                                        transition: "transform 2s ease-in-out",
                                        transform: `translateX(${transPositionLeft}px)`}}
                                        >
                            <h1 className = "text-sm md:text-lg lg:text-xl text-gray-400 tracking-wider m-4 p-4 text-left">Valdosta, GA 2022 – May 2022</h1>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>

    )
}