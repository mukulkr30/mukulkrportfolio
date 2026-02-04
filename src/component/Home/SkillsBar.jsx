import "./SkillsBar.css";

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Machine Learning",
  "OpenCV",
  "MySQL",
  "Git & GitHub",
];

const SkillsBar = ({ speed = 20 }) => {
  return (
    <div className="skills-container">
      <div
        className="skills-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div className="skill-pill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBar;
