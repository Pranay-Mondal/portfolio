import React,{useState, useContext} from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import "./About.css"

const About=()=>{
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
        const handleMouseEnter = () => {
            increaseSize(); 
            changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
        };
        const handleMouseLeave = () => {
            resetSize();
            resetColor(); // Reset the circle color
        };
    return (
        <section className="aboutContainer" id="About">
            <h2 >About <span className="me">me</span></h2>
            <div className="aboutImg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className="me" src="./portfolio/assets/images/me2.png" alt="" />
                <span className="circul"></span>
            </div>
            <div className="aboutContent">
                <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Web Developer!</h3>
                <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hi, I’m Pranay! I’m a passionate web developer and problem solver with a deep interest in creating seamless, visually stunning digital experiences. Currently, I’m pursuing a Bachelor’s in Computer Applications (BCA) at Malda Gour Mahavidyalaya College, where I’ve developed a strong foundation in computer science and programming.</p>
                <a href="#Contact"><button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="readtBtn">Contact Me</button></a>
            </div>
        </section>
    )
}

export default About