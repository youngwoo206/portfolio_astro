import "./Landing.css";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Landing() {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setIsMobile(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <div className="landing-grid">
        <div className="hello-div">
          <p>Hi, I'm </p>
          <p>Youngwoo 👋</p>
          <div style={{ marginTop: "50px", marginLeft: "5px" }}>
            <TypeAnimation
              sequence={[
                "software developer",
                4500,
                "engineering student",
                4500,
                "lifelong learner",
                4500,
                "lego enthusiast",
                4500,
                "raptors fan",
                4500,
              ]}
              wrapper="div"
              repeat={Infinity}
              style={{
                fontSize: "1.6rem",
                color: "white",
                marginTop: "20px",
              }}
              cursor={true}
            />
          </div>
        </div>
        <div className="img-div">
          <img src="me.jpeg" alt="profile pic" className="pfp" />
        </div>
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
