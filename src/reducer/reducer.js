import { SET_DAYS } from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DAYS:
      return { ...state, days: action.payload.days };
    default:
      throw new Error(`no matching ${action.type}`);
  }
};
