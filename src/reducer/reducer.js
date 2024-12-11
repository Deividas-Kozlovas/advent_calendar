import { SET_DAYS } from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DAYS:
      const today = new Date().getDate();
      const updateDay = action.payload.days.map((day, index) => {
        return index + 1 <= today ? day : null;
      });
      return { ...state, days: updateDay };
    default:
      throw new Error(`no matching ${action.type}`);
  }
};
