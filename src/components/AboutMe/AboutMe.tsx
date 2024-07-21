import AboutCard1 from "./AboutCard1";
import AboutCard2 from "./AboutCard2";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-main">
        <AboutCard1
          title="Education"
          image="me_and_josh.jpg"
          alt="design group photo"
          caption="Me (left) and my group mate (right) at a design symposium"
          para1="Honestly, when I chose to pursue chemical engineering in grade 12, I had do idea that my future passion would lie in software engineering. "
          para2="However, as I approach 4th year, I realized that I learned a lot about problem solving and building great study habits. I also got the chance to meet dozens of talented peers who I’m proud to call friends. "
          para3="Finally, I had to work on interesting projects like PID controllers, pressure chambers, and more, all while picking up valuable skills like Python, C++, and working with Arduinos."
        />

        <AboutCard2 />

        <AboutCard1
          title="More About Me"
          image="path.jpg"
          alt="path"
          caption=""
          para1="A major part of my journey has been the various internships I completed along the way. My first coop placements were engineering roles at companies like Rogers and Nissan, where I discovered that my passion lied in programming."
          para2="This lead me to take a gap year, where I committed to learning web development full time. I secured various SWE roles where I specialized in full stack web development using technologies like React, Flask, AWS and more to solve complex problems and build out major user-facing features."
          para3=""
        />

        <AboutCard1
          title="More About Me"
          image="dog.jpg"
          alt="my pet dog stella"
          caption="My dog (Stella) begging for treats while I’m trying to study"
          para1="On a more personal note, I mainly grew up in Canada with my parents, grandparents, younger brother, and 2 pet dogs. We have a golden retriever named Stella and a yorkshire terrier named Angel."
          para2="Growing up, I loved to swim, build Legos, and play basketball with my friends. My spent my summers working as a lifeguard and I still love to play and watch basketball to this day (go Raptors)."
          para3="Aside from that, I love to travel and try new things. I also love finding new restaurants in my area and discovering new cuisines."
        />
      </div>
    </div>
  );
}
