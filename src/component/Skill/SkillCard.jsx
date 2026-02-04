import React from 'react'
import "./Skill.css";
function SkillCard({skill,index}) {
    return (
        <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
        </div>
    )
}

export default SkillCard
