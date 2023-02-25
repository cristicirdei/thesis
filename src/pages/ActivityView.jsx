import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

import Task from "../components/molecules/Task";
import Document from "../components/molecules/Document";

import { opportunity, stakeholders } from "../utils/alphaConstants";
import { activitiesConstants } from "../utils/activityConstants";
import { productVision, stakeholderNetwork } from "../utils/productConstants";

import activityIcon from "../resources/activity.png";
import activitySpaceIcon from "../resources/activity_space.png";
import alphaIcon from "../resources/alpha.png";
import workProductIcon from "../resources/work_product_customer.png";
import { AiOutlineCheck } from "react-icons/ai";

import { customStyles_1, customStyles_2 } from "../utils/modalStyleConstants";

import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const ActivityView = () => {
  const { id } = useParams();
  const activity = activitiesConstants[id];
  const objectives =
    parseInt(id) === 0
      ? [structuredClone(opportunity), structuredClone(productVision)]
      : parseInt(id) === 1
      ? [structuredClone(stakeholders), structuredClone(stakeholderNetwork)]
      : parseInt(id) === 2
      ? [structuredClone(stakeholders), structuredClone(opportunity)]
      : [structuredClone(stakeholders), structuredClone(opportunity)];

  /* set height of section-2*/
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  /* ----------------------*/

  const [modalState, setModalState] = useState({
    viewNote: false,
    viewTask: false,
    addNote: false,
    addTask: false,
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  let customStyles;
  modalState.viewTask === true || modalState.addTask === true
    ? (customStyles = structuredClone(customStyles_1))
    : (customStyles = structuredClone(customStyles_2));

  const [note, setNote] = useState({ title: null, body: null });
  const [openedNote, setOpenedNote] = useState();
  const [task, setTask] = useState({ title: null, body: null, deadline: null });
  const [openedTask, setOpenedTask] = useState();
  const [data, setData] = useState();
  const [objectivesStatus, setObjectivesStatus] = useState();

  const handleAddNote = async (e) => {
    const id_p = JSON.parse(localStorage.getItem("user")).id._id;

    try {
      const res = await axios.post(
        `${BACKEND_URL}/activity/note/${id_p}/${id}`,
        {
          title: note.title,
          body: note.body,
        }
      );
      console.log("res ", res);
    } catch (e) {
      alert(e);
    }
  };

  const handleAddTask = async (e) => {
    const id_p = JSON.parse(localStorage.getItem("user")).id._id;
    try {
      const res = await axios.post(
        `${BACKEND_URL}/activity/task/${id_p}/${id}`,
        {
          title: task.title,
          body: task.body,
          deadline: task.deadline,
        }
      );
      console.log("res ", res);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const fetchActivityData = async () => {
      const id_p = JSON.parse(localStorage.getItem("user")).id._id;
      try {
        const response = await fetch(`${BACKEND_URL}/activity/${id_p}/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        const json = await response.json();
        console.log(json);
        setObjectivesStatus([
          ...json.objectives[0].checkpoints,
          ...json.objectives[1].checkpoints,
        ]);
        setData(json.activity);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchActivityData();
  }, [id]);

  const handleTaskComplete = async (e) => {
    // e.target.checked = true;

    const id_p = JSON.parse(localStorage.getItem("user")).id._id;
    //const task = openedTask._id;

    alert(openedTask._id);

    try {
      const res = await axios.post(
        `${BACKEND_URL}/activity/task/${id_p}/${id}/${openedTask._id}`,
        {}
      );
      window.location.reload(true);
      console.log("res ", res);
    } catch (e) {
      alert(e);
    }
  };

  const active = (activity, alpha, state) => {
    if (
      activity === "0" &&
      ["Opportunity", "Product Vision"].includes(alpha) &&
      [
        "Identified",
        "Solution Needed",
        "Value Established",
        "Need Identified",
        "Solution Envisaged",
        "Value Release Strategy Outlined",
      ].includes(state)
    ) {
      return true;
    }

    if (
      activity === "1" &&
      ["Stakeholders", "Stakeholder Network"].includes(alpha) &&
      [
        "Recognized",
        "Represented",
        "Involved",
        "Stakeholder Types Described",
        "Representatives Named",
        "Communication Plans Outlined",
      ].includes(state)
    ) {
      return true;
    }

    if (
      activity === "2" &&
      ["Stakeholders", "Opportunity"].includes(alpha) &&
      [
        "Recognized",
        "Represented",
        "Involved",
        "In Agreement",
        "Identified",
        "Solution Needed",
        "Value Established",
        "Viable",
      ].includes(state)
    ) {
      return true;
    }

    if (
      activity === "3" &&
      ["Stakeholders", "Opportunity"].includes(alpha) &&
      [
        "Recognized",
        "Represented",
        "Involved",
        "In Agreement",
        "Satisfied for Deployment",
        "Identified",
        "Solution Needed",
        "Value Established",
        "Viable",
        "Addressed",
      ].includes(state)
    ) {
      return true;
    }
  };

  const handleChange = async (e) => {
    const id_p = JSON.parse(localStorage.getItem("user")).id._id;
    const change = e.target.value;

    try {
      const res = await axios.post(
        `${BACKEND_URL}/objective/${id_p}/${change}`
      );
      console.log("res ", res.data);
    } catch (e) {
      alert(e);
    }
  };

  const getConditionStatus = (id) => {
    const condition = objectivesStatus?.find((el) => el.c_id === id);
    return condition?.status;
  };

  const getLevelStatus = (level_name) => {
    /*const person = data?.levels.find((el) => el.person._id === person_id);
    const level = person?.level.level;

    let response = false;
    if (level_name === "Assists" && level >= 1) {
      response = true;
    }
    if (level_name === "Applies" && level >= 2) {
      response = true;
    }
    if (level_name === "Masters" && level >= 3) {
      response = true;
    }
    if (level_name === "Adapts" && level >= 4) {
      response = true;
    }
    if (level_name === "Innovates" && level >= 5) {
      response = true;
    }
    return response;*/
  };

  return (
    <div className="page-split">
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
        {modalState.viewNote && (
          <>
            <h2>{openedNote.title}</h2>
            <p className="modal-body">{openedNote.body}</p>
          </>
        )}

        {modalState.viewTask && (
          <>
            <h2>{openedTask.title}</h2>

            <p className="modal-body"> {openedTask.body}</p>

            <hr
              style={{
                margin: "2rem 0 1rem 0",
                backgroundColor: "black",
                opacity: "0.2",
              }}
            ></hr>
            <div>
              {openedTask.state === "undefined" ? (
                <h2
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "0.2rem 0.5rem",
                    width: "fit-content",
                    fontSize: "0.8rem",
                    justifySelf: "center",
                    opacity: "0.6",
                    float: "left",
                  }}
                >
                  Deadline: {new Date(openedTask.deadline).toDateString()}
                </h2>
              ) : (
                ""
              )}

              {openedTask.state === "undefined" ? (
                <label
                  className="main"
                  style={{
                    float: "right",
                    marginBottom: "0",
                  }}
                >
                  Done
                  <input
                    type="checkbox"
                    onChange={(e) => handleTaskComplete(e)}
                  ></input>
                  <span className="geekmark-2"></span>
                </label>
              ) : (
                <h4
                  style={{
                    float: "right",
                    marginBottom: "0",
                  }}
                >
                  Complete{" "}
                  <span style={{ color: "green" }}>
                    <AiOutlineCheck />
                  </span>
                </h4>
              )}
            </div>
          </>
        )}

        {modalState.addNote && (
          <form onSubmit={(e) => handleAddNote(e)}>
            <h3>Add Note</h3>
            <br></br>
            <input
              type="text"
              name="Title"
              placeholder="Title"
              className="input-modal"
              onChange={(e) =>
                setNote((previousState) => ({
                  ...previousState,
                  title: e.target.value,
                }))
              }
            ></input>
            <br></br>
            <textarea
              rows="7"
              cols="50"
              name="Note body"
              placeholder="Body"
              className="input-modal"
              onChange={(e) =>
                setNote((previousState) => ({
                  ...previousState,
                  body: e.target.value,
                }))
              }
            ></textarea>
            <br></br>
            <br></br>
            <h3>Or Add a Document</h3>
            <br></br>
            <input
              type="file"
              name="Document"
              className="input-modal"
              accept=".pdf"
              onChange
            ></input>

            <br></br>
            <input type="submit" className="save" value="Save"></input>
          </form>
        )}

        {modalState.addTask && (
          <form onSubmit={(e) => handleAddTask(e)}>
            <input
              type="text"
              name="Title"
              placeholder="Task title"
              className="input-modal"
              onChange={(e) =>
                setTask((previousState) => ({
                  ...previousState,
                  title: e.target.value,
                }))
              }
            ></input>
            <p style={{ fontSize: "small", color: "gray" }}>Deadline</p>
            <input
              type="date"
              name="Deadline"
              placeholder="Deadline"
              className="input-modal"
              style={{ width: "fit-content" }}
              onChange={(e) =>
                setTask((previousState) => ({
                  ...previousState,
                  deadline: e.target.value,
                }))
              }
            ></input>
            <textarea
              rows="7"
              cols="50"
              name="About task"
              placeholder="Task details"
              className="input-modal"
              onChange={(e) =>
                setTask((previousState) => ({
                  ...previousState,
                  body: e.target.value,
                }))
              }
            ></textarea>

            <br></br>
            <input type="submit" className="save" value="Save"></input>
          </form>
        )}
      </Modal>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="section-1" ref={ref}>
        <div className="title">
          <img src={activityIcon} alt="activity"></img>
          <h2>{activity.name}</h2>
        </div>
        <div className="subtitle">
          <img src={activitySpaceIcon} alt="activity space"></img>
          <p>Related to {activity.space}</p>
        </div>
        <p>{activity.description}</p>

        <div className="subsection">
          <h3>On Entry</h3>
          {activity.details.entry.length ? (
            activity.details.entry.map((entry) => (
              <div className="objective">
                <img src={alphaIcon} alt="alpha"></img>
                <p>
                  {entry.name}: {entry.state}
                </p>
              </div>
            ))
          ) : (
            <p>No input alphas</p>
          )}
          <div className="status">
            <p>Status</p>
          </div>
        </div>

        <div className="subsection">
          <h3>Competencies Required</h3>
          {activity.details.competencies.map((com) => (
            <div className="competency-level">
              <p className={com.area}>
                {com.level} <span className="fa fa-star"></span>
              </p>
              <p>{com.name}</p>
            </div>
          ))}

          <div className="status">
            <p>Status</p>
          </div>
        </div>

        <div className="subsection">
          <h3>On Exit</h3>
          {activity.details.exit.map((exit) => (
            <div className="objective">
              <img
                src={exit.type === "alpha" ? alphaIcon : workProductIcon}
                alt="exit"
              ></img>
              <p>
                {exit.name}: {exit.state}
              </p>
            </div>
          ))}

          <div className="status">
            <p>Status</p>
          </div>
        </div>

        <div className="subsection">
          <h3>Tasks</h3>
          <div className="resource-container">
            {data?.tasks.map((task, index) => (
              <Task
                name={task.title}
                state={task.state}
                deadline={task.deadline}
                onClick={() => {
                  setOpenedTask(task);
                  openModal();
                  setModalState({
                    viewNote: false,
                    viewTask: true,
                    addNote: false,
                    addTask: false,
                  });
                }}
              ></Task>
            ))}
            <button
              className="addButton-simple"
              onClick={() => {
                openModal();
                setModalState({
                  viewNote: false,
                  viewTask: false,
                  addNote: false,
                  addTask: true,
                });
              }}
            >
              <span className="fa fa-plus-square"></span>
            </button>
          </div>
        </div>

        <div className="subsection">
          <h3>Documents</h3>
          <div className="resource-container">
            {data?.notes.map((note, index) => (
              <Document
                name={note.title}
                type={note.body}
                onClick={() => {
                  setOpenedNote(note);
                  openModal();
                  setModalState({
                    viewNote: true,
                    addNote: false,
                  });
                }}
              ></Document>
            ))}
            <Document name="doc.pdf" type="document"></Document>
            <button
              className="addButton-simple"
              onClick={() => {
                openModal();
                setModalState({
                  viewNote: false,
                  viewTask: false,
                  addNote: true,
                  addTask: false,
                });
              }}
            >
              <span className="fa fa-plus-square"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="section-2" style={{ height: height }}>
        {objectives.map((objective) => (
          <div className="sec-obj">
            <div className="sec-title">
              <img
                src={objective.type === "alpha" ? alphaIcon : workProductIcon}
                alt="activity"
              ></img>
              <h3>{objective.name}</h3>
            </div>
            <div className="sec-subtitle">
              {objective.type === "alpha" ? (
                <p>States of {objective.name} Alpha</p>
              ) : (
                <p>{objective.name} Levels of Detail</p>
              )}
            </div>

            {objective.states.map((state) => (
              <div
                className={
                  active(id, objective.name, state.name)
                    ? "state"
                    : "state  disabled"
                }
              >
                <h4>{state.name}</h4>

                <div className="steps">
                  {state.conditions.map((con) => (
                    <label className="main">
                      {con.text + " " + con.id}
                      {getConditionStatus(con.id) === "complete" ? (
                        <input
                          type="checkbox"
                          value={con.id}
                          checked={true}
                          disabled
                        ></input>
                      ) : (
                        <input
                          type="checkbox"
                          value={con.id}
                          defaultChecked={false}
                          onChange={(e) => handleChange(e)}
                          disabled={
                            active(id, objective.name, state.name)
                              ? false
                              : true
                          }
                        ></input>
                      )}

                      <span
                        className={
                          active(id, objective.name, state.name)
                            ? "geekmark"
                            : "geekmark-disabled"
                        }
                      ></span>
                    </label>
                  ))}
                  {state.name === "Recognized" &&
                  active(id, objective.name, state.name) ? (
                    <h3>
                      <span>
                        {objective.type === "alpha" ? "State " : "Level "}
                        <b>{state.name}</b> Reached
                      </span>
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityView;
