import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { customFetch } from "../service/customFetch";

const Home = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await customFetch("data/index.json");
        setCards(data);
      } catch (error) {
        // Gérer les erreurs si nécessaire
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <Cards cards={cards} />
    </div>
  );
};

export default Home;
