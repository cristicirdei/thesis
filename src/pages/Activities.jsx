import React from "react";
import ActivityCard from "../components/molecules/ActivityCard";
import ActivityPlan from "../components/molecules/ActivityPlan";
import ActivityStatus from "../components/molecules/ActivityStatus";

import { activitiesConstants } from "../utils/activityConstants";
import { activitiesTestData } from "../utils/fakeData";

const Activities = () => {
  return (
    <div className="page">
      <h2>Activities</h2>
      <h4 className="slim">The Things To Do</h4>
      <div className="activities-container">
        {activitiesConstants &&
          activitiesConstants.map((activity, i) => (
            <ActivityCard
              link={`/activity/${i}`}
              name={activity.name}
              description={activity.description}
              space={activity.space}
            ></ActivityCard>
          ))}
      </div>

      <hr></hr>
      <h2>Plan Activities</h2>
      <h4 className="slim">Set a time period for each of the activities</h4>
      <div className="activities-container">
        {activitiesConstants &&
          activitiesConstants.map((activity, i) => (
            <ActivityPlan
              name={activity.name}
              startDate={activitiesTestData[i].startDate}
              endDate={activitiesTestData[i].endDate}
            ></ActivityPlan>
          ))}
      </div>

      <hr></hr>
      <h2>Current Status</h2>
      <div className="activities-container">
        {activitiesConstants &&
          activitiesConstants.map((activity, i) => (
            <ActivityStatus
              name={activity.name}
              status={activitiesTestData[i].status}
              progress={activitiesTestData[i].progress}
            ></ActivityStatus>
          ))}
      </div>
    </div>
  );
};

export default Activities;
