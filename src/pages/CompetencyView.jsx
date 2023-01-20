import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Document from "../components/molecules/Document";
import TeamMemberCompetency from "../components/molecules/TeamMemberCompetency";

import { competenciesConstants } from "../utils/competenciesConstants";

import competencyCustomerIcon from "../resources/competency_customer.png";
import competencySolutionIcon from "../resources/competency_solution.png";
import userIcon from "../resources/user-solid.svg";

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

  return (
    <div className="page-split">
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
            <Document name="note #1" type="note"></Document>
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
                    {con}
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
