import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const CardsAbout = () => {
  return (
    <div className="cardsAbout">
      <article className="cardAbout">
        <FaAward className="cardAbout__icon" />
        <h5 className="cardAbout__title">Experiencia</h5>
        <small className="cardAbout__subTittle">+2 años</small>
      </article>
      <article className="cardAbout">
        <FiUsers className="cardAbout__icon" />
        <h5 className="cardAbout__title">Clientes</h5>
        <small className="cardAbout__subTittle">
          +20 clientes en distintos países
        </small>
      </article>
      <article className="cardAbout">
        <VscFolderLibrary className="cardAbout__icon" />
        <h5 className="cardAbout__title">Proyectos</h5>
        <small className="cardAbout__subTittle">+30 Proyectos</small>
      </article>
    </div>
  );
};

export default CardsAbout;
