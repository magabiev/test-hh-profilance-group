import { del, get, patch, post } from "../../api/api";
import dayjs from "dayjs";

/** Types **/
const LOAD_STARTED = "news/load/started";
const LOAD_SUCCEED = "news/load/succeed";
const NEWS_DELETE = "news/delete";
const NEWS_APPROVE = "news/approve";
const NEWS_ADD = "news/add";

/** State **/
const initialState = {
  items: [],
  loading: false,
};

/** Reducer **/
export default function news(state = initialState, action) {
  switch (action.type) {
    case LOAD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCEED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case NEWS_APPROVE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case NEWS_DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
}

/** Thunks **/
export function loadNews() {
  return (dispatch) => {
    dispatch({ type: LOAD_STARTED });
    get("news").then((json) =>
      dispatch({
        type: LOAD_SUCCEED,
        payload: json,
      })
    );
  };
}

export function addedNews(title, text) {
  return (dispatch, getState) => {
    const news = getState().news.items;
    const id = news[news.length - 1].id + 1;
    const todayDate = dayjs().format("YYYY-MM-DD");
    post("news", {
      id,
      title,
      text,
      date: todayDate,
      verified: false,
    }).then((json) =>
      dispatch({
        type: NEWS_ADD,
        payload: json,
      })
    );
  };
}

export function newsApproved(id) {
  return (dispatch) => {
    patch(`news/${id}`, { verified: true }).then((json) =>
      dispatch({
        type: NEWS_APPROVE,
        payload: json,
      })
    );
  };
}

export function newsDeleted(id) {
  return (dispatch) => {
    del(`news/${id}`).then(() =>
      dispatch({
        type: NEWS_DELETE,
        payload: id,
      })
    );
  };
}
