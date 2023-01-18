import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/hello-world">Hello World</Link>
        </li>
        <li>
          <Link to="/hello-react">Hello React</Link>
        </li>
        <li>
          <Link to="/jsx1">JSX1</Link>
        </li>
        <li>
          <Link to="/jsx2">JSX2</Link>
        </li>
        <li>
          <Link to="/jsx3">JSX3</Link>
        </li>
        <li>
          <Link to="/jsx4">JSX4</Link>
        </li>
        <li>
          <Link to="/jsx5">JSX5</Link>
        </li>{" "}
        <li>
          <Link to="/Form5Tekrar">Form5 Tekrar</Link>
        </li>{" "}
        <li>
          <Link to="/Form6Tekrar">Form6 Tekrar</Link>
        </li>{" "}
        <li>
          <Link to="/Exchange">Exchange</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
