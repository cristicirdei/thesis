import React from "react";
import { Link } from "react-router-dom";

import activityIcon from "../resources/activity.png";
import activitySpaceIcon from "../resources/activity_space.png";
import alphaIcon from "../resources/alpha.png";
import workProductIcon from "../resources/work_product_customer.png";

const LandingPage = () => {
  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          justifyItems: "flex-start",
          flexDirection: "column",
          width: "70%",
          padding: "2rem",
          columnGap: "-0.5rem",
          alignSelf: "center",
          marginTop: "13rem",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>Product Ownership Essentials</h1>
        <h2 style={{ marginTop: "-0.5rem", marginLeft: "0.2rem" }}>Wizard</h2>

        <div className="start" onClick={() => window.location.reload()}>
          <Link to="/join">Get Started</Link>
        </div>
      </div>

      <img
        style={{
          width: "2.8rem",
          position: "absolute",
          top: "13rem",
          left: "20rem",
        }}
        src={activityIcon}
        alt="icon"
      ></img>

      <img
        style={{
          width: "2rem",
          position: "absolute",
          top: "14rem",
          left: "68rem",
        }}
        src={activitySpaceIcon}
        alt="icon"
      ></img>

      <img
        style={{
          width: "2.5rem",
          position: "absolute",
          top: "24rem",
          left: "33rem",
        }}
        src={alphaIcon}
        alt="icon"
      ></img>

      <img
        style={{
          width: "3rem",
          position: "absolute",
          top: "16rem",
          left: "10rem",
        }}
        src={workProductIcon}
        alt="icon"
      ></img>

      <div
        style={{
          width: "1rem",
          height: "1rem",
          position: "absolute",
          borderRadius: "50%",
          top: "15rem",
          left: "38rem",
          backgroundColor: "rgba(177, 244, 191, 0.7)",
          boxShadow: "0px 2px 20px 15px rgba(177, 244, 191, 0.7)",
        }}
      ></div>

      <div
        style={{
          width: "0.4rem",
          height: "0.4rem",
          position: "absolute",
          borderRadius: "50%",
          top: "12rem",
          left: "15rem",
          backgroundColor: "rgba(177, 244, 191, 0.7)",
          boxShadow: "0px 2px 20px 15px rgba(177, 244, 191, 0.7)",
        }}
      ></div>

      <div
        style={{
          width: "2rem",
          height: "2rem",
          position: "absolute",
          borderRadius: "50%",
          top: "26rem",
          left: "19rem",
          backgroundColor: "rgba(177, 244, 191, 0.35)",
          boxShadow: "0px 2px 50px 15px rgba(177, 244, 191, 0.7)",
        }}
      ></div>

      <div
        style={{
          width: "1rem",
          height: "1rem",
          position: "absolute",
          borderRadius: "50%",
          top: "11rem",
          left: "28rem",
          backgroundColor: "rgba(177, 244, 191, 0.3)",
          boxShadow: "0px 2px 50px 15px rgba(177, 244, 191, 0.7)",
        }}
      ></div>

      <div
        style={{
          width: "1.5rem",
          height: "1.5rem",
          position: "absolute",
          borderRadius: "50%",
          top: "24rem",
          left: "64rem",
          backgroundColor: "rgba(177, 244, 191, 0.3)",
          boxShadow: "0px 2px 50px 15px rgba(177, 244, 191, 0.7)",
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
