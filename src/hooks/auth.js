import { createContext, useState, useContext } from "react";

const UserContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(UserContext);
};
