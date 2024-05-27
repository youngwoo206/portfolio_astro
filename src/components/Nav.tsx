import "./Nav.css";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setIsMobile(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div style={{ position: "fixed" }}>
      <div className="nav">
        <div className="nav-body">
          <button className="resume-btn">Resume</button>
          {isMobile ? (
            <div className="links-div">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#aboutme" className="nav-link">
                About Me
              </a>
              <a href="#exp" className="nav-link">
                Experience
              </a>
              <a className="nav-link">Projects</a>
            </div>
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
      <div className="scroll-watcher" />
    </div>
  );
}
