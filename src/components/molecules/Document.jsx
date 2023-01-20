import React from "react";
import { Link } from "react-router-dom";

const Document = ({ name, content, link, type }) => {
  return (
    <Link to={link} style={{ color: "inherit", textDecoration: "none" }}>
      <div className={type === "document" ? "document" : "note"}>
        <h5>{name}</h5>
      </div>
    </Link>
  );
};
export default Document;
