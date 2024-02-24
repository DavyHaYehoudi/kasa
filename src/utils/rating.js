import starActive from "../images/star-active.png";
import starInactive from "../images/star-inactive.png";
export const ratingNumber = (rating) => {
  parseInt(rating, 10);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < rating ? starActive : starInactive}
      alt={`Star ${index + 1}`}
    />
  ));
  return stars;
};
