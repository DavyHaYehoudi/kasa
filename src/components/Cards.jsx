import React from "react";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <main className="main-cards">
      <ul className="main-cards-wrapper" >
        {cards &&
          cards.length > 0 &&
          cards.map((card) => <li key={card.id}>{<Card card={card} />} </li>)}
      </ul>
    </main>
  );
};

export default Cards;
