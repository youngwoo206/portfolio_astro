import "./Nav.css";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "@mui/material/Popover";
import { Button } from "@mui/material";
import resume from "../assets/YoungwooLee2025.pdf";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 720);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const updateMedia = () => {
    setIsMobile(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ position: "fixed", zIndex: 100 }}>
      <div className="nav">
        <div className="nav-body">
          <a
            className="resume-btn"
            href={resume}
            download="YoungwooLee2025.pdf"
          >
            Resume
          </a>
          {isMobile ? (
            <div className="links-div">
              <a href="#aboutme" className="nav-link">
                <p>About Me</p>
              </a>
              <a href="#exp" className="nav-link">
                Experience
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </div>
          ) : (
            <div>
              <Button onClick={handleClick}>
                <MenuIcon className="menu-icon" />
              </Button>
            </div>
          )}
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <div className="dropdown">
            <a href="#aboutme" className="nav-link-mobile">
              <p>About Me</p>
            </a>
            <a href="#exp" className="nav-link-mobile">
              <p>Experience</p>
            </a>
            <a href="#projects" className="nav-link-mobile">
              <p>Projects</p>
            </a>
          </div>
        </Popover>
      </div>
      <div className="scroll-watcher" />
    </div>
  );
}
