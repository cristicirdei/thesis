import React from "react";
import { Link } from "react-router-dom";

import competencyCustomerIcon from "../../resources/competency_customer.png";
import competencySolutionIcon from "../../resources/competency_solution.png";

const CompetencyCard = ({ link, name, description, area }) => {
  return (
    <Link
      to={link}
      className="activity-card-link"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div className="activity-card">
        <div className="details">
          {area === "customer" ? (
            <img
              className="img1"
              src={competencyCustomerIcon}
              alt="competency"
            ></img>
          ) : (
            <img
              className="img1"
              src={competencySolutionIcon}
              alt="competency"
            ></img>
          )}
          <h2>{name}</h2>
          <h4>{description}</h4>
        </div>
      </div>
    </Link>
  );
};
export default CompetencyCard;
