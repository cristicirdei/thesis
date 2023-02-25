import React, { useState } from "react";

import Input from "../components/molecules/Input";
import Textarea from "../components/atoms/Textarea";

import userIcon from "../resources/user-solid.svg";

import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

const SetUpProject = () => {
  let navigate = useNavigate();

  const [project, setProject] = useState({
    name: null,
    company: null,
    description: null,
  });

  const [member, setMember] = useState({
    name: null,
    email: null,
    role: null,
  });
  const [team, setTeam] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BACKEND_URL}/project/`, {
        name: project.name,
        description: project.description,
        company: project.company,
        team: team,
        owner: JSON.parse(window.localStorage.getItem("user")),
      });
      console.log(res.data);
    } catch (e) {
      alert(e);
    }

    navigate("/organization");
  };

  return (
    <div className="page-over">
      <form className="create-project" onSubmit={handleSubmit}>
        <div className="section">
          <h2>Create Project</h2>
          <Input
            type="text"
            name="Company"
            placeholder="Enter the company you work for"
            onChange={(e) =>
              setProject((prevState) => ({
                ...prevState,
                company: e.target.value,
              }))
            }
          ></Input>
          <Input
            type="text"
            name="Project Name"
            placeholder="Enter a name for the project"
            onChange={(e) =>
              setProject((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          ></Input>

          <Textarea
            name="Project Description"
            placeholder="Enter some details about the project to let your team kow what it's all about"
            onChange={(e) =>
              setProject((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          ></Textarea>
        </div>
        <div className="section">
          <h2>Team</h2>
          <Input
            type="text"
            name="Email"
            placeholder="Enter team member email"
            onChange={(e) =>
              setMember((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          ></Input>
          <Input
            type="text"
            name="Team Member Name"
            placeholder="Enter team member name"
            onChange={(e) =>
              setMember((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          ></Input>
          <Input
            type="text"
            name="Role"
            placeholder="Enter team member role"
            onChange={(e) =>
              setMember((prevState) => ({
                ...prevState,
                role: e.target.value,
              }))
            }
          ></Input>
          <input
            type="button"
            value="Add team member"
            onClick={(e) => {
              setTeam((prevState) => [...prevState, member]);
              document.getElementById("Email").value = "";
              document.getElementById("Team Member Name").value = "";
              document.getElementById("Role").value = "";
            }}
          ></input>
          <div className="people">
            {team.length
              ? team.map((member, index) => (
                  <div className="member" key={index}>
                    <img
                      className="img-user"
                      src={userIcon}
                      alt="activity"
                    ></img>
                    <p>{member.email}</p>
                  </div>
                ))
              : ""}
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
