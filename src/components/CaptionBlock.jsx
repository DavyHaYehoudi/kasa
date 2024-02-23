import React from "react";
import Tag from "./Tag";

const CaptionBlock = ({ data, id }) => {
  const { title, location, tags } = data?.find((item) => item.id === id);
  return (
    <div className="content-caption">
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
