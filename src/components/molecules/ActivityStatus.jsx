import React from "react";

const ActivityStatus = ({ name, status, progress }) => {
  return (
    <div className="activity-status">
      <div>
        <h4>{name}</h4>
        <p>{status}</p>
      </div>
      <div className="status-progress">
        <div className="status-bar">
          <div
            className="status-bar-completed"
            style={{ width: `${progress + 1}%` }}
          ></div>
        </div>
        <p>{progress}%</p>
      </div>
    </div>
  );
};
export default ActivityStatus;
