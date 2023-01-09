import React from "react";

const TextArea = () => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="form-group">
        <textarea
          name="InputMessage"
          id="InputMessage"
          className="form-control"
          rows="6"
          placeholder="Message"
          required=""
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
