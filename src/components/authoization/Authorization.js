import React from "react";
import Login from "./Login";
import Password from "./Password";
import AuthHeader from "./AuthHeader";

function Authorization() {
  return (
    <div className="black">
      <div className="authorization">
        <AuthHeader />
        <Login />
        <Password />
        <button className="authorization__button">Войти</button>
      </div>
    </div>
  );
}

export default Authorization;
