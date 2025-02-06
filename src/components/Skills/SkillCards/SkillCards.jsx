import React,{useState, useContext} from "react";
import  {MouseContext}  from "../../MouseContext/MouseContext"
import "./SkillCards.css"

const SkillCards=({title,icon,isActive,onClick})=>{
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
            
    return (
        <div onMouseEnter={handleMouseEnterr} onMouseLeave={handleMouseLeave}
        onClick={onClick}
            className={`skill-cards ${isActive ? "active" : ""}`} >
                <div className="skill-icon">
                    <img src={icon} alt={title} />
                </div>
                <span>{title}</span>
        </div>
    )
}

export default SkillCards