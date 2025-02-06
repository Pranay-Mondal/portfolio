import React,{useState, useContext} from "react";
import  {MouseContext}  from "../../MouseContext/MouseContext"
import "./MobileNavbar.css"
const MobileNav=({isOpen,togleMenu})=>{
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
            const handleMouseEnter = () => {
                increaseSize(); 
                changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
            };
            const handleMouseLeave = () => {
                resetSize();
                resetColor(); // Reset the circle color
            };
    //const [openMenu,setOpenMenu]=useState(false)
    return(
        <>
        <div className={`mobileMenu ${isOpen ?"active" : ""}`}>
            <div className="mobMenuContainer">
            <img className="logo" src="../portfolio/assets/images/logo2.png" alt="" />
                <ul>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Home">Home</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#About">About</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Skills">Skills</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Education">Education</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Portfolio">Portfolio</a></li>
                        <li><a className="menuItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#Contact">Contact me</a></li>
                    {/* <button className="contactBtn">Hire me</button> */}
                </ul>
            </div>
        </div>
        </>
    )
}
export default MobileNav