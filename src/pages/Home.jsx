import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import useDataFetch from "../service/hook/useDataFetch";

const Home = () => {
  const { data: cards, loading, error } = useDataFetch("data/index.json");

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors de la récupération des données : {error.message}</p>;
  }
  return (
    <div className="home-container">
      <Banner title="Chez vous, partout et ailleurs" page="home" />
      <Cards cards={cards} />
    </div>
  );
};

export default Home;
