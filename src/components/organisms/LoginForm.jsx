import React, { useState } from "react";
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

  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const request = async (e) => {
    e.preventDefault();
    console.log(data);

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
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log("user", user);

        if (decoded.exp * 1000 < new Date().getTime()) {
          localStorage.clear();
        } else {
        }
      }
    } catch (e) {
      alert(e);
    }

    navigate("/organization");
    window.location.reload(false);
  };

  return (
    <form className="auth-form" onSubmit={request}>
      <div className="details-zone">
        <h2>Login</h2>

        <Input
          type="text"
          name="User"
          placeholder="Enter the user email"
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
          placeholder="Enter the password"
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        ></Input>

        <input type="submit" value="Login"></input>
      </div>
    </form>
  );
};

export default LoginForm;
