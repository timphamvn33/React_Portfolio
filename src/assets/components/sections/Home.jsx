import { useState, useEffect } from "react"
export const Home = ({isLoaded, isInView1}) => {

    
    const [textOpacity, setTextOpacity] = useState(0);

    // This effect manages opacity when the content comes into view or out of view
    useEffect(() => {
        if(isInView1 && isLoaded) {
            const opChange = textOpacity;
            // Gradually increase opacity when the element is in view
            const interval = setInterval(() => {
                console.log("hello change start ")
                if(opChange < 1) {
                    console.log("hello change ")
                    setTextOpacity((prev) => {
                        if(prev < 1){ 
                            prev = prev + 0.1;
                            console.log("hello change 123")
                            return prev;
                        } 
                    });
                } else {
                    clearInterval(interval);
                }
                    
                    
            }, 100);

                return () => clearInterval(interval);

        } else {
            // Reset opacity to 0 when the element is not in view
            setTextOpacity(0);
        }


    }, [isInView1, textOpacity]);

    useEffect(( )=> {
        console.log("textOpacity: ", textOpacity)
    })

    
    return (
        <section id ="home" 
        className= "min-h-screen flex items-center justify-center relative" >

            <div className = "text-center z-10 px-4">
                <h1 className = {`text-2xl md:text-4xl lg:text-7xl font-bold mb-0 md:mb-2 lg:mb-6 leading-right bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent 
                    transition-opacity duration-1000 ease-in-out
                    opacity-${Math.ceil(textOpacity*10)}, mb-20`}  
                    style = {{fontFamily: `Orbitron, sans-serif`}}>
                    Hi! I'm Thuong (Tim) Pham
                </h1>
                <div className = "text-center z-10 px-4 md:px-0 lg:px-20 ">
                    <p className="text-lg md:text-2xl lg:text-3xl text-justify 
                        transition-opacity duration-1000 ease-in-out opacity-${Math.ceil(textOpacity*10)} text-gray-400
                        font-mono "style ={{lineHeight: `2`,
                        opacity: textOpacity
                        }}>
                        I have three years of experience as a software engineer for Robins AFMC. My role in the team is designing, developing, debugging, and implementing scalable software solutions. 
                        I have always wanted to learn more about the software engineering field. I’m a hard-working, dedicated, and disciplined worker and very passionate about coding.
                    </p>
                </div> 

                <div className={`flex justify-center space-x-10  mt-5 md:mt-10 lg:mt-20 transition-opacity duration-2000 ease-in-out opacity-${Math.ceil(textOpacity*10)}`}>
                    <a href="https://github.com/timphamvn33" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-lg md:text-2xl lg:text-5xl text-gray-400 hover:text-blue-600"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/thuong-pham-14442b221/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-lg md:text-2xl lg:text-5xl text-gray-400 hover:text-blue-600"></i>
                    </a>
                    <a href="mailto:timphamvn33@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope text-lg md:text-2xl lg:text-5xl text-gray-400 hover:text-blue-600"></i>
                    </a>
                </div>
                {/* <div className = {`transition-opacity duration-5000 ease-in-out opacity-${Math.ceil(textOpacity*10)}`}>
                    <button 
                        className = "w-full sm:w-28 h-10 text-sm  md:text-md lg:text-lg box-border rounded-md 
                        bg-gradient-to-b from-blue-500 to-purple-500 
                        hover:bg-gradient-to-b hover:from-black hover:to-black transition-all duration-500 ease 
                        hover:border-2 hover:border-amber-100 m-3 md:mx-10 lg:mx-20 
                        cursor-pointer"> 
                        <span className =" text-white text-sm font-mono font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">button 1</span>
                    </button>
                    <button 
                        className = "w-full sm:w-28 h-10 text-sm  md:text-md lg:text-lg box-border rounded-md 
                        bg-gradient-to-b from-blue-500 to-purple-500 
                        hover:bg-gradient-to-b hover:from-black hover:to-black transition-all duration-500 ease 
                        hover:border-2 hover:border-amber-100 m-3 md:mx-10 lg:mx-20 
                        cursor-pointer "> 
                        <span className =" text-white text-sm font-mono font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">button 1</span>
                    </button>
                </div> */}

            </div>
        </section>

     
    )
}