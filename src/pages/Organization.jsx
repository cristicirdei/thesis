import React, { useEffect, useState } from "react";

import TeamMemberCard from "../components/molecules/TeamMemberCard";

import { BACKEND_URL } from "../utils/constants";
import { opportunity, stakeholders } from "../utils/alphaConstants";
import { productVision, stakeholderNetwork } from "../utils/productConstants";

const Organization = () => {
  const [data, setData] = useState();
  const [c0, setC0] = useState([]);
  const [c1, setC1] = useState([]);
  const [c2, setC2] = useState([]);
  const [c3, setC3] = useState([]);
  const [o, setO] = useState();
  const [s, setS] = useState();
  const [v, setV] = useState();
  const [n, setN] = useState();

  useEffect(() => {
    const fetchProjectData = async () => {
      const id = JSON.parse(localStorage.getItem("user")).id._id;
      console.log(id);
      try {
        const response = await fetch(`${BACKEND_URL}/project/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: localStorage.getItem("token"),
          },
          withCredentials: true,
        });
        const json = await response.json();
        console.log(json);
        setData(json[0]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProjectData();
  }, []);

  useEffect(() => {
    const fetchCompetencyData = async (id) => {
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
        id === 0
          ? setC0(json)
          : id === 1
          ? setC1(json)
          : id === 2
          ? setC2(json)
          : setC3(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCompetencyData(0);
    fetchCompetencyData(1);
    fetchCompetencyData(2);
    fetchCompetencyData(3);
  }, []);

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

  const getObjLevelStatus = (objective, level) => {
    let levels;
    if (objective === "s") {
      levels = s?.levels;
    }
    if (objective === "o") {
      levels = o?.levels;
    }
    if (objective === "v") {
      levels = v?.levels;
    }
    if (objective === "n") {
      levels = n?.levels;
    }

    let resp;
    if (levels) {
      resp = levels[level]?.status;
    }

    return resp;
  };

  const getLevelStatus = (c_id) => {
    const levels = [
      { name: "Assists", number: 0 },
      { name: "Applies", number: 0 },
      { name: "Masters", number: 0 },
      { name: "Adapts", number: 0 },
      { name: "Innovates", number: 0 },
    ];
    const people = c_id?.levels;

    people?.forEach((p) => {
      levels[p?.level?.level - 1].number += 1;
    });

    console.log(c_id?.competency?.name, levels);
    return levels;
  };

  const getMaxLevelStatus = (c_id) => {
    const levels = getLevelStatus(c_id);
    let max = 0;
    levels.forEach((l, index) => {
      if (l.number >= max) {
        max = index;
      }
    });
    
    return max;
  };

  const competenecyLevels = [
    "Assists",
    "Applies ",
    "Masters",
    "Adapts",
    "Innovates",
  ];

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h1>Organization</h1>
      <div className="organization-container">
        <div className="section">
          <h2>Project</h2>
          <p>
            <span>Company: </span>
            {data?.company}
          </p>
          <p>
            <span>Project name: </span>
            {data?.name}
          </p>
          <p>
            <span>Details: </span>
            {data?.details}
          </p>
          <p>
            <span>Owned by: </span>
            {data?.owner.email}
          </p>
        </div>

        <div className="section">
          <h2>Team</h2>
          <div className="team">
            {data?.team.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
              ></TeamMemberCard>
            ))}
          </div>
        </div>

        <br></br>
        <h1>Progress</h1>

        <div className="section">
          <h2>Competencies Overview</h2>
          <p>
            The competencies required and the respective levels of the team as a
            whole
          </p>
          <br></br>

          <table className="table-competency">
            <tr>
              <td></td>
              {competenecyLevels.map((level, index) => (
                <td>
                  <p style={{ color: "#000" }}>{level}</p>
                </td>
              ))}
            </tr>
          </table>

          <table className="table-competency">
            <tr>
              <td>
                <h3>Stakeholder Representation</h3>
              </td>
              {competenecyLevels.map((level, index) => (
                <td className={getMaxLevelStatus(c0) >= index && "green"}>
                  {Array(index + 1)
                    .fill(0)
                    .map((nr) => (
                      <span className="fa fa-star"></span>
                    ))}
                  <br></br>
                  <p>
                    {getLevelStatus(c0)[index]?.number === 1
                      ? getLevelStatus(c0)[index]?.number.toString() +
                        " team member"
                      : getLevelStatus(c0)[index]?.number === 0
                      ? ""
                      : getLevelStatus(c0)[index]?.number.toString() +
                        " team members"}
                  </p>
                </td>
              ))}
            </tr>
          </table>

          <table className="table-competency">
            <tr>
              <td>
                <h3>Analysis</h3>
              </td>
              {competenecyLevels.map((level, index) => (
                <td className={getMaxLevelStatus(c1) >= index && "yellow"}>
                  {Array(index + 1)
                    .fill(0)
                    .map((nr) => (
                      <span className="fa fa-star"></span>
                    ))}
                  <br></br>
                  <p>
                    {getLevelStatus(c1)[index]?.number === 1
                      ? getLevelStatus(c1)[index]?.number.toString() +
                        " team member"
                      : getLevelStatus(c1)[index]?.number === 0
                      ? ""
                      : getLevelStatus(c1)[index]?.number.toString() +
                        " team members"}
                  </p>
                </td>
              ))}
            </tr>
          </table>

          <table className="table-competency">
            <tr>
              <td>
                <h3>Development</h3>
              </td>
              {competenecyLevels.map((level, index) => (
                <td className={getMaxLevelStatus(c2) >= index && "yellow"}>
                  {Array(index + 1)
                    .fill(0)
                    .map((nr) => (
                      <span className="fa fa-star"></span>
                    ))}{" "}
                  <br></br>
                  <p>
                    {getLevelStatus(c2)[index]?.number === 1
                      ? getLevelStatus(c2)[index]?.number.toString() +
                        " team member"
                      : getLevelStatus(c2)[index]?.number === 0
                      ? ""
                      : getLevelStatus(c2)[index]?.number.toString() +
                        " team members"}
                  </p>
                </td>
              ))}
            </tr>
          </table>

          <table className="table-competency">
            <tr>
              <td>
                <h3>Testing</h3>
              </td>
              {competenecyLevels.map((level, index) => (
                <td className={getMaxLevelStatus(c3) >= index && "yellow"}>
                  {Array(index + 1)
                    .fill(0)
                    .map((nr) => (
                      <span className="fa fa-star"></span>
                    ))}
                  <br></br>
                  <p>
                    {getLevelStatus(c3)[index]?.number === 1
                      ? getLevelStatus(c3)[index]?.number.toString() +
                        " team member"
                      : getLevelStatus(c3)[index]?.number === 0
                      ? ""
                      : getLevelStatus(c3)[index]?.number.toString() +
                        " team members"}
                  </p>
                </td>
              ))}
            </tr>
          </table>
        </div>

        <div className="section">
          <h2>Alphas & Work Products Progress</h2>

          <table className="table-alpha">
            <tr>
              <td></td>
              {stakeholders.states.map((state, index) => (
                <td>
                  <p style={{ color: "#000" }}>{state.name}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <h3>Stakeholders Alpha</h3>
              </td>
              {stakeholders.states.map((state, index) => (
                <td>
                  <div
                    className={
                      getObjLevelStatus("s", state.nr) === "complete"
                        ? "green"
                        : getObjLevelStatus("s", state.nr) === "incomplete"
                        ? "yellow"
                        : "gray"
                    }
                  ></div>
                </td>
              ))}
            </tr>
          </table>

          <table className="table-alpha">
            <tr>
              <td></td>
              {opportunity.states.map((state, index) => (
                <td>
                  <p style={{ color: "#000" }}>{state.name}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <h3>Opportunity Alpha</h3>
              </td>
              {opportunity.states.map((state, index) => (
                <td>
                  <div
                    className={
                      getObjLevelStatus("o", state.nr) === "complete"
                        ? "green"
                        : getObjLevelStatus("o", state.nr) === "incomplete"
                        ? "yellow"
                        : "gray"
                    }
                  ></div>
                </td>
              ))}
            </tr>
          </table>

          <table className="table-alpha">
            <tr>
              <td></td>
              {productVision.states.map((state, index) => (
                <td>
                  <p style={{ color: "#000" }}>{state.name}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <h3>Product Vision Work Product</h3>
              </td>
              {productVision.states.map((state, index) => (
                <td>
                  <div
                    className={
                      getObjLevelStatus("v", state.nr) === "complete"
                        ? "green"
                        : getObjLevelStatus("v", state.nr) === "incomplete"
                        ? "yellow"
                        : "gray"
                    }
                  ></div>
                </td>
              ))}
              <td></td>
            </tr>
          </table>

          <table className="table-alpha">
            <tr>
              <td></td>
              {stakeholderNetwork.states.map((state, index) => (
                <td>
                  <p style={{ color: "#000" }}>{state.name}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <h3>Stakeholder Network Work Product</h3>
              </td>
              {stakeholderNetwork.states.map((state, index) => (
                <td>
                  <div
                    className={
                      getObjLevelStatus("n", state.nr) === "complete"
                        ? "green"
                        : getObjLevelStatus("n", state.nr) === "incomplete"
                        ? "yellow"
                        : "gray"
                    }
                  ></div>
                </td>
              ))}
              <td></td>
            </tr>
          </table>
        </div>
        <div
          className="section"
          style={{ border: "none", marginTop: "-1rem", paddingTop: "0" }}
        >
          <table className="table-alpha" style={{ opacity: "0.8" }}>
            <tr>
              <td>
                <h4>Legend:</h4>
              </td>
              <td>
                <div className="gray">
                  <p>No Status</p>
                </div>
              </td>
              <td>
                <div className="yellow">
                  <p>Incomplete</p>
                </div>
              </td>
              <td>
                <div className="green">
                  <p>Complete</p>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Organization;
