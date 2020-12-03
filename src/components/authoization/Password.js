import React from "react";

function Password({ value }) {
  return (
    <div>
      <input
        value={value}
        placeholder="Введите пароль"
        className="authorization__form"
      />
    </div>
  );
}

export default Password;
