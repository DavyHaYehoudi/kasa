import React, { useState } from "react";
import arrow from "../images/arrow_open.png"

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="title" onClick={handleToggle}>
        <h3>{title}</h3>
        <img
          src={arrow}
          className={`arrow ${isOpen ? "open" : ""}`}
          alt="flèche indiquant l'affichage du contenu"
        />
      </div>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default Dropdown;
