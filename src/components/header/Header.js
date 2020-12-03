import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { popUpShowToggled } from "../../redux/ducks/application";

function Header() {
  const dispatch = useDispatch();

  const handleClickSignIn = () => {
    dispatch(popUpShowToggled());
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
        <div className="nav__item">Выход</div>
      </div>
    </div>
  );
}

export default Header;
