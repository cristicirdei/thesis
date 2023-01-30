import React from "react";
import { Link } from "react-router-dom";

const Document = ({ name, content, link, type, onClick }) => {
  return (
    <Link
      to={link}
      style={{ color: "inherit", textDecoration: "none" }}
      onClick={onClick}
    >
      <div className={type === "document" ? "document" : "note"}>
        <h5>{name}</h5>
      </div>
    </Link>
  );
};
export default Document;
