import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./assets/components/LoadingScreen";
import { Navbar } from "./assets/components/sections/Navbar";
import { MobileMenu } from "./assets/components/sections/MobileMenu";
import { Home } from "./assets/components/sections/Home";
import { About } from "./assets/components/sections/About";
import { Skills } from "./assets/components/sections/Skills";
import { Contacts } from "./assets/components/sections/Contacts";
import { Projects } from "./assets/components/sections/Projects";
import { useScroll, motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionInView, setSectionInView] = useState({
    about: false,
    projects: false,
    skills: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const checkInView = (id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > window.innerHeight;
      };

      setSectionInView({
        about: checkInView("about"),
        projects: checkInView("projects"),
        skills: checkInView("skills"),
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      {!isLoaded && <LoadingScreen onComlete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"} 
          bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About isInView={sectionInView.about} isLoaded={isLoaded} />
        <Projects isInView3={sectionInView.projects} isLoaded={isLoaded} />
        <Skills isInView2={sectionInView.skills} isLoaded={isLoaded} />
        <Contacts />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </>
  );
}

export default App;
