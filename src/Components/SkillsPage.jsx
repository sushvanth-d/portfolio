import SkillsDetails from "./SkillsDetails";
import "./SkillsPage.css";

function SkillsPage() {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-content">
        <div className="skills-head">
          <h3>&lt;/&gt; Skills</h3>
        </div>
        <div className="skills-info">
          {SkillsDetails.map((skill, index) => (
            <div key={index} className="skill-tab">
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
