import React from "react";
import { Button, Card } from "react-bootstrap";
import ProfileCard from "../10-profile-card/ProfileCard";

const Product = (props) => {
  const { title, image, id, desc, price } = props;

  const addToCard = () => {
    alert(`${title} added to card`);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
        <Card.Title className="fs-2">{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text className="fs-3 text-info">${price}</Card.Text>

        <Button variant="warning" onClick={addToCard}>
          Add To Chart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
