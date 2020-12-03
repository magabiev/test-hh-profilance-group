import React, { useState } from "react";
import Login from "./Login";
import Password from "./Password";
import AuthHeader from "./AuthHeader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/ducks/users";

function Authorization() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.users.error);
  const loading = useSelector((state) => state.users.loading);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const authorization = () => {
    if (login && pass) {
      dispatch(loadUser(login, pass));
    }
  };

  return (
    <div className="black">
      <div className="pop-up-block">
        <AuthHeader />
        {error && "Неверные данные"}
        <Login handleChange={handleLogin} value={login} />
        <Password handleChange={handlePass} value={pass} />
        <button
          disabled={loading}
          onClick={authorization}
          className="pop-up__button"
        >
          Войти
        </button>
      </div>
    </div>
  );
}

export default Authorization;
