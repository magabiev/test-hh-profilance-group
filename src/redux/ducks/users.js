import { get } from "../../api/api";

/** Types **/
const LOGIN_STARTED = "login/started";
const LOGIN_SUCCEED = "login/load/succeed";
const LOGIN_ERROR = "login/error";

/** State **/
const initialState = {
  user: {},
  loading: false,
  error: false,
};

/** Reducer **/
export default function users(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
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
    get(`/authorization/login=${login}/password=${pass}`).then((json) =>
      dispatch({
        type: LOGIN_SUCCEED,
        payload: json,
      })
    ).catch(error => {
      console.error(error)
      return dispatch({type: LOGIN_ERROR})
    })
  };
}
