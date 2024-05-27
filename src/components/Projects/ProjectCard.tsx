import { useState } from "react";
import "./Projects.css";

interface ProjectCardProps {
  title: string;
  date: string;
  image: string;
  stack: string;
  details: string[];
  link: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 420,
  backgroundColor: "#411DD5",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function ProjectCard({
  title,
  date,
  stack,
  image,
  details,
  link,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => setShowDetails(true);
  const handleShowImage = () => setShowDetails(false);

  const detailsEls = details.map((detail) => (
    <li>
      <p>{detail}</p>
    </li>
  ));

  return (
    <div className="project-slide">
      <p
        style={{
          fontSize: "1.6rem",
          marginTop: "12px",
          marginBottom: "2px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "1rem",
          marginTop: "10px",
          fontStyle: "italic",
        }}
      >
        {date}
      </p>
      {showDetails ? (
        <div onClick={handleShowImage} className="project-details">
          <ul style={{ marginRight: "10px" }}>{detailsEls}</ul>
          <p style={{ textAlign: "center", marginTop: 30, fontSize: "1.1rem" }}>
            Check out this project{" "}
            <span>
              <a
                href={link}
                target="_blank"
                style={{
                  color: "white",
                  textDecorationColor: "#51EA38",
                }}
              >
                here!
              </a>
            </span>
          </p>
        </div>
      ) : (
        <div
          className="project-img"
          style={{ backgroundImage: `url(${image})` }}
          onClick={handleShowDetails}
        />
      )}
      <div className="project-stack">
        <p
          style={{
            fontSize: "1.4rem",
            marginTop: "12px",
            marginBottom: "0px",
          }}
        >
          <span style={{ borderBottom: "2px solid #51EA38" }}>Stack:</span>
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            marginTop: "6px",
            marginBottom: "2px",
          }}
        >
          <ul>
            <li>{stack}</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
