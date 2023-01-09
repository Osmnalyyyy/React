import React from "react";
import About from "./about/About";

import Contacts from "./contact/Contacts";
import Educations from "./education/Educations";
import Experiences from "./experiences/Experiences";
import "./main.css";
import Projects from "./projects/Projects";

const Main = () => {
  return (
    <div className="main-content pull-right">
      <About />
      <Experiences />
      <Educations />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Main;
