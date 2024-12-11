import React, { useContext, useEffect, useReducer } from "react";
import daysData from "./daysData";
import { SET_DAYS, SET_OPENED_DAYS } from "../actions/actions";
import { reducer } from "../reducer/reducer";

const initialState = {
  days: [],
  openedDays: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: SET_DAYS,
      payload: { days: daysData },
    });
  }, []);

  const openDay = (key) => {
    dispatch({ type: SET_OPENED_DAYS, payload: key });
  };

  return (
    <AppContext.Provider value={{ ...state, openDay }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
