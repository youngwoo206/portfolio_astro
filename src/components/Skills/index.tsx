import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      name: "TypeScript",
      color: "red",
    },
    {
      name: "HTML & CSS",
      color: "red",
    },
    {
      name: "React",
      color: "yellow",
    },
    {
      name: "Next.js",
      color: "yellow",
    },
    {
      name: "Astro.js",
      color: "yellow",
    },
    {
      name: "Tailwind CSS",
      color: "yellow",
    },
    {
      name: "Python",
      color: "red",
    },
    {
      name: "Java",
      color: "red",
    },
    {
      name: "Flask",
      color: "aqua",
    },
    {
      name: "Node.js",
      color: "aqua",
    },
    {
      name: "AWS",
      color: "orange",
    },
    {
      name: "PostgreSQL",
      color: "aqua",
    },
    {
      name: "MySQL",
      color: "aqua",
    },
  ];

  const doubledSkills = skills;

  skills.forEach((el) => {
    doubledSkills.push(el);
  });

  console.log(doubledSkills);

  const skillsEls = doubledSkills.map((skill) => (
    <div className="skill-pill">
      <div className="dot" style={{ backgroundColor: `${skill.color}` }} />
      {skill.name}
    </div>
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
