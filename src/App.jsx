import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './assets/components/LoadingScreen'
import "./index.css"
import { Navbar } from './assets/components/sections/Navbar'
import {MobileMenu} from './assets/components/sections/MobileMenu'
import {Home} from  './assets/components/sections/Home'

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComlete={() => setIsLoaded(true)}/>}
        <div className = {`min-h-screen transition-opacity duration-700 
          ${isLoaded? "opacity-100": "opacity-0"} 
          bg-black text-gray-100` }>
            <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
            <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
            <Home isLoaded = {isLoaded}/>

        </div>
        
    </>
  )
}

export default App
