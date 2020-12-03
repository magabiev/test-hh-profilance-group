import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authShowToggled } from "../../redux/ducks/application";
import { logOut } from "../../redux/ducks/users";

function Header() {
  const dispatch = useDispatch();

  const handleClickSignIn = () => {
    dispatch(authShowToggled());
  };
  const handleClickLogOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    dispatch(logOut());
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="nav__item">
          <Link to="/main">Главная</Link>
        </div>
        <div className="nav__item">
          <Link to="/news">Новости</Link>
        </div>
        <div className="nav__item" onClick={handleClickSignIn}>
          Вход
        </div>
        <div onClick={handleClickLogOut} className="nav__item">
          Выход
        </div>
      </div>
    </div>
  );
}

export default Header;
