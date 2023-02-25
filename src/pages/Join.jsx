import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/molecules/Input";

import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

const Join = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: null,
    password: null,
    confirmPassword: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await axios.post(`${BACKEND_URL}/user/signup`, {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: "PO",
      });
      console.log(res.data);
    } catch (e) {
      alert(e);
    }

    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("signup") === "true") {
      localStorage.setItem("signup", false);
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-over">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="details-zone">
          <h2>Sign up</h2>

          <Input
            type="text"
            name="Name"
            placeholder="Enter institution name"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          ></Input>

          <Input
            type="text"
            name="Email"
            placeholder="Enter your email"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          ></Input>

          <Input
            type="password"
            name="Password"
            placeholder="Enter a password"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          ></Input>

          <Input
            type="password"
            name="Confirm Password"
            placeholder="Re-enter the password"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                confirmPassword: e.target.value,
              }))
            }
          ></Input>

          <input type="submit" value="Sign up"></input>
        </div>
      </form>
    </div>
  );
};
export default Join;
