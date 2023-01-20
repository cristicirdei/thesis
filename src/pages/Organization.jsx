import React from "react";

import TeamMemberCard from "../components/molecules/TeamMemberCard";

const Organization = () => {
  return (
    <div className="page">
      <h1>Organization</h1>
      <div className="organization-container">
        <div className="section">
          <h2>Project</h2>
          <p>Project details </p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>

        <div className="section">
          <h2>Team</h2>
          <div className="team">
            <TeamMemberCard name="Person 1" role="role 1"></TeamMemberCard>
            <TeamMemberCard name="Person Name" role="role 2"></TeamMemberCard>
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
