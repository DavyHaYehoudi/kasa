import React from "react";
import Navigation from "../layout/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/images/LOGO.svg" alt="logo" />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
