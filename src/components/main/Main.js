import React from "react";
import { useSelector } from "react-redux";

function Main() {
  const user = useSelector((state) => state.users.user);
  return (
    <div className="main">
      <div className="greeting">
        Привет{" "}
        <div className="username">{user.login ? user.login : "Гость"}</div>
      </div>
    </div>
  );
}

export default Main;
