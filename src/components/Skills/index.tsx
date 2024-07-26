import "./Skills.css";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    {
      name: "TypeScript",
      color: "red",
      ref: "adaEX",
    },
    {
      name: "HTML & CSS",
      color: "red",
      ref: "adaEX",
    },
    {
      name: "React",
      color: "yellow",
      ref: "juniorAiEX",
    },
    {
      name: "Next.js",
      color: "yellow",
      ref: "projects",
    },
    {
      name: "Astro.js",
      color: "yellow",
      ref: "adaEX",
    },
    {
      name: "Tailwind CSS",
      color: "yellow",
      ref: "adaEX",
    },
    {
      name: "Python",
      color: "red",
      ref: "juniorAiEX",
    },
    {
      name: "Java",
      color: "red",
      ref: "projects",
    },
    {
      name: "Flask",
      color: "aqua",
      ref: "saigeEX",
    },
    {
      name: "Node.js",
      color: "aqua",
      ref: "projects",
    },
    {
      name: "AWS",
      color: "orange",
      ref: "juniorAiEX",
    },
    {
      name: "PostgreSQL",
      color: "aqua",
      ref: "juniorAiEX",
    },
    {
      name: "MySQL",
      color: "aqua",
      ref: "saigeEX",
    },
  ];

  const doubledSkills = skills;

  skills.forEach((el) => {
    doubledSkills.push(el);
  });

  const skillsEls = doubledSkills.map((skill) => (
    <Skill key={skill.name} skill={skill} />
  ));

  return (
    <div className="skills-body">
      <p style={{ fontSize: "2.5rem" }}>My Skills</p>
      <div className="scroller">
        <div className="scroller-inner">{skillsEls}</div>
      </div>
      <div className="legend">
        <p className="legend-item">
          <span>
            <div className="dot" style={{ backgroundColor: "red" }} />
          </span>
          Languange
        </p>
        <p className="legend-item">
          <span>
            <div className="dot" style={{ backgroundColor: "yellow" }} />
          </span>
          Front-End
        </p>
        <p className="legend-item">
          <span>
            <div className="dot" style={{ backgroundColor: "aqua" }} />
          </span>
          Back-End
        </p>
        <p className="legend-item">
          <span>
            <div className="dot" style={{ backgroundColor: "orange" }} />
          </span>
          Cloud
        </p>
      </div>
    </div>
  );
}
