import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  console.log(user);
  return (
    <div className="App">
      <NavBar user={user} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/profile" element={<Profile user={user} />}>
            <Route index element={<UserList />} />
            <Route path="/profile/userList" element={<UserList />} />
            <Route
              path="/profile/userInfo"
              element={<UserInfo user={user} />}
            />
          </Route>
        </Route>
        <Route path="/login" element={<Login login={login} user={user} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
