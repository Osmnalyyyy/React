import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (value) => {
    if (value < 0) value = 0; // counter 0'ın altına düşmesin diye yaptık

    setCounter(value);
  };

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => handleClick(counter + 1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => handleClick(counter - 1)}>
        <AiOutlineMinusCircle />
      </Button>
      <Button
        variant="danger"
        onClick={() => handleClick(0)}
        disabled={counter === 0}
      >
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};
export default Counter;
