import React from "react";
import { Link } from "react-router-dom";

const Task = ({ name, content, link, onClick }) => {
  return (
    <Link
      to={link}
      style={{ color: "inherit", textDecoration: "none" }}
      onClick={onClick}
    >
      <div className="task">
        <h5>{name}</h5>
      </div>
    </Link>
  );
};
export default Task;
