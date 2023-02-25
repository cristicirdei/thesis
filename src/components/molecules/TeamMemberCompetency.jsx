import React from "react";

import userIcon from "../../resources/user-solid.svg";

const TeamMemberCompetency = ({ name, level, area, levelName, onClick }) => {
  return (
    <div className="member-card-com" onClick={onClick}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="details">
        <img className="img-user" src={userIcon} alt="user"></img>
        <p>{name}</p>
      </div>

      <div className="competency-level">
        <p className={area}>
          {level} <span className="fa fa-star"></span>
        </p>
        <p>{levelName}</p>
      </div>
    </div>
  );
};
export default TeamMemberCompetency;
