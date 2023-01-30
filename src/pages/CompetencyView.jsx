import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

import Document from "../components/molecules/Document";
import TeamMemberCompetency from "../components/molecules/TeamMemberCompetency";

import { competenciesConstants } from "../utils/competenciesConstants";
import { customStyles_2 } from "../utils/modalStyleConstants";

import competencyCustomerIcon from "../resources/competency_customer.png";
import competencySolutionIcon from "../resources/competency_solution.png";
import userIcon from "../resources/user-solid.svg";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const CompetencyView = () => {
  const { id } = useParams();
  const competency = competenciesConstants[id];

  /* set height of section-2*/
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  /* ----------------------*/

  const [modalState, setModalState] = useState({
    viewNote: false,
    addNote: false,
  });

  let customStyles = customStyles_2;

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

  const notes = [
    { id: 1, title: "Title note #1", body: "body of note" },
    { id: 2, title: "Title note #2", body: "body of note two" },
  ];

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
      </Modal>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="section-1" ref={ref}>
        <div className="title">
          <img
            src={
              competency.area === "customer"
                ? competencyCustomerIcon
                : competencySolutionIcon
            }
            alt="competency"
          ></img>
          <h2>{competency.name}</h2>
        </div>

        <p>{competency.description}</p>

        <div className="subsection">
          <h3>Explanation</h3>
          <p>{competency.explanation.intro}</p>
          <ul>
            {competency.explanation.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <p>{competency.explanation.outro}</p>
        </div>

        <div className="subsection">
          <h3>Skills</h3>
          {competency.skills.map((item) => (
            <p>{item}</p>
          ))}
        </div>

        <div className="subsection">
          <h3>Team</h3>
          <TeamMemberCompetency
            name="Person #1"
            levelName="Masters"
            level={3}
            area={competency.area === "customer" ? "green" : "yellow"}
          ></TeamMemberCompetency>
        </div>

        <div className="subsection">
          <h3>Documents</h3>
          <div className="resource-container">
            <Document
              name="note #1"
              type="note"
              onClick={() => {
                openModal();
                setModalState({
                  viewNote: true,
                  addNote: false,
                });
              }}
            ></Document>
            <button
              className="addButton-simple"
              onClick={() => {
                openModal();
                setModalState({
                  viewNote: false,
                  addNote: true,
                });
              }}
            >
              <span className="fa fa-plus-square"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="section-2" style={{ height: height }}>
        <div className="sec-obj">
          <div className="sec-title">
            <h3>Competency Levels of {competency.name}</h3>
          </div>
          <div className="sec-subtitle">
            <img className="img-user" src={userIcon} alt="activity"></img>
            <p>Person #1</p>
          </div>

          {competency.levels.map((level) => (
            <div className="state">
              <h4>{level.name}</h4>
              <div className="steps">
                {level.conditions.map((con) => (
                  <label className="main">
                    {con.text}
                    <input type="checkbox"></input>
                    <span className="geekmark"></span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetencyView;
