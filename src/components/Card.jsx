import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <Link to={`/result/${card.id}`}>
      <article className="card">
        <p>{card.title}</p>
      </article>
    </Link>
  );
};

export default Card;
