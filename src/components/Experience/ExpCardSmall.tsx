import "./Experience.css";

interface ExpCardSmallProps {
  title: string;
  date: string;
  image: string;
  accomplishments: string;
}

export default function ExpCardSmall({
  title,
  date,
  image,
  accomplishments,
}: ExpCardSmallProps) {
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
        </div>
        <div className="exp-card-text-div">
          <p style={{ fontSize: "1.4rem", marginTop: 0, marginBottom: "10px" }}>
            Key Accomplishments:
          </p>
          <ul style={{ fontSize: "1.1rem", marginTop: 0 }}>
            <li>{accomplishments}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
