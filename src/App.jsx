import React, { useEffect, useRef } from "react";
import "./App.css";
import ProjectCard from "./components/Card/ProjectCard";
import Description from "./components/Description";
import Footer from "./components/Footer/footer";
import Service from "./components/OurService/Service";

function App() {
  return (
    <>
      <div className="gradient-background">
        <Description />
        <Service />
        <ProjectCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
