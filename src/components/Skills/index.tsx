import "./Skills.css";
import { FaPython, FaHtml5, FaReact, FaAws, FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const skills = [
    "TypeScript",
    "HTML & CSS",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Flask",
    "Django",
    "AWS",
    "PostgreSQL",
    "MySQL",
  ];

  const doubledSkills = skills;

  skills.forEach((el) => {
    doubledSkills.push(el);
  });

  console.log(doubledSkills);

  const skillsEls = doubledSkills.map((skill: string) => (
    <div className="skill-pill">{skill}</div>
  ));

  // const scrollers = document.querySelectorAll(".scroller");

  return (
    <div className="skills-body">
      <p style={{ fontSize: "2.5rem" }}>My Skills</p>
      <div className="scroller">
        <div className="scroller-inner">{skillsEls}</div>
      </div>
    </div>
  );
}
