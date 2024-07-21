import "./Experience.css";
import { useState, useEffect } from "react";
import ExpCardLarge from "./ExpCardLarge";
import ExpCardSmall from "./ExpCardSmall";

export default function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setIsMobile(window.innerWidth > 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const expCards = [
    <ExpCardLarge
      title="Ada CX, Web Developer Intern"
      date="Jun. 2024 - Present"
      image="ada.jpeg"
      skills={[
        "Astro.js",
        "React",
        "TypeScript",
        "Alpine.js",
        "Tailwind CSS",
        "HTML & CSS",
      ]}
      responsibilities="Working on customer-facing main site by using Astro.js and Tailwind.css to develop new features, create new pages, and perform daily site maintenance "
      accomplishments={[
        "Led a comprehensive rework of the statically-generated Astro.js blog page, developing key new features like a search bar, dynamically generated table of contents, and an embedded newsletter signup form",
        "Developed a flexible and reusable React search bar component capable of accepting different data formats for different use cases, with a fuzzy-match search algorithm for an intuitive user experience",
      ]}
    />,
    <ExpCardLarge
      title="Junior AI, Software Engineering Intern"
      date="Aug. 2023 - Dec. 2023"
      image="junior_ai_logo.jpeg"
      skills={[
        "React",
        "Flask",
        "AWS",
        "PostgreSQL",
        "TypeScript",
        "Python",
        "MUI",
      ]}
      responsibilities="Developed Portal web application meant to accompany legal AI plugin tool, allowing users to manage settings, update tool defaults, and more"
      accomplishments={[
        "Built out “legal snippets” major feature from the ground up, which allows users to save and reuse common legal phrases with updated text (case names, dates, locations, etc) to best match the current legal document",
        "Migrated AI training compute method from existing on-premise solution to GPU-optimized AWS EC2 instance, reducing training times by over 75%",
      ]}
    />,
    <ExpCardLarge
      title="Baselane, QA Developer Intern"
      date="May. 2023 - Aug. 2023"
      image="baselane_logo.jpeg"
      skills={["Cypress", "TypeScript", "Github Actions", "Jira"]}
      responsibilities="Built out automated end-to-end testing suite to enhance app coverage using TypeScript-based testing framework Cypress"
      accomplishments={[
        "Developed multiple new comprehensive end-to-end tests, adding test coverage to parts of the app not previously covered and catching 30+ bugs app-wide within a 4 month time span",
        "Refactored existing Cypress tests by implementing features like hooks and aliases over previous solution, reducing test duration for some refactored tests by up to 40%",
      ]}
    />,
    <ExpCardLarge
      title="Saige (KnockNow), Full Stack Developer"
      date="Feb. 2023 - Apr. 2023"
      image="realsaige_logo.jpeg"
      skills={[
        "React",
        "Flask",
        "MySQL",
        "Pandas",
        "TypeScript",
        "Python",
        "GCP",
      ]}
      responsibilities="Developed key features, refactored existing code, and constructed data pipelines for Saige Vancouver-based real estate web app"
      accomplishments={[
        "Spearheaded rework of the listing details page, a major user-facing feature, including a reformat of existing listing information as well as inclusion of map view using Google Maps API",
        "Constructed a data pipeline using Pandas to validate and merge over 100 000 property records to a MySQL database",
      ]}
    />,
    <ExpCardSmall
      title="DreamSuites, Web Developer"
      date="Sep. 2022 - Dec. 2022"
      image="dlf.jpeg"
      accomplishments="Added direct booking feature to Dream Suites website by integrating Hostaway API, allowing users to book their hotel stay directly from the website and contributing to a 10% increase in booking volume"
    />,
    <ExpCardSmall
      title="Nissan, Automotive Engineering Intern "
      date="Sep. 2021 - Dec. 2021 "
      image="nissan.jpeg "
      accomplishments="Developed VBA macro for Excel report generation, automating a multi-hour long tasks while also eliminating the chance of human error "
    />,
    <ExpCardSmall
      title="University of Waterloo, Research Assistant "
      date="Jan. 2021 - Apr. 2021 "
      image="waterloo.jpeg "
      accomplishments="Conducted data analysis using Pandas and developed 3D CAD models of battery packs using SOLIDWORKS, resulting in 2 publications within the Li-ion battery sphere "
    />,
    <ExpCardSmall
      title="Rogers, Network Engineering Intern "
      date="Jun. 2020 - Aug. 2020 "
      image="rogers.jpeg "
      accomplishments="Lead the development of a relational database using MS Access to centralize data for over 2000 network towers previously held in locally-stored Excel files, increase team wide efficiency "
    />,
  ];

  const expCardsMap = expCards.map((card) => (
    <>
      <div className="sidebar-point" />
      {card}
    </>
  ));

  return (
    <div className="exp-body" id="exp">
      <p style={{ fontSize: "2.5rem" }}>My Journey So Far</p>
      <div className="exp-card-div">
        {isMobile && <div className="sidebar" />}
        {isMobile ? expCardsMap : expCards}
      </div>
    </div>
  );
}
