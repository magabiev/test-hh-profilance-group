/** Types **/
const POP_UP_SHOW_TOGGLE = "popUp/show/toggle";

/** State **/
const initialState = {
  popUpIsShow: false,
};

/** Reducer **/
export default function application(state = initialState, action) {
  switch (action.type) {
    case POP_UP_SHOW_TOGGLE:
      return {
        ...state,
        popUpIsShow: !state.popUpIsShow,
      };
    default:
      return {
        ...state,
      };
  }
}

/** Actions **/
export function popUpShowToggled() {
  return { type: POP_UP_SHOW_TOGGLE };
}
