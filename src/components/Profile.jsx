import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Profile({ user }) {
  return (
    <div>
      <h3>Profile</h3>
      <nav>
        <NavLink to="userInfo">UserInfo</NavLink>
        <NavLink to="userList">UserList</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
