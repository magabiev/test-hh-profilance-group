import React from "react";

function Login({ value }) {
  return (
    <div>
      <input
        value={value}
        placeholder="Введите логин"
        className="authorization__form"
      />
    </div>
  );
}

export default Login;
