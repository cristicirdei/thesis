import React from "react";
import { Link } from "react-router-dom";

const MenuButton = ({ link, page, description }) => {
  return (
    <Link
      to={link}
      className="menuButtonContainer"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div className="menuButton">
        <h1>{page}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
};
export default MenuButton;
