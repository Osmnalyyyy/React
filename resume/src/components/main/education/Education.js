import React from "react";

const Education = ({ university, degree, section, date }) => {
  return (
    <div className="top-item resume-item">
      <h2>{university}</h2>
      <h3>{degree}</h3>
      <h3>{section}</h3>
      <span>{date}</span>
    </div>
  );
};

export default Education;
