import React from "react";
import Tag from "./Tag";

const CaptionBlock = ({ data, id }) => {
  const title = data?.find((item) => item.id === id).title;
  const location = data?.find((item) => item.id === id).location;
  const tags = data?.find((item) => item.id === id).tags;
  return (
    <div className="wrapper">
      <h2>{title} </h2>
      <p>{location} </p>
      <ul className="tags">
        {tags &&
          tags.length > 0 &&
          tags.map((tag, i) => <Tag key={i} tag={tag} />)}
      </ul>
    </div>
  );
};

export default CaptionBlock;
