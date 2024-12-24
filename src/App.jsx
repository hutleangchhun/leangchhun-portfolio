import React, { useEffect, useRef } from "react";
import "./App.css";
import ProjectCard from "./components/Card/ProjectCard";
import Description from "./components/Description";
import SkillCard from "./components/Card/SkillCard";

function App() {
  const descriptionRef = useRef(null);
  const skillCardRef = useRef(null);
  const projectCardRef = useRef(null);
  
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = [descriptionRef, skillCardRef, projectCardRef];
    let currentSection = 0;

    const interval = setInterval(() => {
      if (currentSection < sections.length) {
        scrollToSection(sections[currentSection]);
        currentSection++;
      } else {
        clearInterval(interval); 
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="gradient-background">
        <div ref={descriptionRef}>
          <Description />
        </div>
        <div ref={skillCardRef}>
          <SkillCard />
        </div>
        <div ref={projectCardRef}>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default App;
