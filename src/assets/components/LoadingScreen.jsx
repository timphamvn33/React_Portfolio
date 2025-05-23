import {useEffect, useState} from 'react'; 
export const LoadingScreen = ({onComlete}) => {
    const [text, setText] = useState("");
    const fullText = "<Welcome to My Portfolio />";

    useEffect ( () => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComlete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComlete]);

    
        return ( 
            <>
            <div className = "fixed inset-0 z-50 text-gray-100 flex flex-col items-center justify-center">   
                <div className ="mb-4 sm:text-lg md:text-xl lg:text-2xl font-mono font-bold"
                style = {{fontFamily: `Orbitron, sans-serif`}}>
                    {text} <span className ="animate-blink ml-1"> | </span>
                </div>

                <div className = "w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                    <div className = "w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6 animate-loading-bar">
                        {" "}
                    </div>
                </div>

            </div> 
            </>)
    
}