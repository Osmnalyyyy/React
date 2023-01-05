import React from "react";
import countries from "./countries.json";
const Jsx6 = () => {
  return (
    <table style={{ border: "1px solid red" }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) =>
          index % 2 == 0 ? (
            <tr key={index} style={{ backgroundColor: "aqua" }}>
              <td>{index + 1}</td>
              <td style={{ textAlign: "center" }}>{country.name}</td>
              <td>{country.code}</td>
            </tr>
          ) : (
            <tr key={index} style={{ backgroundColor: "yellow" }}>
              <td>{index + 1}</td>
              <td style={{ textAlign: "center" }}>{country.name}</td>
              <td>{country.code}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Jsx6;
