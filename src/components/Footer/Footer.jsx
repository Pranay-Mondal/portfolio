import React,{useState, useContext} from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import './Footer.css'

const Footer=()=>{
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
            const handleMouseEnter = () => {
                increaseSize(); 
                changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
        };
        const handleMouseLeave = () => {
            resetSize();
            resetColor(); // Reset the circle color
        };
    return(
        <section className="footerContainer">
            <div className="socials">
                <a href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src="../assets/images/twitter11.svg" alt="" /></a>
                <a href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src="../assets/images/instagram1.svg" alt="" /></a>
                <a href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src="../assets/images/linkedin1.svg" alt="" /></a>
                <a href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src="../assets/images/leetcode1.svg" alt="" /></a>
            </div>
            <div className="menues">
                <ul>
                    <li><a className="menuItemm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Home">Home</a></li>
                    <li><a className="menuItemm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#About">About</a></li>
                    <li><a className="menuItemm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Skills">Skills</a></li>
                    <li><a className="menuItemm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Education">Education</a></li>
                    <li><a className="menuItemm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Portfolio">Portfolio</a></li>
                    <li><a className="menuItemm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Contact">Contact me</a></li>
                </ul>
            </div>
            <div className="copy">
                <p>© 2025 Pranay Mondal | All Rights Reserved.</p>
            </div>
        </section>
    )
}
export default Footer
