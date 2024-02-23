import React from "react";
import CaptionBlock from "../components/CaptionBlock";
import ProfileBlock from "../components/ProfileBlock";
import Carousel from "../shared/Carousel";
import Dropdown from "../shared/Dropdown";
import { useNavigate, useParams } from "react-router-dom";
import useDataFetch from "../service/hook/useDataFetch";

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useDataFetch("data/index.json");
  const selectedItem = data?.find((item) => item.id === id);
  if (!selectedItem) {
    return navigate("/notFound");
  }

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur lors de la récupération des données : {error.message}</p>;
  }
  const { description, equipments } = selectedItem;
  return (
    <section className="result">
      {data && (
        <article>
          <Carousel data={data} id={id} />
          <div className="wrapper-blocs">
            <CaptionBlock data={data} id={id} />
            <ProfileBlock data={data} id={id} />
          </div>
          {description && equipments && (
            <div className="info-details">
              <Dropdown title={"Description"} children={description} />
              <Dropdown title={"Équipement"} children={equipments} />
            </div>
          )}
        </article>
      )}
    </section>
  );
};

export default Result;
