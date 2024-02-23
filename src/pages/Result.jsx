import React, { useEffect, useState } from "react";
import CaptionBlock from "../components/CaptionBlock";
import ProfileBlock from "../components/ProfileBlock";
import Carousel from "../shared/Carousel";
import Dropdown from "../shared/Dropdown";
import { customFetch } from "../service/customFetch";
import { useParams } from "react-router-dom";

const Result = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await customFetch(`data/index.json`);
        setData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="result">
      {data && (
        <article>
          <Carousel data={data} id={id} />
          <CaptionBlock data={data} id={id} />
          <ProfileBlock data={data} id={id} />
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
