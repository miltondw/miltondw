import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbMessageCode } from "react-icons/tb";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a
        className={`nav__item ${activeNav === "#" ? "nav--active" : ""}`}
        onClick={() => setActiveNav("#")}
        href="#"
      >
        <AiFillHome />
      </a>
      <a
        className={`nav__item ${activeNav === "#about" ? "nav--active" : ""}`}
        onClick={() => setActiveNav("#about")}
        href="#about"
      >
        <FaUserAstronaut />
      </a>
      <a
        className={`nav__item ${activeNav === "#experience" ? "nav--active" : ""}`}
        onClick={() => setActiveNav("#experience")}
        href="#experience"
      >
        <GiBookshelf />
      </a>
      <a
        className={`nav__item ${activeNav === "#services" ? "nav--active" : ""}`}
        onClick={() => setActiveNav("#services")}
        href="#services"
      >
        <MdOutlineDesignServices />
      </a>
      <a
        className={`nav__item ${activeNav === "#contact" ? "nav--active" : ""}`}
        onClick={() => setActiveNav("#contact")}
        href="#contact"
      >
        <TbMessageCode />
      </a>
    </nav>
  );
};

export default Nav;
