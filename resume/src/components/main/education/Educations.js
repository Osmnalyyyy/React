import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import Education from "./Education";
import "./education.css";
import educations from "./educations.json";

const Educations = () => {
  return (
    <section id="education" className="resume">
      <SectionHeader title="Education" isButtonVisible={false} />

      <div className="row">
        {educations.map((education, i) => (
          <div className="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Education {...education} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
