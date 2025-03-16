export const Contacts = () =>{
    return (
        <section id = "contacts" className = "min-h-screen flex flex-col ">

            
                <h2 className = " text-4xl text-center bg-gradient-to-r from-blue-800 to-gray-50 bg-clip-text text-transparent font-bold flex justify-center items-center mb-10">
                    <span>CONTACT ME</span>
                </h2>
                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                    <div className="flex flex-col justify-center items-center w-full m-10 space-y-3">
                            <input 
                                type="text"
                                placeholder="Your Name"
                                className="w-150 p-3 rounded-md bg-gradient-to-r from-blue-950 to-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input 
                                type="email"
                                placeholder="Your Email"
                                className="w-150 p-3 rounded-md bg-gradient-to-r from-blue-950 to-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <textarea 
                                placeholder="Your Message"
                                className="w-150 h-32 p-3 rounded-md bg-gradient-to-r from-blue-950 to-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            ></textarea>

                            <button 
                                className="w-full sm:w-40 h-12 text-md box-border rounded-md bg-gradient-to-b from-blue-500 to-gray-50
                                hover:bg-gradient-to-b hover:from-black hover:to-black transition-all duration-500 ease-in-out 
                                hover:border-2 hover:border-amber-100 m-3 cursor-pointer"
                            > 
                                <span className="text-blue-950 font-mono font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent">
                                    Send Message
                                </span>
                            </button>
                    </div>
                    <div className = "flex flex-col justify-center items-center w-full m-10">
                            <p className = "text-xl text-gray-400 mb-15">WARNER ROBINS, GA 31005</p>
                            
                            <p className = "text-xl text-gray-400 mb-15">(229)848-4272</p>
                                
                            <p className = "text-xl text-gray-400 mb-15">TIMPHAMVN33@GMAIL.COM</p>
                    </div>
                </div>
           
        
        </section>)
} 