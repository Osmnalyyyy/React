import React from "react";
import About from "./about/About";
import Intro from "./about/intro/Intro";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import "./main.css";
const Main = () => {
  return (
    <div className="main-content pull-right">
      <About />
      <Experiences />
      <Education />
    </div>
  );
};

export default Main;
