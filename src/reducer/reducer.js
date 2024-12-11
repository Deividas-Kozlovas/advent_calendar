import { SET_OPENED_DAYS, SET_DAYS } from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DAYS:
      const today = new Date().getDate();
      const updateDay = action.payload.days.map((day, index) => {
        return index + 1 <= today ? day : null;
      });
      return { ...state, days: updateDay };
    case SET_OPENED_DAYS:
      const openedDays = [...state.openedDays];
      if (!openedDays.includes(action.payload)) {
        openedDays.push(action.payload);
      }
      return {
        ...state,
        openedDays,
      };
    default:
      throw new Error(`no matching ${action.type}`);
  }
};
