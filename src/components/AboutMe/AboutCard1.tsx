import "./AboutCards.css";

interface AboutCard1Props {
  title: string;
  image: string;
  caption: string;
  alt: string;
  para1: string;
  para2: string;
  para3: string;
}

export default function AboutCard1({
  title,
  image,
  alt,
  caption,
  para1,
  para2,
  para3,
}: AboutCard1Props) {
  return (
    <div className="card-body">
      <p
        style={{
          fontSize: "1.6rem",
          marginBottom: "12px",
          marginTop: "12px",
        }}
      >
        {title}
      </p>
      <div className="card-content">
        <div className="card-img-div">
          <img src={image} alt={alt} className="about-pic" />
          <p>{caption}</p>
        </div>
        <div className="card-text-div">
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
      </div>
    </div>
  );
}
