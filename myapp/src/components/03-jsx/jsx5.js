import React from "react";

const Jsx5 = () => {
  const names = ["ali", "osman", "ömer", "görkem"];
  const cities = ["Istanbul", "Paris", "Tokio", "Berlin"];
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index} style={{ color: "red" }}>
            {name.toUpperCase()}
          </li>
        ))}
      </ul>

      <select name="" id="">
        {cities.map((city, index) => (
          <option key={index} value="">
            {city.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
