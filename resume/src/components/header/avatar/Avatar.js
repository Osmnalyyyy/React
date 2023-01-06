import React from "react";
import "./Avatar.css";
const Avatar = () => {
  return (
    <>
      <div className="avatar">
        <img src="assets/images/my-pic.jpg" alt="avatar" />
      </div>
      <div className="name">
        <h1>OSMAN ALİ SEVİNÇ</h1>
        <span>Full Stack Developer</span>
      </div>
    </>
  );
};

export default Avatar;
