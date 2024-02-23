import React from "react";
import CaptionBlock from "../components/CaptionBlock";
import ProfileBlock from "../components/ProfileBlock";
import Carousel from "../shared/Carousel";
import Dropdown from "../shared/Dropdown";
import { useParams } from "react-router-dom";
import useDataFetch from "../service/hook/useDataFetch";

const Result = () => {
  const { id } = useParams();

  const { data, loading, error } = useDataFetch("data/index.json");

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors de la récupération des données : {error.message}</p>;
  }
  return (
    <section className="result">
      {data && (
        <article>
          <Carousel data={data} id={id} />
          <div className="wrapper-blocs">
            <CaptionBlock data={data} id={id} />
            <ProfileBlock data={data} id={id} />
          </div>
          <div className="info-details">
            <Dropdown data={data} id={id} />
            <Dropdown data={data} id={id} />
          </div>
        </article>
      )}
    </section>
  );
};

export default Result;
