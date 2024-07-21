import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function HeroContent() {
  return (
    <div className="title">
      <div className="title-content">
        <div className="img-div">
          <img src="me.jpeg" alt="profile pic" className="pfp" />
        </div>
        <p>Hi, I'm Youngwoo 👋</p>
        <div>
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
              fontSize: "1.8rem",
              color: "white",
                marginTop: "20px",
              marginBottom: "20px",
                zIndex: "50",
              textAlign: "center"
            }}
            cursor={true}
          />
        </div>
        <div className="media-links-div">
          <a
            href="https://www.linkedin.com/in/youngwoo-lee-123b63198/"
            target="_blank"
            style={{ width: "55px", height: "55px" }}
          >
            <FaLinkedin
              className="link-icon"
            />
          </a>
          <a
            href="https://github.com/youngwoo206"
            target="_blank"
            style={{ width: "55px", height: "55px" }}
          >
            <FaGithub
              className="link-icon"
            />
          </a>
          <a
            href="mailto:y288lee@uwaterloo.ca"
            target="_blank"
            style={{ width: "55px", height: "55px" }}
          >
            <MdEmail
              className="link-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
