import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
  const [name, setName] = useState("");
  return (
    <Container>
      <Form>
        <h1>Merhaba {name}</h1>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form>
    </Container>
  );
};

export default Form1;
