import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kiqiwud",
        "template_ucfkk9l",
        form.current,
        "hM8H8dajyQ-DXOi5F"
      )
      e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="content_form">
      <input
        className="content_form-input"
        type="text"
        name="name"
        placeholder="Nombre completo"
        required
      />
      <input
        className="content_form-input"
        type="email"
        name="email"
        placeholder="Tu Correo"
        required
      />
      <textarea
        className="content_form-textarea"
        name="message"
        id=""
        rows="7"
        placeholder="Tu mensaje"
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Enviar Mensaje
      </button>
    </form>
  );
};

export default Form;
