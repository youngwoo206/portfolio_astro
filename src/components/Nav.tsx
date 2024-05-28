import "./Nav.css";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import resume from "../assets/YoungwooLeeFE.pdf";

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
    <div style={{ position: "fixed", zIndex: 100 }}>
      <div className="nav">
        <div className="nav-body">
          <a className="resume-btn" href={resume} download="YoungwooLeeFE.pdf">
            Resume
          </a>
          {isMobile ? (
            <div className="links-div">
              <a href="#aboutme" className="nav-link">
                About Me
              </a>
              <a href="#exp" className="nav-link">
                Experience
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="/blog" className="nav-link">
                Blog
              </a>
              <a href="/post" className="nav-link">
                Post
              </a>
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
