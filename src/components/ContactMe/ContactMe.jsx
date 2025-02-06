import React,{useState, useContext} from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import './ContactMe.css'

const ContactMe=()=>{
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
        <section className="ContactContainer" id="Contact">
            <h2 className="autoShow">Contact <span>Me</span></h2>
            <div className="Container">
                <div className="info autoShowR">
                    <div className="infoall" >
                        <div className="icon">
                            <img src="../assets/images/phone-call.png" alt="" />
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>8391009499</p>
                        </div>
                    </div>
                    <div className="infoall" >
                        <div className="icon">
                            <img src="../assets/images/email.png" alt="" />
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>pranay83910@gmail.com</p>
                        </div>
                    </div>
                    <div className="infoall" >
                        <div className="icon">
                            <img src="../assets/images/location.png" alt="" />
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Bachamari, West Bengal 732142</p>
                        </div>
                    </div>
                </div>
                <div className="form autoShowL">
                    <form onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h3>Let's work together</h3>
                        <p>Let's create something amazing together. Share your thoughts or inquiries—we're just a message away!</p>
                        <div className="input">
                            <input type="name" placeholder="Name" />
                            <input type="email" placeholder="Email address" />
                            <textarea name="" id="" cols={40} rows={7} placeholder="massege"></textarea>
                            <button className="CVBtn">Send massege</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactMe