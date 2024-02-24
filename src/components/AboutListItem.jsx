import React from "react";
import Dropdown from "../shared/Dropdown";

const AboutListItem = ({ item }) => {
  return (
    <li>
      <article>
        <Dropdown title={item.title} children={item.content} />
      </article>
    </li>
  );
};

export default AboutListItem;
