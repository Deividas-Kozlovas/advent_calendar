import React, { useContext, useEffect, useReducer } from "react";
import daysData from "./daysData";
import { SET_DAYS } from "../actions/actions";
import { reducer } from "../reducer/reducer";

const initialState = {
  days: [],
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

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
