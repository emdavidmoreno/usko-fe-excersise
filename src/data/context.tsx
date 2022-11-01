import React, { createContext, FC, useReducer } from "react";
import purchases from '../mock-data/purchases.json'
import { InitialStateType } from "../utils/models";
import reducer from "./reducer";

const initialState: InitialStateType = {
  purchases,
  sortBy: 'date_asc',
  selected: null,
  page: 0,
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state:initialState,
  dispatch: () => null,
});

interface ReactProps {
  children: any
}

const AppProvider: FC<ReactProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };