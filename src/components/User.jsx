import { useContext } from "react";
import { dataContext } from "./UserList";

export default function User() {
  const userData = useContext(dataContext);
  return (
    <div>
      <h2>{userData[0].name}</h2>
    </div>
  );
}
