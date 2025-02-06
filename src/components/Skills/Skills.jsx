import React,{useState, useContext} from "react";
import  {MouseContext}  from "../MouseContext/MouseContext"
import "./Skills.css"
import SkillCards from "./SkillCards/SkillCards";
import { SKILLS } from "../../utils/data";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";

const Skills=()=>{
    const { increaseSize, resetSize, changeColor, resetColor } = useContext(MouseContext);
            const handleMouseEnter = () => {
                increaseSize(); 
                changeColor('rgba(0, 157, 255, 0.4)'); // Change the circle color
            };
            const handleMouseLeave = () => {
                resetSize();
                resetColor(); // Reset the circle color
            };
    const [selected, setSelected] = useState(SKILLS[0]);
    const handleClick = (data) => {
        setSelected(data);
    }
    return (
        <section className="skillContainer" id="Skills">
            <h2 className="autoShowY">My <span>Skills</span></h2>
                <div className="skillContent">
                    <div className="skills">
                         {SKILLS.map((item) => (
                            <SkillCards
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            isActive={selected.title === item.title}
                            onClick={() => handleClick(item)}
                            />
                         ))}
                    </div>
                    <div className="skillInfo">
                         <SkillInfoCard
                            heding={selected.title}
                            skills={selected.skills}
                        />
                    </div>
                </div>
        </section>
    )
}
export default Skills;

{/* <div className="autoShowX"><img src="./assets/images/cssw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/htmlw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/javascriptw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/tailwindw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/reactw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/nodew.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/sqlw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/cw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/gitw.png" alt="" /></div>
                        <div className="autoShowX"><img src="./assets/images/githubw.png" alt="" /></div> */}
