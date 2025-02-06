import React,{useState, useContext} from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import  {MouseContext}  from "../MouseContext/MouseContext"

import './Hero.css'

const Hero=()=>{     
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
    const handleMouseEnter = () => {
        increaseSize(); 
        changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
    };
    const handleMouseEnterr = () => {
        increaseSize(); 
        changeColor('rgba(7, 76, 118, 0.4)'); // Change the circle color
    };
    const handleMouseLeave = () => {
        resetSize();
        resetColor(); // Reset the circle color
    };
    const [text]=useTypewriter({
        words:["Software Developer","Problme Solver"],
        loop:{},
        typeSpeed: 70,   // Adjusted for a smoother effect
        deleteSpeed: 50, // Adjusted for a smoother effect
        delaySpeed: 1000
    });
    console.log(text)
    return(
        <section className="heroContainer" id="Home">
            <div className="heroContent">
                <h2 >Hi, it's Pranay</h2>
                <h3 >And I'm a<br></br> <span>{text}<Cursor cursorBlinking={false}/></span></h3>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Semless and Visually Stunning Web Solution
                </p>
                <div className="socialMesia">
                    <a className="x" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href=""><img src="../portfolio/assets/images/twitter11.svg" alt="" /></a>
                    <a className="insta" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://www.instagram.com/pranay_ml_55/" target="_blank"><img src="../portfolio/assets/images/instagram1.svg" alt="" /></a>
                    <a className="linked" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://www.linkedin.com/in/pranay-mondal-70762b2b3/" target="_blank"><img src="../portfolio/assets/images/linkedin1.svg" alt="" /></a>
                    <a className="leetc" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://leetcode.com/u/pranayml0912/" target="_blank"><img src="../portfolio/assets/images/leetcode1.svg" alt="" /></a>
                </div>
                <button className="CVBtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Download CV <img src="../assets/images/dwnldiconwhite.png" alt="" /></button>
            </div>
            <div className="heroImg" onMouseEnter={handleMouseEnterr} onMouseLeave={handleMouseLeave}>
                <img className="me" src="/portfolio/assets/images/me0055.png" alt="my image" />
            </div>
        </section>
    )
}

export default Hero