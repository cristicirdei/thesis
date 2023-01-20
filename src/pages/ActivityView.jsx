import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Task from "../components/molecules/Task";
import Document from "../components/molecules/Document";

import { opportunity, stakeholders } from "../utils/alphaConstants";
import { activitiesConstants } from "../utils/activityConstants";
import { productVision, stakeholderNetwork } from "../utils/productConstants";

import activityIcon from "../resources/activity.png";
import activitySpaceIcon from "../resources/activity_space.png";
import alphaIcon from "../resources/alpha.png";
import workProductIcon from "../resources/work_product_customer.png";

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

  return (
    <div className="page-split">
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
            <Task name="Task #1"></Task>
          </div>
        </div>

        <div className="subsection">
          <h3>Documents</h3>
          <div className="resource-container">
            <Document name="note #1" type="note"></Document>
            <Document name="doc.pdf" type="document"></Document>
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
              <div className="state">
                <h4>{state.name}</h4>
                <div className="steps">
                  {state.conditions.map((con) => (
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
        ))}
      </div>
    </div>
  );
};

export default ActivityView;
