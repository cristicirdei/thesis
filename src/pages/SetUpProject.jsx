import React from "react";

import Input from "../components/molecules/Input";
import Textarea from "../components/atoms/Textarea";

import userIcon from "../resources/user-solid.svg";

const SetUpProject = () => {
  return (
    <div className="page-over">
      <form className="create-project">
        <div className="section">
          <h2>Create Project</h2>
          <Input
            type="text"
            name="Company"
            placeholder="Enter the company you work for"
            onChange
          ></Input>
          <Input
            type="text"
            name="Project Name"
            placeholder="Enter a name for the project"
            onChange
          ></Input>

          <Textarea
            name="Project Description"
            placeholder="Enter some details about the project to let your team kow what it's all about"
            onChange
          ></Textarea>
        </div>
        <div className="section">
          <h2>Team</h2>
          <Input
            type="text"
            name="Email"
            placeholder="Enter team member email"
            onChange
          ></Input>
          <Input
            type="text"
            name="Name"
            placeholder="Enter team member name"
            onChange
          ></Input>
          <Input
            type="text"
            name="Role"
            placeholder="Enter team member role"
            onChange
          ></Input>
          <input type="button" value="Add team member"></input>
          <div className="people">
            <div className="member">
              <img className="img-user" src={userIcon} alt="activity"></img>
              <p>one@gmail.com</p>
            </div>
            <div className="member">
              <img className="img-user" src={userIcon} alt="activity"></img>
              <p>two@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="section footer">
          <input type="submit" value="Create Project"></input>
        </div>
      </form>
    </div>
  );
};

export default SetUpProject;
