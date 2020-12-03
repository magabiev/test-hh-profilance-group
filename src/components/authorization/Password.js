import React from "react";

function Password({ value, handleChange }) {
  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Введите пароль"
        className="authorization__form"
      />
    </div>
  );
}

export default Password;
