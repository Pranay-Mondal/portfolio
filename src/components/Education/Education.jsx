import React,{useState, useContext} from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import './Education.css'

const Education=()=>{
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
        <section className="educationContainer" id="Education">
            <h2 className="autoShow" >My <span>Education</span></h2>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            2022
                        </div>
                        <div className="timeline-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <h3>High School</h3>
                            <p>Graduated from <span>Jiaganj Raja Bijoy Singh Vidyamandir</span> in <span>2022</span>. During this time, I developed a strong interest in <span>computer science</span> and <span>problem-solving</span>, which inspired me to dive deeper into programming and web development.</p>
                        </div>
                    
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            2025
                        </div>
                        <div className="timeline-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <h3>College</h3>
                            <p>I am currently pursuing my <span>Bachelor of Computer Applications (BCA)</span> at <span>Gour Mahavidyalaya College</span>. My journey in college has  
        allowed me to enhance my programming skills, work on real-world projects,  
        and explore areas like <span>web development, problem-solving, and software engineering</span>.</p>
                        </div>
                    
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            2027
                        </div>
                        <div className="timeline-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <h3>Univercity</h3>
                            <p>I aspire to pursue my <span>Master of Computer Applications (MCA)</span> after completing my BCA. Currently, I am preparing for <span>JECA 2024</span>, aiming to get into a reputed university where I can further enhance my skills in <span>software development, AI, and advanced computing</span>. My goal is to continuously grow as a <span>developer and problem solver</span> while contributing to innovative tech solutions.</p>
                        
                    </div>
                </div>
                {/* <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            2027
                        </div>
                        <div className="timeline-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <h3>Internship</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, magni aut minus nemo reiciendis tenetur architecto quam delectus!</p>
                        </div>
                    
                </div> */}
            </div>
        </section>
    )
}
export default Education
