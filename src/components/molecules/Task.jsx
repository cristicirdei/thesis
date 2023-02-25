import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineCheck } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";

const Task = ({ name, deadline, state, link, onClick }) => {
  const date = new Date(deadline).toDateString();

  return (
    <Link
      to={link}
      style={{ color: "inherit", textDecoration: "none" }}
      onClick={onClick}
    >
      <div className="task">
        <h5>{name}</h5>
        {state === "undefined" ? (
          <h6>
            <BsCalendarEvent />
            {" Due " + date}
          </h6>
        ) : (
          <h6>
            {state + " "}
            <span style={{ color: "green" }}>
              <AiOutlineCheck />
            </span>
          </h6>
        )}
      </div>
    </Link>
  );
};
export default Task;
