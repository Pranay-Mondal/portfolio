import React from "react";
import "./SkillInfoCard.css"

const SkillInfoCard=({heding,skills})=>{
    return(
        <div className="skill-Info-Card">
            <h5>{heding}</h5>
            <div className="skill-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                    <div className="skill-info">
                        <p>{item.skill}</p>
                        <p className="persntg">{item.persntg}</p>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress" style={{width: item.persntg}}></div>
                    </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
export default SkillInfoCard;