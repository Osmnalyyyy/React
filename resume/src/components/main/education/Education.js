import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import "./education.css";
const Education = () => {
  return (
    <section id="education" className="resume">
      <SectionHeader title="Education" isButtonVisible={false} />

      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="top-item resume-item">
            <h2>Master Degree Of Design</h2>
            <span>JANUARY, 2007</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              maxime laborum sequi, magni earum quo soluta sint velit numquam,
              ipsum illum! Nostrum possimus illo architecto praesentium ut
              aliquam dolorem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
