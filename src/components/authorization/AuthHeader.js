import React from "react";
import { useDispatch } from "react-redux";
import { authShowToggled } from "../../redux/ducks/application";

function AuthHeader() {
  const dispatch = useDispatch();
  const handleClickClose = () => {
    dispatch(authShowToggled());
  };

  return (
    <div className="pop-up__header">
      <div className="pop-up__title">Авторизация</div>
      <div className="pop-up__close" onClick={handleClickClose}>
        <i className="material-icons">clear</i>
      </div>
    </div>
  );
}

export default AuthHeader;
