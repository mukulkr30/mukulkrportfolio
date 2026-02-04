import React from "react";
import "./Skill.css";

import { skills,core_subject} from "../app/app";
import SkillCard from "./SkillCard";
import CoreCard from "./CoreCard";


export default function Skill() {
  return (
    <section className="skills-section" id="skill">
      <h2 className="skills-title">Technology</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard skill={skill} index={index}/>
        ))}
      </div>
      <h2 className="skills-title">Core Knowledge</h2>
      <div className="skills-grid">
        {core_subject.map((subject, index) => (
          <CoreCard subject={subject} index={index}/>
        ))}
      </div>
    </section>
  );
}
