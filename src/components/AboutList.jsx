import React from "react";
import { aboutList } from "../data/aboutList";
import AboutListItem from "./AboutListItem";

const AboutList = () => {
  return (
    <section>
      {aboutList.map((item,i) => (
        <AboutListItem key={i} item={item} />
      ))}
    </section>
  );
};

export default AboutList;
