/** Types **/
const AUTHORIZATION_SHOW_TOGGLE = "authorization/show/toggle";
const ADD_NEWS_SHOW_TOGGLE = "addNews/show/toggle";

/** State **/
const initialState = {
  authIsShow: false,
  newsAddIsShow: false,
};

/** Reducer **/
export default function application(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_SHOW_TOGGLE:
      return {
        ...state,
        authIsShow: !state.authIsShow,
      };
    case ADD_NEWS_SHOW_TOGGLE:
      return {
        ...state,
        newsAddIsShow: !state.newsAddIsShow,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Actions **/
export function authShowToggled() {
  return { type: AUTHORIZATION_SHOW_TOGGLE };
}
export function newsAddShowToggled() {
  return { type: ADD_NEWS_SHOW_TOGGLE };
}
