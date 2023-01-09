import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import Button from "./Button";
import Contact from "./Contact";
import "./contact.css";
import TextArea from "./TextArea";
import "./button.css";
const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <SectionHeader title="Contacts" isButtonVisible={false} />
      <form method="post" action="form/contactform.php">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <Contact type="text" inputname="Name" />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <Contact type="email" inputname="Email" />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <Contact type="text" inputname="Phone" />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <Contact type="text" inputname="Subject" />
          </div>
        </div>
        <TextArea />
        <Button />
      </form>
    </section>
  );
};

export default Contacts;
