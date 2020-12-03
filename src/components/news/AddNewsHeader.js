import React from "react";
import { useDispatch } from "react-redux";
import { newsAddShowToggled } from "../../redux/ducks/application";

function AddNewsHeader() {
  const dispatch = useDispatch();
  const newsAddShowToggle = () => {
    dispatch(newsAddShowToggled());
  };
  return (
    <div className="pop-up__header">
      <div className="pop-up__title">Авторизация</div>
      <div onClick={newsAddShowToggle} className="pop-up__close">
        <i className="material-icons">clear</i>
      </div>
    </div>
  );
}

export default AddNewsHeader;
