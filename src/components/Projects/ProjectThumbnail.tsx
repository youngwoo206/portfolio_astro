import "./Projects.css";

interface ProjectThumbnailProps {
  index: number;
}

export default function ProjectThumbnail({ index }: ProjectThumbnailProps) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: "5px",
        backgroundColor: "#220F6F",
      }}
      key={index}
    >
      {index}
    </div>
  );
}
