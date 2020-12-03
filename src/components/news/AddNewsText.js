import React from "react";

function AddNewsText({ value, handleChange }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder="Введите текст новости"
        className="news-text__form"
      />
    </div>
  );
}

export default AddNewsText;
