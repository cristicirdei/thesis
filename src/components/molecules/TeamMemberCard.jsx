import React from "react";

import userIcon from "../../resources/user-solid.svg";

const TeamMemberCard = ({ name, role }) => {
  return (
    <div className="member-card">
      <div className="details">
        <img className="img-user" src={userIcon} alt="activity"></img>
      </div>

      <p>
        <span>Name: </span>
        {name}
      </p>
      <p>
        <span>Role: </span>
        {role}
      </p>
    </div>
  );
};
export default TeamMemberCard;
