import React from "react";
import Header from "../header/Header";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Main from "../main/Main";
import NewsList from "../news/NewsList";
import Authorization from "../authoization/Authorization";
import { useSelector } from "react-redux";

function App() {
  const popUpIsShow = useSelector((state) => state.application.popUpIsShow);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {popUpIsShow && <Authorization />}
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/news" component={NewsList} />
          <Redirect to={"/main"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
