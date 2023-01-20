// a card element representing an activity

import React from "react";
import { Link } from "react-router-dom";

import activityIcon from "../../resources/activity.png";
import activitySpaceIcon from "../../resources/activity_space.png";

const ActivityCard = ({ link, name, description, space }) => {
  return (
    <Link
      to={link}
      className="activity-card-link"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div className="activity-card">
        <div className="details">
          <img className="img1" src={activityIcon} alt="activity"></img>
          <h2>{name}</h2>
          <h4>{description}</h4>
        </div>

        <div className="subsol">
          <p>{space}</p>
          <img
            className="img2"
            src={activitySpaceIcon}
            alt="activity space"
          ></img>
        </div>
      </div>
    </Link>
  );
};
export default ActivityCard;
