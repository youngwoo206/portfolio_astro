import "./Landing.css";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Landing() {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 600);
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to my portfolio website!</TerminalOutput>,
    <TerminalOutput>
      <span style={{ color: "#A995F9" }}>Type "help" for all commands</span>
    </TerminalOutput>,
  ]);
  const [prevCommands, setPrevCommands] = useState<string[]>([]);

  const updateMedia = () => {
    setIsMobile(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleInput = (terminalInput: string) => {
    const prevLines = handlePrevCommands(terminalInput);
    switch (terminalInput) {
      case "help":
        handleHelp();
        break;
      case "clear":
        handleClear();
        break;
      case "exp":
        handleExperience();
        break;
      case "skills":
        handleSkills();
        break;
      default:
        setTerminalLineData([
          ...prevLines,
          <TerminalOutput>{`$ ${terminalInput}`}</TerminalOutput>,
        ]);
    }
  };

  const handlePrevCommands = (terminalInput: string) => {
    prevCommands
      ? setPrevCommands((prev) => [...prev, terminalInput])
      : setPrevCommands(["Welcome to my portfolio website!"]);
    const prevLines = prevCommands.map((cmd) => (
      <TerminalOutput>{`$ ${cmd}`}</TerminalOutput>
    ));
    return prevLines;
  };

  const handleClear = () => {
    setPrevCommands([]);
    setTerminalLineData([
      <TerminalOutput>Welcome to my portfolio website!</TerminalOutput>,
      <TerminalOutput>
        <span style={{ color: "#A995F9" }}>Type "help" for all commands</span>
      </TerminalOutput>,
    ]);
  };

  const handleHelp = () => {
    const cmds = [
      "help -> lists out all commands",
      "clear -> clears the terminal",
      "skills -> my skills",
      "exp -> my work experience",
    ];
    const terminalLines = cmds.map((cmd) => (
      <TerminalOutput>{`${cmd}`}</TerminalOutput>
    ));
    setTerminalLineData(terminalLines);
    console.log(terminalLineData);
  };

  const handleExperience = () => {
    const exp = [
      "Ada: SWE intern (Jun 2024-Aug 2024)",
      "Junior_AI: SWE intern (Aug 2023-Dec 2023)",
      "Baselane: QA Developer (May 2023-Aug 2023)",
      "Saige: Full Stack Developer (Feb 2023-May 2023)",
    ];
    const expLines = exp.map((ex) => (
      <TerminalOutput>{`${ex}`}</TerminalOutput>
    ));
    setTerminalLineData(expLines);
  };

  const handleSkills = () => {
    const skills = [
      {
        heading: "Languages",
        content: "TypeScript, Python, Java, HTML & CSS, SQL, Bash, C#",
      },
      {
        heading: "Frameworks",
        content:
          "React, Next.js, Flask, Astro.js, Node.js, React Native, Spring Boot",
      },
      {
        heading: "Technologies",
        content: "AWS, MySQL, PostgreSQL, GCP, Redis, Github Actions",
      },
    ];

    const skillLines = skills.map((skill) => (
      <TerminalOutput>
        <div className="wrap">
          <span className="terminal-heading">{`${skill.heading}: `}</span>
          {skill.content}
        </div>
      </TerminalOutput>
    ));
    setTerminalLineData(skillLines);
  };

  return (
    <div className="landing">
      <div className="terminal-container">
        <p className="heading">Hi, I'm Youngwoo 👋</p>
        <Terminal
          name=""
          colorMode={ColorMode.Dark}
          height="300px"
          onInput={(terminalInput) => handleInput(terminalInput)}
        >
          <div className="terminal-area">{terminalLineData}</div>
        </Terminal>
      </div>
      <div className="media-links-div">
        <a
          href="https://www.linkedin.com/in/youngwoo-lee-123b63198/"
          target="_blank"
          style={{ width: "55px", height: "55px" }}
        >
          <LinkedInIcon
            sx={{
              width: "50px",
              height: "50px",
              color: "#A995F9",
              transition: "0.3s",
              "&:hover": { width: "55px", height: "55px", color: "#C8BAFF" },
            }}
          />
        </a>
        <a
          href="https://github.com/youngwoo206"
          target="_blank"
          style={{ width: "55px", height: "55px" }}
        >
          <GitHubIcon
            sx={{
              width: "50px",
              height: "50px",
              color: "#A995F9",
              transition: "0.3s",
              "&:hover": { width: "55px", height: "55px", color: "#C8BAFF" },
            }}
          />
        </a>
        <a
          href="mailto:y288lee@uwaterloo.ca"
          target="_blank"
          style={{ width: "55px", height: "55px" }}
        >
          <EmailIcon
            sx={{
              width: "50px",
              height: "50px",
              color: "#A995F9",
              transition: "0.3s",
              "&:hover": {
                width: "55px",
                height: "55px",
                color: "#C8BAFF",
              },
            }}
          />
        </a>
      </div>
      {isMobile && (
        <a href="#aboutme" className="down-arr">
          <KeyboardArrowDownIcon
            sx={{
              width: 40,
              height: 40,
              color: "#C8BAFF",
              transition: "0.3s",
              "&:hover": {
                color: "#51EA38",
              },
            }}
          />
        </a>
      )}
    </div>
  );
}
