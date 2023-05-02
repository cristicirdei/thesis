import React, { useState, useEffect } from "react";
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

  const [o, setO] = useState();
  const [s, setS] = useState();
  const [v, setV] = useState();
  const [n, setN] = useState();
  useEffect(() => {
    const fetchObjectiveData = async (id) => {
      const id_p = JSON.parse(localStorage.getItem("user")).id._id;
      try {
        const response = await fetch(`${BACKEND_URL}/objective/${id_p}/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        const json = await response.json();
        console.log(json);
        id === "o"
          ? setO(json)
          : id === "s"
          ? setS(json)
          : id === "v"
          ? setV(json)
          : setN(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchObjectiveData("s");
    fetchObjectiveData("o");
    fetchObjectiveData("v");
    fetchObjectiveData("n");
  }, []);

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

  const calculatePercentage = (array) => {
    let sum = 0;
    array.forEach((x) => x?.status === "complete" && (sum += 1));
    return Math.ceil((sum / array.length) * 100);
  };

  const getPercentage = (activity) => {
    if (activity === 0) {
      return calculatePercentage([
        o?.levels[0],
        o?.levels[1],
        o?.levels[2],
        v?.levels[0],
        v?.levels[1],
        v?.levels[2],
      ]);
    }

    if (activity === 1) {
      return calculatePercentage([
        s?.levels[0],
        s?.levels[1],
        s?.levels[2],
        n?.levels[0],
        n?.levels[1],
        n?.levels[2],
      ]);
    }

    if (activity === 2) {
      return calculatePercentage([s?.levels[4], o?.levels[4]]);
    }

    if (activity === 3) {
      return calculatePercentage([s?.levels[5], o?.levels[5]]);
    }

    return 0;
  };

  const getCompletionStatus = (p) => {
    let status;
    p === 0
      ? (status = "Planned")
      : p === 100
      ? (status = "Complete")
      : (status = "Progressing");
    return status;
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
              status={getCompletionStatus(getPercentage(i))}
              progress={getPercentage(i)}
            ></ActivityStatus>
          ))}
      </div>
    </div>
  );
};

export default Activities;
