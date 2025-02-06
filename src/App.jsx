import React, {useEffect, useRef} from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Education from "./components/Education/Education"
import Portfolio from "./components/Portfolio/Portfolio"
import ContactMe from "./components/ContactMe/ContactMe"
import Footer from "./components/Footer/Footer"
import MouseCircle from "./components/MousEfects/MousEfacts";
import { MouseProvider } from "./components/MouseContext/MouseContext";

function App() {
  return (
    <> 
    <MouseProvider>
    <MouseCircle />
      <Navbar/>
      <div className="container">
        <Hero/>
        <About/>
        <Skills/>
        <Education/>
        <Portfolio/>
        <ContactMe/>
        <Footer/>
      </div>
      </MouseProvider>
    </>
  );
}

export default App;
