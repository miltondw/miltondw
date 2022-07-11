import Image from "next/image";

const CardPortfolio = ({ img, title, link }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-img">
        <Image src={img} alt={title} width={350} height={280} layout="responsive" />
      </div>
      <h3 className="portfolio__item-title">{title}</h3>
      <div className="portfolio__item-cta">
        <a href={link.git} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={link.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>
    </article>
  );
};

export default CardPortfolio;
