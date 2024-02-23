import React from "react";

const Banner = ({ title, page }) => {
  return <div className={`banner-${page}`}>{title && <h1>{title} </h1>}</div>;
};

export default Banner;
