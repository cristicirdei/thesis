import React, { useEffect, useState } from "react";

import TeamMemberCard from "../components/molecules/TeamMemberCard";

import { BACKEND_URL } from "../utils/constants";

const Organization = () => {
  const [data, setData] = useState();

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

  return (
    <div className="page">
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

        <div className="section">
          <h2>Progress</h2>
          <p>Some details on the project progress</p>
          <p>current state, etc.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
    </div>
  );
};

export default Organization;
