import React, { useEffect } from "react";
import Header from "../header/Header";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Main from "../main/Main";
import NewsPage from "../news/NewsPage";
import Authorization from "../authorization/Authorization";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/ducks/users";

function App() {
  const dispatch = useDispatch();
  const authIsShow = useSelector((state) => state.application.authIsShow);
  const login = localStorage.getItem("login");
  const password = localStorage.getItem("password");

  useEffect(() => {
    if (login && password) {
      dispatch(loadUser(login, password));
    }
  }, [dispatch, login, password]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {authIsShow && <Authorization />}
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/news" component={NewsPage} />
          <Redirect to={"/main"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
