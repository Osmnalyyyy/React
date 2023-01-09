import React from "react";
import "./projects.css";
import projects from "./projects.json";
import SectionHeader from "../section-header/SectionHeader";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <SectionHeader title="Projects" isButtonVisible={false} />
      <div className="row">
        {projects.map((project, i) => (
          <div className="col-md-12 col-sm-12 col-xs-12" key="i">
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
