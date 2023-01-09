import React from "react";

const Contact = ({ type, inputname }) => {
  let opt = "";
  if (inputname == "Phone") {
    opt = "(Optional)";
  }

  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        name={`Input${inputname}`}
        id={`Input${inputname}`}
        placeholder={`${inputname}${opt}`}
      />
    </div>
  );
};

export default Contact;
