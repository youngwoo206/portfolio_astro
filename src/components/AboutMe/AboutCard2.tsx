import "./AboutCards.css";
import WebAssetIcon from "@mui/icons-material/WebAsset";

export default function AboutCard2() {
  return (
    <div className="card-body">
      {" "}
      <p
        style={{
          fontSize: "1.6rem",
          marginBottom: "12px",
          marginTop: "12px",
        }}
      >
        Skills
      </p>
      <div className="card-content">
        <div className="card-img-div">
          {" "}
          <WebAssetIcon sx={{ width: 60, height: 60 }} />
        </div>

        <div className="card-text-div">
          <div className="skill-section">
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "6px",
              }}
            >
              Frontend:
            </p>
            <p>{"Languages -> TypeScript, JavaScript, HTML & CSS"}</p>
            <p>{"Frameworks -> React, Next.js, Vue.js, Astro"}</p>
            <p>{"Libraries -> Tailwind, Material UI, Redux, jQuery"}</p>
          </div>
          <div className="skill-section">
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "6px",
              }}
            >
              Backend:
            </p>
            <p>{"Languages -> Python, TypeScript, Java, C#"}</p>
            <p>{"Frameworks -> Flask, Node.js, .NET, Spring Boot"}</p>
            <p>{"Databases -> PostgreSQL, MySQL, Redis, MongoDB"}</p>
          </div>
          <div className="skill-section">
            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "6px",
              }}
            >
              Cloud:
            </p>
            <p>{"AWS -> EC2, Lambda, S3, RDS, AWS SDK"}</p>
            <p>{"Certifications -> AWS Certified Cloud Practitioner"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
