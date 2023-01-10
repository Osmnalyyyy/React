import React from "react";
import { FcHome, FcAddImage, FcGoogle } from "react-icons/fc";
import {
  FaAlignCenter,
  FaTachometerAlt,
  FaYandexInternational,
} from "react-icons/fa";
const Icon = () => {
  return (
    <div>
      <FcHome style={{ fontSize: "3rem" }} />
      <FaTachometerAlt style={{ fontSize: "3rem", color: "red" }} />
      <FaYandexInternational />
      <FaAlignCenter />
      <FcAddImage />
      <FcGoogle />
    </div>
  );
};

export default Icon;
