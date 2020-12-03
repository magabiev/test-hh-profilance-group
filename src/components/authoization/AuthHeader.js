import React from "react";
import { useDispatch } from "react-redux";
import { popUpShowToggled } from "../../redux/ducks/application";

function AuthHeader() {
  const dispatch = useDispatch();
  const handleClickClose = () => {
    dispatch(popUpShowToggled());
  };

  return (
    <div className="authorization__header">
      <div className="authorization__title">Авторизация</div>
      <div className="authorization__close" onClick={handleClickClose}>
        <i className="material-icons">clear</i>
      </div>
    </div>
  );
}

export default AuthHeader;
