import "./Projects.css";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import ProjectThumbnail from "./ProjectThumbnail";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projectsArr = [
    {
      index: 0,
      title: "PulsePoint",
      date: "Reddit-like Social Media Web App (Jun. 2023 - Jul. 2023)",
      image: "pulsepoint.png",
      stack: "Next.js, React, Tailwind.css, Prisma DB, Redis, GCP",
      details: [
        "Developed Reddit-like social media web app using React, Next.js, Tailwind and Prisma to serve as a forum platform for me and my friends",
        "Implemented features like a WYSIWYG editor for users to post text, photos, videos, code blocks, and more",
        "Utilized Redis for client-side caching to optimize for performance",
      ],
      link: "https://github.com/youngwoo206/Project_PulsePoint",
    },
    {
      index: 1,
      title: "UWaterloo IGem Wiki",
      date: "Software Team Lead for Award Winning Website (Jul. 2022 - Nov. 2022)",
      image: "igem.png",
      stack: "React, TypeScript, Material UI, Redux, Figma, GitLab",
      details: [
        "Led a team of 3 to develop a wiki website presenting all the research conducted by the UWaterloo IGem design team ",
        "Developed multiple key accessibility features, including text-to-speech, adjustable font size, keyboard shortcuts, light/dark mode, and more",
        "Won Gold medal at 2022 IGem conference in Paris, France with full points in the website features and accessibility category",
      ],
      link: "https://2022.igem.wiki/waterloo/",
    },
    {
      index: 2,
      title: "RoboNav SLAM Capstone Project",
      date: "Simultaneous Location and Mapping - guided Robot (May. 2024 - Present)",
      image: "slam.png",
      stack: "Python (Pandas, NumPy, TensorFlow), C/C++, Simulink",
      details: [
        "Partnering with Eddyfi Technologies to develop demo of robot with a Simultaneous Location and Mapping (SLAM) system",
        "Building a small crawler robot with integrated Lidar sensor capable of navigating tight spaces like pipelines and nuclear reactors",
        "Developing a SLAM algorithm using Python TensorFlow to read sensor data and return 2D map of working environment",
      ],
      link: "https://www.eddyfi.com/en/industry/non-destructive-testing-in-oil-and-gas-industry",
    },
  ];

  const projectsEls = projectsArr.map((project) => (
    <div className="embla__slide" key={project.index}>
      <ProjectCard
        title={project.title}
        date={project.date}
        image={project.image}
        stack={project.stack}
        details={project.details}
        link={project.link}
        key={project.index}
      />
    </div>
  ));

  const projectThumbnails = projectsArr.map((project) => (
    <div onClick={() => onThumbClick(project.index)} key={project.index}>
      <ProjectThumbnail index={project.index} />
    </div>
  ));

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
      {/* <div className="thumbnail-container">{projectThumbnails}</div> */}
    </div>
  );
}
