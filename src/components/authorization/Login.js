import React from "react";

function Login({ value, handleChange }) {
  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Введите логин"
        className="authorization__form"
      />
    </div>
  );
}

export default Login;
