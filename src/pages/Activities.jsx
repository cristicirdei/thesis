import React, { useState } from "react";
import Modal from "react-modal";

import ActivityCard from "../components/molecules/ActivityCard";
import ActivityPlan from "../components/molecules/ActivityPlan";
import ActivityStatus from "../components/molecules/ActivityStatus";

import { activitiesConstants } from "../utils/activityConstants";
import { activitiesTestData } from "../utils/fakeData";
import { customStyles_0 } from "../utils/modalStyleConstants";

import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const Activities = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  let customStyles = customStyles_0;
  const [openedActivity, setOpenedActivity] = useState({
    id: null,
    startDate: null,
    endDate: null,
  });

  const handlePlanActivity = async (e) => {
    const id_p = JSON.parse(localStorage.getItem("user")).id._id;
    alert("at least i am here");
    try {
      const res = await axios.post(`${BACKEND_URL}/activity/plan/${id_p}`, {
        id: openedActivity.id,
        startDate: openedActivity.startDate,
        endDate: openedActivity.endDate,
      });
      console.log("res ", res);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="page">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="close" onClick={closeModal}>
          X
        </button>

        <form onSubmit={(e) => handlePlanActivity(e)}>
          <h3>Plan Activity</h3>
          <br></br>
          <p style={{ fontSize: "small", color: "gray" }}>Starting date</p>
          <input
            type="date"
            className="input-modal"
            style={{ width: "fit-content" }}
            onChange={(e) =>
              setOpenedActivity((previousState) => ({
                ...previousState,
                startDate: e.target.value,
              }))
            }
          ></input>
          <br></br>
          <p style={{ fontSize: "small", color: "gray" }}>Ending date</p>
          <input
            type="date"
            className="input-modal"
            style={{ width: "fit-content" }}
            onChange={(e) =>
              setOpenedActivity((previousState) => ({
                ...previousState,
                endDate: e.target.value,
              }))
            }
          ></input>

          <br></br>
          <input type="submit" className="save" value="Save"></input>
        </form>
      </Modal>
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
              onClick={(e) => {
                openModal();
                setOpenedActivity((previousState) => ({
                  ...previousState,
                  id: activity.id,
                }));
              }}
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
