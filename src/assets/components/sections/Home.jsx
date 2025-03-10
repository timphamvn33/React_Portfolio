import { useState, useEffect } from "react"
export const Home = ({isLoaded}) => {

    const [textOpacity, setTextOpacity] = useState(0.1);

    useEffect(() => {
        
        console.log(" render ....,.");
        if(isLoaded) {

            
            const invterval = setInterval( () => {
                
                setTextOpacity(preText => {
                    
                    if(preText < 1) {
                        
                     
                        preText = preText + 0.1;
                        console.log("preText: ", preText)
                        return preText;
                    } else {
                        clearInterval(invterval);
                        return 1;
                    }
                });
               
            }, 100)
        
            return () => clearInterval(invterval);
        }
        
    }, [isLoaded])
    
    

    return (
        <section id ="home" 
        className= "min-h-screen flex items-center justify-center relative" >

            <div className = "text-center z-10 px-4">
                <h1 className = {`text-5xl md:text-7xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent 
                    transition-opacity duration-2500 ease-in-out
                    opacity-${Math.ceil(textOpacity*10)}`}>
                    Hi! I'm Thuong (Tim) Pham
                </h1>
                <div className = "text-center z-10 px-4 md:px-0 lg:px-80 ">
                    <p className={`text-sm md:text-base lg:text-lg font-mono mb-6 text-justify 
                        transition-opacity duration-5000 ease-in-out opacity-${Math.ceil(textOpacity*10)}`} >
                        I have three years of experience as a software engineer for Robins AFMC. My role in the team is designing, developing, debugging, and implementing scalable software solutions. 
                        I have always wanted to learn more about the software engineering field. I’m a hard-working, dedicated, and disciplined worker and very passionate about coding.
                    </p>
                </div> 
                <div className = {`transition-opacity duration-5000 ease-in-out opacity-${Math.ceil(textOpacity*10)}`}>
                    <button 
                        className = "w-full sm:w-28 h-10 text-sm  md:text-md lg:text-lg box-border rounded-md 
                        bg-gradient-to-b from-blue-500 to-purple-500 
                        hover:bg-gradient-to-b hover:from-black hover:to-black transition-all duration-500 ease 
                        hover:border-2 hover:border-amber-100 m-3 md:mx-10 lg:mx-20 
                        cursor-pointer "> 
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
                </div>




            </div>
        </section>

     
    )
}