import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import PersonCard from "./PersonCard";
const Birthday = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    const arr = people.filter((item) => item.id !== id);
    setPeople(arr);
  };

  return (
    <Container>
      <h1>Bugün doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu </p>

      {people.map((item) => (
        <PersonCard {...item} key={item.id} deletePerson={deletePerson} />
      ))}
      <Button variant="danger" onClick={() => setPeople([])} className="m-5">
        Remove All
      </Button>
      <Button variant="success" onClick={() => setPeople(data)}>
        Reload Data
      </Button>
    </Container>
  );
};

export default Birthday;
