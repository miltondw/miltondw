import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        MILTONDW
      </a>
      <ul className="permalinks">
        <li>
          <a href="#" className="permalinks__link">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="permalinks__link">
            Conóceme
          </a>
        </li>
        <li>
          <a href="#experience" className="permalinks__link">
            Experiencia
          </a>
        </li>
        <li>
          <a href="#services" className="permalinks__link">
            Servicios
          </a>
        </li>
        <li>
          <a href="#portfolio" className="permalinks__link">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="permalinks__link">
            Contácteme
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/milton-dw/"
        >
          <BsLinkedin />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/miltondw"
        >
          <BsGithub />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://api.whatsapp.com/send/?phone=573002321421&text&app_absent=0"
        >
          <BsWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
