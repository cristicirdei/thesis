import React from "react";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faSquarePlus);

const AddButton = ({ link, page }) => {
  return (
    <Link to={link}>
      <button className="addButton">
        <span>
          <FontAwesomeIcon icon="square-plus" />
        </span>
        {page}
      </button>
    </Link>
  );
};
export default AddButton;
