import React from "react";
import {
  TfiFacebook,
  TfiTwitterAlt,
  TfiInstagram,
  TfiLinkedin,
  TfiGithub,
} from "react-icons/tfi";
import "./social-icons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=717589294"
            target={"_blank"}
          >
            <TfiFacebook />
          </a>
        </li>
        {/* <li>
          <a href="#" target={"_blank"}>
            <TfiTwitterAlt />
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/osmanli_sevinc/" target={"_blank"}>
            <TfiInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/osman-ali-sevinc/"
            target={"_blank"}
          >
            <TfiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Osmnalyyyy" target={"_blank"}>
            <TfiGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialIcons;
