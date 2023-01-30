import React from "react";

const ActivityPlan = ({ name, startDate, endDate, onClick }) => {
  return (
    <div className="activity-plan" onClick={onClick}>
      <h4>{name}</h4>
      <div>
        <p>
          <span>Starting Date:</span> {startDate}
        </p>
        <p>
          <span>Ending Date:</span> {endDate}
        </p>
      </div>
    </div>
  );
};
export default ActivityPlan;
