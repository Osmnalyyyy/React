import React from "react";
import Welcome from "./Welcome";

const Greetings = () => {
  return (
    <div className="greetings">
      <h1>Greetings component</h1>
      <Welcome firstName="Ali" lastName="Gel" />
      <Welcome firstName="Sevgi" lastName="Gül" />
    </div>
  );
};

export default Greetings;
