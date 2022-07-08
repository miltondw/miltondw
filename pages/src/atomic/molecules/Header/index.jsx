import React from "react";
import BtnCta from "../../atoms/BtnCta";
import Image from "next/image";
import RSS from "../../atoms/RSS";
const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>Hola yo soy</h5>
        <h1>Milton Estrada</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <BtnCta />
        <RSS />
        <div className="me">
          <Image
            src="/assets/me-about.png"
            alt="Yo"
            width={128}
            height={203}
            layout="fill"
            className="img_me"
          />
        </div>
        <a href="#contact" className="scroll__down">
          Desplazarse hacia abajo
        </a>
      </div>
    </header>
  );
};

export default Header;
