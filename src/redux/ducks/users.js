import { get } from "../../api/api";

/** Types **/
const LOGIN_STARTED = "login/started";
const LOGIN_SUCCEED = "login/load/succeed";
const NEWS_SEARCH = "news/search";
const LOGIN_ERROR = "login/error";

/** State **/
const initialState = {
  user: {},
  loading: false,
  error: false,
  searchValue: "",
};

/** Reducer **/
export default function users(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCEED:
      return {
        ...state,
        error: false,
        user: action.payload,
        loading: false,
      };
    case NEWS_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadUser(login, pass) {
  return (dispatch) => {
    dispatch({ type: LOGIN_STARTED });
    get(`authorization/login=${login}/password=${pass}`)
      .then((json) => {
        localStorage.setItem("login", json.login);
        localStorage.setItem("password", json.password);
        return dispatch({
          type: LOGIN_SUCCEED,
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
        return dispatch({ type: LOGIN_ERROR });
      });
  };
}

export function searchRequest(value) {
  return { type: NEWS_SEARCH, payload: value };
}
