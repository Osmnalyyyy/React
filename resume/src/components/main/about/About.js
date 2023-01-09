import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./about.css";
import Intro from "./intro/Intro";
import Skills from "./skills/Skills";
const About = () => {
  return (
    <section id="about" className="about">
      <SectionHeader title="About Me" isButtonVisible={true} />
      <Intro />
      <Skills />
    </section>
  );
};

export default About;
