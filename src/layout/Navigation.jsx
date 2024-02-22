import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
