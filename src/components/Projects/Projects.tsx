import "./Projects.css";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projectsArr = [
    {
      title: "PulsePoint",
      date: "Jun. 2023 - Jul. 2023",
      stack: "Next.js, React, Tailwind.css, Prisma DB, Redis, GCP",
    },
    {
      title: "UWaterloo IGem Wiki",
      date: "Jul. 2022 - Nov. 2022",
      stack: "React, TypeScript, Material UI, Redux, Figma",
    },
  ];

  const projectsEls = projectsArr.map((project) => (
    <div className="embla__slide">
      <ProjectCard
        title={project.title}
        date={project.date}
        stack={project.stack}
      />
    </div>
  ));

  return (
    <div className="projects-main" id="projects">
      <p style={{ fontSize: "2.5rem" }}>My Projects</p>

      <div className="carousel-container">
        <NavigateBeforeIcon
          onClick={scrollPrev}
          sx={{
            width: "50px",
            height: "50px",
            color: "#A995F9",
            transition: "0.1s",
            "&:hover": { color: "#C8BAFF" },
          }}
        />
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{projectsEls}</div>
        </div>
        <NavigateNextIcon
          onClick={scrollNext}
          sx={{
            width: "50px",
            height: "50px",
            color: "#A995F9",
            transition: "0.1s",
            "&:hover": { color: "#C8BAFF" },
          }}
        />
      </div>
    </div>
  );
}
