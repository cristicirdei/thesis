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

import { customStyles_1, customStyles_2 } from "../utils/modalStyleConstants";

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

  const notes = [
    { id: 1, title: "Title note #1", body: "body of note" },
    { id: 2, title: "Title note #2", body: "body of note two" },
  ];
  const tasks = [
    {
      id: 1,
      title: "Title task #1",
      body: "body of task",
      deadline: "23.04.2023",
    },
    {
      id: 2,
      title: "Title task #2",
      body: "body of task two",
      deadline: "13.04.2023",
    },
  ];

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
            <h2>{notes[0].title}</h2>
            <p className="modal-body">{notes[0].body}</p>
          </>
        )}

        {modalState.viewTask && (
          <>
            <h2>{tasks[0].title}</h2>
            <h5>Deadline: {tasks[0].deadline}</h5>
            <p className="modal-body"> {tasks[0].body}</p>
            <label
              className="main"
              style={{
                float: "right",
                marginTop: "2rem",
                marginBottom: "0",
              }}
            >
              Done
              <input type="checkbox"></input>
              <span className="geekmark-2"></span>
            </label>
          </>
        )}

        {modalState.addNote && (
          <form>
            <h3>Add Note</h3>
            <br></br>
            <input
              type="text"
              name="Title"
              placeholder="Title"
              className="input-modal"
              onChange
            ></input>
            <br></br>
            <textarea
              rows="7"
              cols="50"
              name="Note body"
              placeholder="Body"
              className="input-modal"
              onChange
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
          <form>
            <input
              type="text"
              name="Title"
              placeholder="Task title"
              className="input-modal"
              onChange
            ></input>
            <p style={{ fontSize: "small", color: "gray" }}>Deadline</p>
            <input
              type="date"
              name="Deadline"
              placeholder="Deadline"
              className="input-modal"
              style={{ width: "fit-content" }}
              onChange
            ></input>
            <textarea
              rows="7"
              cols="50"
              name="About task"
              placeholder="Task details"
              className="input-modal"
              onChange
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
            <Task
              id={1}
              name="Task #1"
              onClick={() => {
                openModal();
                setModalState({
                  viewNote: false,
                  viewTask: true,
                  addNote: false,
                  addTask: false,
                });
              }}
            ></Task>
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
            <Document
              id={1}
              name="note #1"
              type="note"
              onClick={() => {
                openModal();
                setModalState({
                  viewNote: true,
                  viewTask: false,
                  addNote: false,
                  addTask: false,
                });
              }}
            ></Document>
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
                      {con.text}
                      <input type="checkbox"></input>
                      <span
                        className={
                          active(id, objective.name, state.name)
                            ? "geekmark"
                            : "geekmark-disabled"
                        }
                      ></span>
                    </label>
                  ))}
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
