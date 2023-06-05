import React, { useReducer } from "react";
import Input from "../molecules/Input";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../../utils/constants";
import axios from "axios";

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const LoginForm = () => {
  let navigate = useNavigate();

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

      if (newEvent.password.length) {
        newEvent.passwordError = " ";
        newEvent.passwordValid = true;
      } else {
        newEvent.passwordError = "Enter password";
      }

      return newEvent;
    },
    {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      emailValid: false,
      passwordValid: false,
    }
  );

  const request = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BACKEND_URL}/user/login`, {
        email: data.email,
        password: data.password,
      });
      console.log("login data: ", res.data);

      localStorage.setItem("token", res.data.token);

      let token = res.data.token;

      if (token !== null && token !== undefined) {
        const decoded = parseJwt(token);

        const user = {
          email: decoded.email,
          id: decoded.id,
          auth: true,
          role: decoded.role,
          name: decoded.name,
          project: decoded.project,
        };
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (e) {
      alert(e);
    }

    const hasProject = JSON.parse(window.localStorage.getItem("user")).project;

    if (hasProject) {
      navigate("/organization");
    } else {
      navigate("/project");
    }
    window.location.reload(false);
  };

  const submitable = () => {
    return !data.emailValid || !data.passwordValid;
  };

  return (
    <form className="auth-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Login</h2>

        <Input
          value={data.email}
          type="text"
          name="User"
          placeholder="Enter the user email"
          onChange1={(e) =>
            setData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
          onChange={(e) => setData({ email: e.target.value })}
        ></Input>
        <p className="error">{data.emailError}</p>

        <Input
          value={data.password}
          type="password"
          name="Password"
          placeholder="Enter the password"
          onChange1={(e) =>
            setData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          onChange={(e) => setData({ password: e.target.value })}
        ></Input>

        <input disabled={submitable()} type="submit" value="Login"></input>
      </div>
    </form>
  );
};

export default LoginForm;
