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

import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const CompetencyView = () => {
  const { id } = useParams();
  const competency = competenciesConstants[id];

  /* set height of section-2*/
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
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

  const getConditionStatus = (person_id, id) => {
    const person = data?.competency.people.find((el) => el._id === person_id);
    const condition = person?.checkpoints.find((el) => el.c_id === id);
    console.log("-- ", person_id, id, condition?.status);
    return condition?.status;
  };

  const getLevelStatus = (person_id, level_name) => {
    const person = data?.levels.find((el) => el.person._id === person_id);
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
    return response;
  };

  const [note, setNote] = useState({ title: null, body: null });
  const [openedNote, setOpenedNote] = useState();
  const [selectedPerson, setSelectedPerson] = useState();
  const [data, setData] = useState();

  const handleChange = async (e) => {
    // e.target.checked = true;

    const id_p = JSON.parse(localStorage.getItem("user")).id._id;
    const change = e.target.value;

    try {
      const res = await axios.post(
        `${BACKEND_URL}/competency/${id_p}/${id}/${selectedPerson.user._id}`,
        {
          condition: change,
        }
      );
      // window.location.reload(true);
      console.log("res ", res);
      setData(res.data);
    } catch (e) {
      alert(e);
    }
  };

  const handleAddNote = async (e) => {
    const id_p = JSON.parse(localStorage.getItem("user")).id._id;
    try {
      const res = await axios.post(
        `${BACKEND_URL}/competency/note/${id_p}/${id}`,
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

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    const fetchCompetencyData = async () => {
      const id_p = JSON.parse(localStorage.getItem("user")).id._id;
      try {
        const response = await fetch(
          `${BACKEND_URL}/competency/${id_p}/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: localStorage.getItem("token"),
            },
            withCredentials: true,
          }
        );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCompetencyData();
  }, [id]);

  useEffect(() => {}, [data, selectedPerson]);

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
            {competency.explanation.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{competency.explanation.outro}</p>
        </div>

        <div className="subsection">
          <h3>Skills</h3>
          {competency.skills.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="subsection">
          <h3>Team</h3>
          <div className="team">
            {data?.levels.map((person) => (
              <TeamMemberCompetency
                name={person.person.name}
                levelName={person.level.name}
                level={person.level.level}
                area={competency.area === "customer" ? "green" : "yellow"}
                onClick={(e) => {
                  setSelectedPerson(
                    data?.competency.people.find(
                      (el) => el.user._id === person.person._id
                    )
                  );
                  console.log(selectedPerson);
                }}
              ></TeamMemberCompetency>
            ))}
          </div>
        </div>

        <div className="subsection">
          <h3>Documents</h3>
          <div className="resource-container">
            {data?.competency.notes.map((note, index) => (
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
            <p>
              {selectedPerson?.user.name ||
                "Select a person from Team to see their competency levels "}
            </p>
          </div>

          {competency.levels.map(
            (level) =>
              selectedPerson && (
                <div className="state">
                  <h4>{level.name}</h4>
                  <div className="steps">
                    {level.conditions.map((con) => (
                      <label className="main">
                        {con.text}
                        {getConditionStatus(selectedPerson?._id, con.id) ===
                        "complete" ? (
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
                          ></input>
                        )}

                        <span className="geekmark"></span>
                      </label>
                    ))}

                    {getLevelStatus(selectedPerson?.user._id, level.name) ? (
                      <h3>
                        <span>
                          Level <b>{level.name}</b> Reached
                        </span>
                      </h3>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetencyView;
