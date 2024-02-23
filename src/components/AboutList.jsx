import React from "react";
import { aboutList } from "../data/aboutList";
import AboutListItem from "./AboutListItem";

const AboutList = () => {
  return (
    <section>
      <ul>
        {aboutList.map((item, i) => (
          <AboutListItem key={i} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default AboutList;
