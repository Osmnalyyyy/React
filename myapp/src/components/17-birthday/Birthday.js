import React, { useState } from "react";
import { Container } from "react-bootstrap";
import data from "./people.json";
import PersonCard from "./PersonCard";
const Birthday = () => {
  const [people, setPeople] = useState(data);
  return (
    <Container>
      <h1>Bugün doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu </p>

      {people.map((item) => (
        <PersonCard {...item} key={item.id} />
      ))}
    </Container>
  );
};

export default Birthday;
