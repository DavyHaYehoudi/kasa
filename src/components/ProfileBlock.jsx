import React from "react";

const ProfileBlock = ({ data, id }) => {
  const { name, picture, rating } = data?.find((item) => item.id === id).host;
  return (
    <div className="content-profile">
      <div className="identity">
        <p>{name} </p>
        <img src={picture} alt="profil de l'annonceur" />
      </div>
      <div className="rating">{rating}</div>
    </div>
  );
};

export default ProfileBlock;
