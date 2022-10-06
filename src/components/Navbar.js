import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  textDecoration: "none",
  color: "darkblue",
};

function NavBar() {
  return (
    <div className="navbar">
          <NavLink to="/" style={linkStyles} activeStyle={{ color: "purple" }}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={linkStyles}
            activeStyle={{ color: "purple" }}
          >
            About
          </NavLink>
    </div>
  );
}

export default NavBar;