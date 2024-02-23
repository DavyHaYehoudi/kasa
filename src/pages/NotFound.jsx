import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <p>
        <img src="./images/404.png" alt="404" />{" "}
      </p>
      <p className="text-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default NotFound;
