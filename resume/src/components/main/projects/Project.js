import React from "react";

const Project = ({ name, languages, tools, url, description }) => {
  return (
    <div className="top-item resume-item">
      <h4>{name}</h4>
      <h5>
        <ul>
          {languages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
      </h5>
      <h5>
        <ul>
          {tools.map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>
      </h5>
      <br />
      <a href="https://github.com/Osmnalyyyy">{url}</a>
      <p>{description}</p>
    </div>
  );
};

export default Project;
