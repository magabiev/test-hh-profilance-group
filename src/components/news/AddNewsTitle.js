import React from "react";

function AddNewsTitle({ value, handleChange }) {
  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        className="add-news__form"
        placeholder="Введите название новости"
      />
    </div>
  );
}

export default AddNewsTitle;
