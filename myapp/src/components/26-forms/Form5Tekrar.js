import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5Tekrar = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const handleFormData = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!formData.firstName) throw new Error("Adınızı giriniz");
      if (!formData.lastName) throw new Error("Soyadınızı giriniz");
      if (!formData.email) throw new Error("Emailinizi giriniz");
      if (!formData.phone) throw new Error("Telefon numaranızı giriniz");

      setTimeout(() => {
        alert("bilgileriniz gönderildi");
      }, 1000);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      nameRef.current.focus();
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };
  return (
    <Container className="mt-5">
      <Form method="post" onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>İsim</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.firstName}
            onChange={(e) => handleFormData(e)}
            ref={nameRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="number"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Gönder
        </Button>
      </Form>
    </Container>
  );
};

export default Form5Tekrar;
