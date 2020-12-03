import React from "react";
import { useDispatch } from "react-redux";
import { newsAddShowToggled } from "../../redux/ducks/application";

function AddNewsButton() {
  const dispatch = useDispatch();
  const newsAddShowToggle = () => {
    dispatch(newsAddShowToggled());
  };
  return (
    <button onClick={newsAddShowToggle} className="add-news-button">
      Добавить
    </button>
  );
}

export default AddNewsButton;
