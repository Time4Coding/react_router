import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login({ login, user }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  console.log(user);
  // useEffect(() => {
  //   user && navigate("/");
  // }, []);
  return !user ? (
    <div>
      <br />
      <br />
      <br />
      <label htmlFor="user name">User Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login(name);
          navigate("/profile/userInfo");
        }}
      >
        Login
      </button>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
