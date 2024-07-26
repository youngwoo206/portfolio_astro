import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface SkillProps {
  skill: {
    name: string;
    color: string;
    ref: string;
  };
}
//test

export default function Skill({ skill }: SkillProps) {
  const handleScroll = (ref: string) => {
    const yOffset = -200;
    const el = document.getElementById(ref);
    if (el) {
      const scrollY =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    }
  };

  return (
    <Tooltip title="click to view experience" arrow>
      <div className="skill-pill" onClick={() => handleScroll(skill.ref)}>
        <div className="dot" style={{ backgroundColor: `${skill.color}` }} />
        {skill.name}
      </div>
    </Tooltip>
  );
}
