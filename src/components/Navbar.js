import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink
            to="/about">
            About
          </NavLink>
          <NavLink
            to="/donate">
            Donate
          </NavLink>
    </div>
  );
}

export default NavBar;