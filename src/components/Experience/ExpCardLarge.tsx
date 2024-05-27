import "./Experience.css";

interface ExpCardLargeProps {
  title: string;
  date: string;
  image: string;
  skills: string[];
  responsibilities: string;
  accomplishments: string[];
}

export default function ExpCardLarge({
  title,
  date,
  image,
  skills,
  responsibilities,
  accomplishments,
}: ExpCardLargeProps) {
  const skillsMap = skills.map((skill) => (
    <li style={{ marginBottom: "2px" }}>{skill}</li>
  ));

  const accomplishmentsMap = accomplishments.map((point) => (
    <li style={{ marginBottom: "15px" }}>{point}</li>
  ));

  return (
    <div className="exp-card-body">
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
          marginTop: "0px",
          fontStyle: "italic",
        }}
      >
        {date}
      </p>
      <div className="exp-card-content">
        <div className="exp-card-img-div">
          <img src={image} alt="" className="company-pic" />
          <div>
            <p style={{ fontSize: "1.4rem", marginBottom: "6px" }}>Skills:</p>
            <ul style={{ marginTop: "0", fontSize: "1.1rem" }}>{skillsMap}</ul>
          </div>
        </div>
        <div className="exp-card-text-div">
          <p style={{ fontSize: "1.4rem", marginTop: 0, marginBottom: "10px" }}>
            Responsibilities:
          </p>
          <ul style={{ fontSize: "1.1rem", marginTop: 0 }}>
            <li>{responsibilities}</li>
          </ul>
          <p style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
            Key Accomplishments:
          </p>
          <ul style={{ fontSize: "1.1rem", marginTop: 0 }}>
            <li>{accomplishmentsMap}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
