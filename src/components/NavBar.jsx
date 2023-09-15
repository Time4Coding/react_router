import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
}
