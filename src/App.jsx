import { useState, useEffect } from 'react'
import './App.css'
import { LoadingScreen } from './assets/components/LoadingScreen'
import "./index.css"
import { Navbar } from './assets/components/sections/Navbar'
import {MobileMenu} from './assets/components/sections/MobileMenu'
import {Home} from  './assets/components/sections/Home'
import { About } from './assets/components/sections/About'
import { Skills } from './assets/components/sections/Skills'
function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isInView2, setIsInView2] = useState(false);

  const handleScroll = (() => {
    const section = document.getElementById("about");
    if(section) {
      const rect = section.getBoundingClientRect();
      if(rect.top <= window.innerHeight && rect.bottom >= 0){
        setIsInView(true);
   
      } else {
        setIsInView(false);
       
      }
    }
  
  })

  const handleScroll2 = (() =>{
    const sectionSkill = document.getElementById("skills");

    if(sectionSkill) {
      const rect = sectionSkill.getBoundingClientRect();
      if(rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView2(true);
      } else {
        setIsInView2(false);
      }
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll2);
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  // useEffect(()=> {
  //   console.log("isInView 4: ",isInView )
  // }, [isInView])

  return (
    <>
      {!isLoaded && <LoadingScreen onComlete={() => setIsLoaded(true)}/>}
        <div className = {`min-h-screen transition-opacity duration-700 
          ${isLoaded? "opacity-100": "opacity-0"} 
          bg-black text-gray-100` }>
            <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
            <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
            <Home isLoaded = {isLoaded}/>
            <About isInView={isInView} isLoaded={isLoaded} />
            <Skills isInView2={isInView2} isLoaded={isLoaded} />

        </div>
        
    </>
  )
}

export default App