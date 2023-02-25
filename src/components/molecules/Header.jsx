import React from "react";
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user")) || {
  type: "user",
  auth: false,
};

const handleLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
};

/*if (localStorage.getItem("token")) {
  user.auth = true;
}*/
/*
localStorage.removeItem("token");
localStorage.removeItem("user");
*/

const Header = () => {
  return (
    <div className="header">
      {user.auth === true ? (
        <div className="navlinks" onClick={() => handleLogOut()}>
          {" "}
          <Link to="/login">Sign Out</Link>
        </div>
      ) : (
        <>
          <div className="navlinks" onClick={() => window.location.reload()}>
            <Link to="/login">Log In</Link>
          </div>
          <div className="navlinks" onClick={() => window.location.reload()}>
            <Link to="/join">Sign Up</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
