import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link to={`/result/${card.id}`}>
      <article className="card">
        <figure>
          <img src={card.cover} alt="couverture" />
          <figcaption>{card.title}</figcaption>
        </figure>
      </article>
    </Link>
  );
};

export default Card;
