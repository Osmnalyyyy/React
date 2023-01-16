import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(resp.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table striped bordered hover>
      {loading && <Spinner animation="border" variant="primary" />}
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Nüfus</th>
          <th>Başkent</th>
          <th>Para Birimi</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, i) => (
          <tr key={country.cca3}>
            <td>{i + 1}</td>
            <td>
              <img src={country.flags.png} width="50px" />
            </td>
            <td>{country.name.common}</td>
            <td>{country.population}</td>
            <td>{country.capital}</td>
            <td>
              {" "}
              {country.currencies
                ? Object.keys(country.currencies)
                    .map((cur) => country.currencies[cur].name)
                    .join("-")
                : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Countries;
