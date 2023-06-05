import React from "react";

import fourA from "../resources/activities.png";
import aView from "../resources/activityView.png";
import plan from "../resources/plan.png";
import progress from "../resources/status.png";
import note from "../resources/note.png";
import task from "../resources/task.png";
import mark from "../resources/checklist.png";
import competencies from "../resources/competencies.png";
import competencyV from "../resources/competencyView.png";
import competency from "../resources/competency.png";
import alpha from "../resources/alphasProgress.png";

const HowTo = () => {
  return (
    <div className="page">
      <h1>How to use the app</h1>
      <div className="how-to-container ">
        <h2>Activities</h2>
        <p>
          Product Ownership Essentials consist of four activities. Browse them
          and know all the details.
        </p>

        <img
          src={fourA}
          alt="figure"
          style={{ width: "60%", alignSelf: "center" }}
        ></img>

        <p>And get to:</p>

        <div className="how-to-mini-container ">
          <div className="p" style={{ width: "50%" }}>
            <p>Plan the activities.</p>
            <img
              src={plan}
              alt="figure"
              style={{ height: "5.5rem", alignSelf: "center" }}
            ></img>
          </div>
          <div className="p" style={{ width: "50%" }}>
            <p>And check the progress.</p>
            <img
              src={progress}
              alt="figure"
              style={{ height: "5.5rem", alignSelf: "center" }}
            ></img>
          </div>
        </div>

        <br></br>
        <hr></hr>
        <div className="how-to-mini-container ">
          <div className="p" style={{ width: "50%", padding: "5rem" }}>
            <p>
              Click an activity card to go to the respective activity. There you
              can see the inputs of the activity, the required competencies and
              the outputs of the activity, that is, what you will do during the
              activity, and their corresponding status.
            </p>
          </div>
          <div className="p" style={{ width: "50%" }}>
            <img
              src={aView}
              alt="figure"
              style={{ width: "50%", alignSelf: "center" }}
            ></img>
          </div>
        </div>
        <hr></hr>
        <div className="how-to-mini-container ">
          <div className="p" style={{ width: "50%", padding: "5rem" }}>
            <p>
              The most important things to do in an activity are part of the
              checklist. Once you've complete one item, you can mark it as
              complete, progressing the alpha state or the work product level of
              detail further.
            </p>
          </div>
          <div className="p" style={{ width: "50%" }}>
            <img
              src={mark}
              alt="figure"
              style={{ width: "50%", alignSelf: "center" }}
            ></img>
          </div>
        </div>

        <hr></hr>

        <div className="how-to-mini-container ">
          <div className="p" style={{ width: "50%" }}>
            <p>Create your own tasks to complement the checklist.</p>
            <br></br>
            <br></br>
            <br></br>
            <img
              src={task}
              alt="figure"
              style={{ width: "60%", alignSelf: "center" }}
            ></img>
          </div>
          <div className="p" style={{ width: "50%" }}>
            <p>
              And add notes to make the work easier and make sure you won't
              forget important things.
            </p>
            <br></br>
            <img
              src={note}
              alt="figure"
              style={{ width: "60%", alignSelf: "center" }}
            ></img>
          </div>
        </div>

        <br></br>
        <h2>Competencies</h2>
        <p>
          To start Product Ownership Essentials, your team needs to check some
          competencies and skills. See the four competencies required to start
          the work.
        </p>

        <img
          src={competencies}
          alt="figure"
          style={{ width: "60%", alignSelf: "center" }}
        ></img>

        <hr></hr>

        <div className="how-to-mini-container ">
          <div className="p" style={{ width: "50%", padding: "5rem" }}>
            <p>
              Click a competency card to go to the respective competency and
              know the details and skills.
            </p>
          </div>
          <div className="p" style={{ width: "50%" }}>
            <img
              src={competencyV}
              alt="figure"
              style={{ width: "50%", alignSelf: "center" }}
            ></img>
          </div>
        </div>

        <hr></hr>

        <div className="how-to-mini-container ">
          <div className="p" style={{ width: "50%", padding: "5rem" }}>
            <p>
              Every competency has five levels of competency, defined by a
              checklist. You can review every team member's level of competency
              by marking all their skills from the checklist.{" "}
            </p>
          </div>
          <div className="p" style={{ width: "50%" }}>
            <img
              src={competency}
              alt="figure"
              style={{ width: "50%", alignSelf: "center" }}
            ></img>
          </div>
        </div>

        <br></br>
        <h2>Progress</h2>
        <p>
          Apart from seeing the progress of each individual activity, you can
          view a centralized progress status of the Alphas and work products.
        </p>
        <img
          src={alpha}
          alt="figure"
          style={{ width: "60%", alignSelf: "center" }}
        ></img>
      </div>
    </div>
  );
};

export default HowTo;
