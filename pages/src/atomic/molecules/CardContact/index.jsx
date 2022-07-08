import React from "react";

const CardContact = ({ title, option, link, icon }) => {
  return (
    <article className="contact__option" >
      {icon}
      <h4 className="contact__option-title">{title}</h4>
      <h5 className="contact__option-option">{option}</h5>
      <a className="contact__option-link" href={link} target="_blank" rel="noreferrer">
        Enviar un Mensaje
      </a>
    </article>
  );
};

export default CardContact;
