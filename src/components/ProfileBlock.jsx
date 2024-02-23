import React from "react";
import { ratingNumber } from "../utils/rating";

const ProfileBlock = ({ data, id }) => {
  const { name, picture } = data?.find((item) => item.id === id)?.host ||{};
  const rating = data?.find((item) => item.id === id)?.rating;
  const [firstName, lastName] = name?.split(" ") ||[];
  if (typeof name !== "string") {
    return null;
  }
  return (
    <div className="content-profile">
      <div className="identity">
        <p>
          {firstName}
          <br />
          {lastName}
        </p>
        <img src={picture} alt="profil de l'annonceur" />
      </div>
      <div className="rating">{ratingNumber(rating)} </div>
    </div>
  );
};

export default ProfileBlock;
