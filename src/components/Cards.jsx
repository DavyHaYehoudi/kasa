import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <main>
      <ul>
        CARDS :{" "}
        {cards &&
          cards.length > 0 &&
          cards.map((card) => <li key={card.id}>{<Card card={card} />} </li>)}
      </ul>
    </main>
  );
};

export default Cards;
