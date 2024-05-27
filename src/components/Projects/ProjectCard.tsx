import "./Projects.css";

interface ProjectCardProps {
  title: string;
  date: string;
  stack: string;
}

export default function ProjectCard({ title, date, stack }: ProjectCardProps) {
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
      <div className="project-img"></div>
      <div className="project-stack">
        {/* <p
          style={{
            fontSize: "1.2rem",
            marginTop: "12px",
            marginBottom: "2px",
          }}
        >
          Stack: {"Java, CSS, C#"}
        </p> */}
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
