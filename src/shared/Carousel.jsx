import React, { useState } from "react";
import arrow_back from "../images/arrow_back.png";
import arrow_forward from "../images/arrow_forward.png";

const Carousel = ({ data, id }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = data?.find((item) => item.id === id).pictures;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevImage}>
        <img src={arrow_back} alt="précédant" />{" "}
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
        className="hero-image"
      />
      <button className="arrow right" onClick={nextImage}>
        <img src={arrow_forward} alt="suivant" />
      </button>
      <p className="count">{currentImageIndex +1}/{images.length } </p>
    </div>
  );
};

export default Carousel;
