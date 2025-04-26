import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./assets/components/LoadingScreen";
import "./index.css";
import { Navbar } from "./assets/components/sections/Navbar";
import { MobileMenu } from "./assets/components/sections/MobileMenu";
import { Home } from "./assets/components/sections/Home";
import { About } from "./assets/components/sections/About";
import { Skills } from "./assets/components/sections/Skills";
import { Contacts } from "./assets/components/sections/Contacts";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView1, setIsInView1] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);

  const handleScroll = () => {
    const section = document.getElementById("about");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > window.innerHeight) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  const handleScroll2 = () => {
    const sectionSkill = document.getElementById("skills");

    if (sectionSkill) {
      const rect = sectionSkill.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > window.innerHeight) {
        setIsInView2(true);
      } else {
        setIsInView2(false);
      }
    }
  };

  const handleScroll1 = () => {
    const sectHome = document.getElementById("home");
    if (sectHome) {
      const rect = sectHome.getBoundingClientRect();
      setIsInView1(
        rect.top < window.innerHeight && rect.bottom >= window.innerHeight
      );
    }
  };

  useEffect(() => {
    console.log("home in");
    handleScroll1();
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Home
          isLoaded={isLoaded}
          isInView1={isInView1}
          textOpacity={textOpacity}
          setTextOpacity={setTextOpacity}
        />
        <About isInView={isInView} isLoaded={isLoaded} />
        <Skills isInView2={isInView2} isLoaded={isLoaded} />
        <Contacts />
      </div>
    </>
  );
}

export default App;
