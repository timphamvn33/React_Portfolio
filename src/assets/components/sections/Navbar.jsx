import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
       document.body.style.overflow = menuOpen? "hidden": "";
    }, [menuOpen]);

    return  (<nav className ="fixed top-o w-full z-40 bg-[rgba(10, 10, 10, 0.8) backdrop-blur-lg border-b border-white/10 shadow-lg]">

        <div className = "max-w-5xl mx-auto px-4" >
            <div className = "flex justify-between items-center h-16"
                style = {{fontFamily: `Orbitron, sans-serif`,}}>
                <a href= "#home" className = "font-mono tex-xl font-bold text-white text-xl md:text-3xl lg:text-4xl"
                    style = {{fontFamily: `Orbitron, sans-serif`}}>
                    {" "}
                    {"{ "}Tim <span className= "text-blue-500">.Pham{" }"}</span>{" "}
                </a>

                <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;

                </div>

                <div className ="hidden md:flex items-center space-x-8">
                    {/* <a href="#home" className="text-gray-300 hove:text-white transition-colors text-lg md:text-xl lg:text-2xl">
                        {" "}
                        HOME{" "}
                    </a> */}

                    <a href="/resume_pham.docx" download className="text-gray-300 hove:text-white transition-colors text-lg md:text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-300 hover:bg-clip-text hover:text-transparent hover:font-bold">
                        {" "}
                        RESUME{" "}
                    </a>
              
                    <a href="#about" className="text-gray-300 hove:text-white transition-colors text-lg md:text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-300 hover:bg-clip-text hover:text-transparent hover:font-bold">
                        {" "}
                        EXPERIENCE{" "}
                    </a>
               
                    <a href="#contacts" className="text-gray-300 hove:text-white transition-colors text-lg md:text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-300 hover:bg-clip-text hover:text-transparent hover:font-bold">
                        {" "}
                        CONTACTS{" "}
                    </a>
                </div>

            </div>
        </div>

    </nav> )

}