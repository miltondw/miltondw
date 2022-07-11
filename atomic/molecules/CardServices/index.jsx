import { BiCheck } from "react-icons/bi";

const CardsServices = ({ title, items }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3 className="service__head-title">{title}</h3>
      </div>
      <ul className="service__list">
        {items &&
          items.map((item) => (
            <li className="service__list-content" key={item}>
              <BiCheck className="service__list-icon" />
              <p className="service__list-item">{item}</p>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default CardsServices;
