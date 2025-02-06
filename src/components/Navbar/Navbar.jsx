import React, { useState, useContext } from "react";
import MobileNav from "./MobileNavbar/MobileNavbar";
import  {MouseContext}  from "../MouseContext/MouseContext"
import Lottie from "lottie-react"
import hamburger from "../../Lottie/hamb.json"
import './Navbar.css'

const Navbar=()=>{
    const [menuTogle,setMenuTogle]=useState(false);
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
        const handleMouseEnter = () => {
            increaseSize(); 
            changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
        };
        const handleMouseLeave = () => {
            resetSize();
            resetColor(); // Reset the circle color
        };
    const togleMenu=()=>{
        setMenuTogle(!menuTogle);
    }
    return(
        <>
            <MobileNav isOpen={menuTogle} togleMenu={togleMenu}/>
            <nav className="navWrapper">
                <div className="navContent">
                    <a><img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="logo" src="./assets/images/logo2.png" alt="" /></a>
                    <ul>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Home">Home</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#About">About</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Skills">Skills</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Education">Education</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Portfolio">Portfolio</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Contact">Contact me</a></li>
                        {/* <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="contactBtn">Hire me</button> */}
                    </ul>
                    <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="menuBtn" src="./assets/images/hamburger.svg" 
                    onClick={(e)=>{
                        if(menuTogle){
                            e.target.src="./assets/images/hamburger.svg"
                        }
                        else{
                            e.target.src="./assets/images/crosswhite.png"
                        }
                        togleMenu()
                    }}/>
                </div>
            </nav>
        </>
    )
}
export default Navbar
