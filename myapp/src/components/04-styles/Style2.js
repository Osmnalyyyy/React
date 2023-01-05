import React from "react";

const Style2 = () => {
  const styleTitle = {
    fontSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        incidunt corporis nostrum omnis enim sunt?
      </p>
      <h2 style={{ ...styleTitle, color: "yellow" }}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        incidunt corporis nostrum omnis enim sunt?
      </p>
    </div>
  );
};

export default Style2;
