import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import news from "./ducks/news";
import users from "./ducks/users";
import application from "./ducks/application";

const reducers = combineReducers({
  users,
  news,
  application,
});

export const store = createStore(reducers, applyMiddleware(thunk));
