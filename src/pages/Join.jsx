import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/molecules/Input";

import { BACKEND_URL } from "../utils/constants";
import axios from "axios";

const Join = () => {
  let navigate = useNavigate();

  const [showErr, setShowErr] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [data, setData] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      if (!validateEmail(newEvent.email)) {
        newEvent.emailError = "Invalid email";
      } else {
        newEvent.emailError = "";
        newEvent.emailValid = true;
      }

      if (newEvent.password.length < 8) {
        newEvent.passwordError = "Password too short";
      } else {
        newEvent.passwordError = " ";
        newEvent.passwordValid = true;
      }

      console.log(newEvent.password, newEvent.confirmPassword);

      console.log(newEvent.password.localeCompare(newEvent.confirmPassword));

      if (newEvent.password.localeCompare(newEvent.confirmPassword) !== 0) {
        newEvent.confirmPasswordError = "Passwords don't match";
      } else {
        console.log("i got here");
        newEvent.confirmPasswordError = " ";
        newEvent.confirmPasswordValid = true;
      }

      if (newEvent.name.length < 5) {
        newEvent.nameError = "Name should have at least 5 characters";
      } else {
        newEvent.nameError = " ";
        newEvent.nameValid = true;
      }

      return newEvent;
    },
    {
      email: "",
      password: "",
      name: "",
      confirmPassword: "er",
      emailError: "",
      passwordError: "",
      nameError: "",
      confirmPasswordError: "",
      emailValid: false,
      passwordValid: false,
      nameValid: false,
      confirmPasswordValid: false,
    }
  );

  const submitable = () => {
    return (
      !data.emailValid ||
      !data.passwordValid ||
      !data.nameValid ||
      !data.confirmPasswordValid
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    setShowErr(true);

    if (!submitable()) {
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
    }
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
            value={data.name}
            type="text"
            name="Name"
            placeholder="Enter your name"
            onChange={(e) => setData({ name: e.target.value })}
          ></Input>
          <p className="error">
            {showErr ? (!data.nameValid ? data.nameError : "") : ""}
          </p>

          <Input
            value={data.email}
            type="text"
            name="Email"
            placeholder="Enter your email"
            onChange={(e) => setData({ email: e.target.value })}
          ></Input>
          <p className="error">
            {showErr ? (!data.emailValid ? data.emailError : "") : ""}
          </p>

          <Input
            value={data.password}
            type="password"
            name="Password"
            placeholder="Enter a password"
            onChange={(e) => setData({ password: e.target.value })}
          ></Input>
          <p className="error">
            {showErr ? (!data.passwordValid ? data.passwordError : "") : ""}
          </p>

          <Input
            value={data.confirmPassword}
            type="password"
            name="Confirm Password"
            placeholder="Re-enter the password"
            onChange={(e) => setData({ confirmPassword: e.target.value })}
          ></Input>
          <p className="error">
            {showErr
              ? !data.confirmPasswordValid
                ? data.confirmPasswordError
                : ""
              : ""}
          </p>

          <input type="submit" value="Sign up"></input>
        </div>
      </form>
    </div>
  );
};
export default Join;
